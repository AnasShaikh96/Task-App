const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database  ");
    }
    const db = client.db(databaseName);
    // db.collection("users").findOne(
    //   { _id: new ObjectId("60f17df4225f2fdc835c166d") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to find ");
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("users")
    //   .find({ age: 20 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("unavailable");
    //     }
    //     console.log(count);
    //   });
    // db.collection("users")
    //   .find({ age: 20 })
    //   .toArray((error, count) => {
    //     if (error) {
    //       return console.log("unavailable");
    //     }
    //     console.log(count);
    //   });

    db.collection("tasks").findOne(
      { _id: new ObjectId("60f180dfe6c3157c42161be6") },
      (error, task) => {
        if (error) {
          return console.log("not found");
        }
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, task) => {
        if (error) {
          return console.log("not found");
        }
        console.log(task);
      });
  }
);
