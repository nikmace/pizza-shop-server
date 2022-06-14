import * as mongoose from 'mongoose';
import { Order } from './order.controller';

export const OrderSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  time: { type: String },
  order: [
    {
      name: { type: String },
      variationId: { type: String },
      count: { type: Number },
      price: { type: Number },
      size: { type: Number },
      type: { type: String },
    },
  ],
  orderTimeSent: { type: String },
  totalPrice: { type: Number },
});

export const OrderModel = mongoose.model<Order>('Order', OrderSchema);
