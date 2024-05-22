const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Serhii:Dzy84f0skguIzmZQ@cluster0.zcdyxr8.mongodb.net/db_points?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
