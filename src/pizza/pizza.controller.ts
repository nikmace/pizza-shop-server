import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IPizzaDto } from '../dto/pizza.dto';
import { Pizza } from './pizza.model';
import { PizzaService } from './pizza.service';

export type QueryDto = {
  categoryId: number;
  sortName: string;
  currentPage: number;
};

@Controller('/pizzas')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get(':id')
  getPizzaById(@Param('id') id: string): Promise<IPizzaDto[]> {
    return this.pizzaService.getPizzaById(id);
  }

  @Post()
  getAll(@Body() body: QueryDto): Promise<Pizza[]> {
    return this.pizzaService.getAllPizzas(body);
  }
}
