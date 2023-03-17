import { Document, Schema, model } from "mongoose";

interface Mailer {
  name: string;
  email: string;
  message: string;
  sentAt: Date;
}

interface Imailer extends Mailer, Document {}

const mailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sentAT: {
    type: Date,
    default: new Date().toDateString(),
  },
});

export default model<Imailer>("emails", mailSchema);
