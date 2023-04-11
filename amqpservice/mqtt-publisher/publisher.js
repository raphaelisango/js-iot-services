const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost:5672", (err, connection) => {
  if (err) {
    throw err;
  }

  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    console.log(
      "\x1b[32m",
      ">> Publisher Connected to Broker amqp://localhost:5672"
    );
    let queueName = "technical";

    channel.assertQueue(queueName, {
      durable: false,
    });

    setInterval(() => {
      console.log(">>Publishing ..........");
      let message = `${randomNumber()}       ${randomNumber()}       ${randomNumber()}`;
      channel.sendToQueue(queueName, Buffer.from(message));
    }, 3000);

    setTimeout(() => {
      //connection.close();
    }, 1000);
  });
});

function randomNumber() {
  var chars = "0123456789";
  var wordLength = 3;
  var value = "";

  for (var i = 0; i <= wordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    value += chars.substring(randomNumber, randomNumber + 1);
  }

  return value;
}
