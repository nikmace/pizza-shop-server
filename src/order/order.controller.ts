import { Body, Controller, Post } from '@nestjs/common';

import { OrderService } from './order.service';

export type OrderCartData = {
  name: string;
  variationId: string;
  count: number;
  price: number;
  size: number;
  type: string;
};

export type Order = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  time: string;
  order: OrderCartData[];
  orderTimeSent: string;
  totalPrice: number;
};

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  getAll(@Body() body: Order) {
    return this.orderService.validateInput(body);
  }
}
