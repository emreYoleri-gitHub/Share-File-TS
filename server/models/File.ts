import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface IFile extends Document {
  filename: string;
  secure_url: string;
  format: string;
  sizeInBytes: true;
  sender?: string;
  receiver?: string;
}

const fileSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },

    secure_url: {
      type: String,
      required: true,
    },

    format: {
      type: String,
      required: true,
    },

    sizeInBytes: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IFile>("File", fileSchema);
