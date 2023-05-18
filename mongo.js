const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sanchi:sanchi123@cluster0.mnm2ohd.mongodb.net/testmain?retryWrites=true&w=majority"
  )
  .then(() => {})
  .catch(() => {
    console.log("failed");
  });

const newSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
