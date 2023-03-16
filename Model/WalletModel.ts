import { Document, Schema, model } from "mongoose";

interface Wallet {
  Balance: string;
  credit: string;
  debit: string;
}

interface Iwallet extends Wallet, Document {}

const WalletSchema = new Schema({
  Balance: String,
  credit: String,
  debit: String,
});

export default model<Iwallet>("wallet", WalletSchema);
