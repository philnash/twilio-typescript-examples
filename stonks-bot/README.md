# Build an SMS stocks bot with Twilio and TypeScript

This is an example project showing how to receive SMS messages, look up the stock price based on the body of the message and reply using the [Twilio Programmable Messaging API](https://www.twilio.com/docs/sms/api), the [Finnhub API](https://finnhub.io/docs/api/quote) and [TypeScript](https://www.typescriptlang.org/).

## Running this project

### Things you will need

* [Node.js](https://nodejs.org/en/)
* A Twilio account (if you don't have one yet, [sign up for a free Twilio account here and receive $10 credit when you upgrade](https://twil.io/philnash))
* A Twilio phone number that can receive SMS messages
* [ngrok](https://ngrok.com/) so that you can [respond to webhooks in your local development environment](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html)
* A free [Finnhub account](https://finnhub.io/register)

### Get the code

Clone the repo and change into the `stonks-bot` directory:

```bash
git clone https://github.com/philnash/twilio-typescript-examples.git
cd twilio-typescript-examples/stonks-bot
```

### Dependencies

Install the dependencies:

```bash
npm install
```

### Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Fill in your Finnhub API key.

### Compile the TypeScript to JavaScript

Compile the project:

```bash
npm run build
```

Note that this runs the TypeScript compiler, `tsc`, you could also run `npx tsc` to get the same output.

The TypeScript project will be compiled into the `dist` directory.

You can also continuously compile the project as it changes with

```bash
npm run watch
```

### Run the project

Start the web server with:

```bash
npm start
```

### Expose the local server with ngrok

To respond to an incoming webhook you will need a publicly available URL. [ngrok](https://ngrok.com) is a tool that can tunnel through from a public URL to your machine. Once you've [downloaded and installed ngrok](https://ngrok.com/download) you can run it like so:

```bash
ngrok http 3000
```

The ngrok terminal will show you a URL, like `https://RANDOM_STRING.ngrok.io`.

### Connect your phone number to your app

Using the ngrok URL from the last part, you can set up your Twilio phone number with your application. [Edit your phone number](https://www.twilio.com/console/phone-numbers/incoming) and in the Messaging section, next to when "A message comes in" enter your ngrok URL with the path `/messages`.

```
https://RANDOM_STRING.ngrok.io/messages
```

Save the phone number and you are ready.

Send your number a message with a stock symbol and you should receive a message in reply 🎉