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

export type Email = {
  email: string;
};

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  getAll(@Body() body: Order) {
    return this.orderService.saveOrder(body);
  }

  @Post('/retrieve')
  getOrdersByEmail(@Body() body: Email) {
    return this.orderService.getOrdersByEmail(body.email);
  }
}
