import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from './order.controller';

type ValidationResponse = {
  message: string;
  success: boolean;
  errors: string[];
  errorCount: number;
};

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private readonly order: Model<Order>) {}
  // ----------------------------------------------------------------
  async saveOrder(body: Order) {
    const res: ValidationResponse = {
      message: 'Saved to database',
      success: true,
      errors: [],
      errorCount: 0,
    };

    // Make a mongoose model and save
    const doc = new this.order(body);

    doc
      .save()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        res.errors.push(err.toString());
        res.success = false;
        res.message = 'Errors occured when saving to DB';
        res.errorCount++;
      });

    return res;
  }
  // ----------------------------------------------------------------
}
