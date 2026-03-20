import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product';
import Service from './models/Service';

dotenv.config();

const products = [
  {
    name: "Radiance Serum",
    category: "Skincare",
    price: 89,
    rating: 4.8,
    image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Premium vitamin C serum for glowing skin"
  },
  {
    name: "Luxury Lipstick Set",
    category: "Makeup",
    price: 125,
    rating: 4.9,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "5-piece premium lipstick collection"
  },
  {
    name: "Nourishing Hair Mask",
    category: "Haircare",
    price: 65,
    rating: 4.7,
    image: "https://images.pexels.com/photos/7262047/pexels-photo-7262047.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Deep conditioning treatment for all hair types"
  }
];

const services = [
  {
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments using premium skincare products for glowing, healthy skin.",
    features: ["Deep Cleansing", "Anti-Aging", "Hydrating Masks", "Custom Solutions"],
    price: "From $120",
    duration: "60-90 min",
    color: "rose"
  },
  {
    title: "Hair Styling",
    description: "Professional hair cutting, coloring, and styling services for every occasion.",
    features: ["Cuts & Trims", "Color Services", "Special Events", "Hair Treatments"],
    price: "From $80",
    duration: "45-120 min",
    color: "pink"
  }
];

const seedDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/beauty_db';
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding');

    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded');

    await Service.deleteMany({});
    await Service.insertMany(services);
    console.log('Services seeded');

    await mongoose.connection.close();
    console.log('Seeding completed and connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
