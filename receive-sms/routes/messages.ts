import { twiml } from "twilio";
import { urlencoded, Router, Response } from "express";
import { MessagingRequest } from "../types/request";

const { MessagingResponse } = twiml;
const router = Router();
router.use(urlencoded({ extended: false }));

router.post("/", (req: MessagingRequest, res: Response<string>) => {
  const message = req.body.Body;

  const response = new MessagingResponse();
  response.message(`Hello from TypeScript! You said "${message}"`);

  res.set("Content-Type", "application/xml");
  res.send(response.toString());
});

export default router;
