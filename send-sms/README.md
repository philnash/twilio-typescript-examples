# Send SMS with Twilio and TypeScript

This is an example project showing how to send an SMS message with the [Twilio Programmable Messaging API](https://www.twilio.com/docs/sms/api) and [TypeScript](https://www.typescriptlang.org/).

You can read about [how to send an SMS with TypeScript using Twilio](https://www.twilio.com/blog/send-sms-typescript-twilio) on the Twilio blog.

## Running this project

### Get the code

Clone the repo and change into the `send-sms` directory:

```bash
git clone https://github.com/philnash/twilio-typescript-examples.git
cd twilio-typescript-examples/send-sms
```

### Dependencies

Install the dependencies:

```bash
npm install
```

### Config

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Fill in the variables with details from your Twilio account, or your own phone number.

| Variable            | Details                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| TWILIO_ACCOUNT_SID  | Your Account SID, available on your [Twilio Console](https://www.twilio.com/console)                                                   |
| TWILIO_AUTH_TOKEN   | Your Auth Token, available on your [Twilio Console](https://www.twilio.com/console)                                                    |
| TWILIO_PHONE_NUMBER | A [Twilio phone number](https://www.twilio.com/console/phone-numbers/incoming) that can send SMS messages                              |
| MY_NUMBER           | Your own phone number, in [e.164 format](https://www.twilio.com/docs/glossary/what-e164), so that you can receive the SMS that is sent |

### Compile the TypeScript to JavaScript

Compile the `index.ts` file:

```bash
npm run build
```

Note that this runs the TypeScript compiler, `tsc`, you could also run `npx tsc` to get the same output.

The TypeScript will be compiled into a JavaScript file in `dist/index.js`.

### Send the message

Now send the message with:

```bash
npm run send
```

You should receive the message on your phone 🎉