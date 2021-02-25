import "dotenv/config";

import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const myNumber = process.env.MY_NUMBER;

if (accountSid && authToken && myNumber && twilioNumber) {
  const client = new Twilio(accountSid, authToken);

  client.messages
    .create({
      from: twilioNumber,
      to: myNumber,
      body: "You just sent an SMS from TypeScript using Twilio!",
    })
    .then((message) => console.log(message.sid));
} else {
  console.error(
    "You are missing one of the variables you need to send a message"
  );
}
