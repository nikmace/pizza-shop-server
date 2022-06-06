import * as mongoose from 'mongoose';

export const PizzaSchema = new mongoose.Schema({
  rating: { type: Number },
  sizes: [{ type: Number }],
  category: { type: Number },
  type: [{ type: Number }],
  imageUrl: { type: String },
  name: { type: String },
  price: { type: Number },
  id: { type: Number },
});

export interface Pizza {
  rating: number;
  sizes: number[];
  category: number;
  type: number[];
  imageUrl: string;
  name: string;
  price: number;
  id: string;
}
