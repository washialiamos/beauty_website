import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  image: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema);
