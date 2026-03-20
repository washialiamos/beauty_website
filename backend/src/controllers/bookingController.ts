import { Request, Response } from 'express';
import Booking from '../models/Booking';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: 'Error creating booking', error });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};
