import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const BookingSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
}, { timestamps: true });

export default mongoose.model<IBooking>('Booking', BookingSchema);
