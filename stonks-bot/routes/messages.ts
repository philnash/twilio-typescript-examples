import { twiml } from "twilio";
import { urlencoded, Router, Response } from "express";
import { MessagingRequest } from "../types/request";
import { getQuote } from "../src/quotes";

const { MessagingResponse } = twiml;
const router = Router();
router.use(urlencoded({ extended: false }));

const formatter = Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

router.post("/", async (req: MessagingRequest, res: Response<string>) => {
  const symbol = req.body.Body.toUpperCase();
  const response = new MessagingResponse();
  try {
    const quote = await getQuote(symbol);
    const emojiChart = quote.c > quote.pc ? "📈" : "📉";

    response.message(
      `Current price for ${symbol}: ${formatter.format(quote.c)}
Previous close: ${formatter.format(quote.pc)} ${emojiChart}`
    );
  } catch (error) {
    console.error(error);
    response.message(`Could not find a stock price for ${symbol}.`);
  }
  res.contentType("application/xml");
  res.send(response.toString());
});

export default router;
