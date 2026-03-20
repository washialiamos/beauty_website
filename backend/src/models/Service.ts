import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  color: string;
}

const ServiceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: [String], required: true },
  price: { type: String, required: true },
  duration: { type: String, required: true },
  color: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IService>('Service', ServiceSchema);
