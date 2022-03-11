const express = require("express");
const bodyParser = require("body-parser");

const accountSid = 'YOURSID';
const authToken = 'YOURTOKEN';
const fromPhone = '+1TWILIOPHONE';
const toPhone = '+1YOURPHONE';

const app = express();
const PORT = 3100;
const client = require('twilio')(accountSid, authToken);

// this application will receive JSON data
app.use(bodyParser.json());

// start the server on port 3100
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

// process a GET request to http://localhost:3100/hello
app.get("/hello", (request, response) => {
    console.log(request.body);

    response.send("hi!");
});

app.post("/webhook", (request, response) => {
    console.log(request.body);

    const activity = request.body.activity;
    const message = `💰🚀 ${activity[0].fromAddress} paid you ${activity[0].value} ETH. https://ropsten.etherscan.io/tx/${activity[0].hash} 💰🚀`;

    client.messages
        .create({
            body: message,
            from: fromPhone,
            to: toPhone
        })

    response.send(message);
});