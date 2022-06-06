import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IPizzaDto } from '../dto/pizza.dto';
import { Pizza } from './pizza.model';
import { QueryDto } from './pizza.controller';

@Injectable()
export class PizzaService {
  constructor(
    @InjectModel('Pizza') private readonly pizzaModel: Model<Pizza>,
  ) {}
  // ----------------------------------------------------------------
  async getAllPizzas(body: QueryDto): Promise<Pizza[]> {
    const { categoryId, sortName, currentPage } = body;

    // const count = await this.pizzaModel.count();
    const itemsToRender = 8;
    // const countOfPages = Math.round(count / itemsToRender);
    const itemToSkip = itemsToRender * (currentPage - 1);

    try {
      if (categoryId === 0) {
        return this.pizzaModel.find().sort(sortName).skip(itemToSkip).limit(8);
      }

      return this.pizzaModel
        .find({ category: { $eq: categoryId } })
        .limit(8)
        .sort(sortName)
        .skip(itemToSkip)
        .limit(8);
    } catch (err) {
      console.log(err);
    }
  }

  // ----------------------------------------------------------------
  async getPizzaById(id: string): Promise<IPizzaDto[]> {
    try {
      return await this.pizzaModel.findById(id);
    } catch (err) {
      console.log(err);
    }
  }
}
