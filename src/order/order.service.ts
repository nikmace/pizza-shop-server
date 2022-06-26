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
    let res: ValidationResponse = {
      message: '',
      success: true,
      errors: [],
      errorCount: 0,
    };

    // Make a mongoose model and save
    const doc = new this.order(body);

    await doc
      .save()
      .then((data) => {
        console.log(data);
        res = {
          ...res,
          message: 'Заказ успешно отправлен! Ожидайте звонка от курьера😃',
        };
      })
      .catch((err) => {
        if (err) {
          res = {
            errors: [err.toString()],
            success: false,
            message:
              'К сожалению, что-то пошло не так и мы не смогли обработать ваш заказ😔',
            errorCount: 1,
          };
        }
      });

    return res;
  }
  // ----------------------------------------------------------------
}
