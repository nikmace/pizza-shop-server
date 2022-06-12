import { Injectable } from '@nestjs/common';

import { Order } from './order.controller';

type ValidationResponse = {
  message: string;
  success: boolean;
  errors: string[];
  errorCount: number;
};

@Injectable()
export class OrderService {
  // ----------------------------------------------------------------
  async validateInput(body: Order) {
    const res: ValidationResponse = {
      message: 'Saved to database',
      success: true,
      errors: [],
      errorCount: 0,
    };

    // Make a mongoose model and save

    return body && res;
  }
  // ----------------------------------------------------------------
}
