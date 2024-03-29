const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderid: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    roomid: {
      type: String,
      required: true,
    },
    recieverid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Message", messageSchema);
