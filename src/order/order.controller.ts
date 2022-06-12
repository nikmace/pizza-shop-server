import { Body, Controller, Post } from '@nestjs/common';

import { OrderService } from './order.service';

export type OrderInputValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  time: string;
};

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  getAll(@Body() body: OrderInputValues) {
    return this.orderService.validateInput(body);
  }
}
