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
      "Subcriber Connected to Broker amqp://localhost:5672"
    );
    let queueName = "technical";
    //let message = "this is technocal baj9";
    channel.assertQueue(queueName, {
      durable: false,
    });

    channel.consume(queueName, (msg) => {
      console.log(`Recieved > ${msg.content.toString()}`);
      channel.ack(msg);
    });
  });
});
