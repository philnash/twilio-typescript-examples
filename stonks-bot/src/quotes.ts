import got from "got";
import { finnhubApiKey } from "../config";

export const getQuote = async (symbol: string): Promise<Quote> => {
  const response = await got("https://finnhub.io/api/v1/quote", {
    searchParams: { symbol },
    responseType: "json",
    headers: {
      "X-Finnhub-Token": finnhubApiKey,
    },
  });
  return response.body as Quote;
};

type Quote = {
  /**
   * Opening price
   */
  o: number;
  /**
   * High
   */
  h: number;
  /**
   * Low
   */
  l: number;
  /**
   * Current price
   */
  c: number;
  /**
   * Previous close
   */
  pc: number;
  /**
   * Timestamp
   */
  t: number;
};
