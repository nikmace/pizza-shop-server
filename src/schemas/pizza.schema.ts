import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PizzaDocument = Pizza & Document;

@Schema()
export class Pizza {
  @Prop()
  rating: number;

  @Prop()
  sizes: number[];

  @Prop()
  category: number;

  @Prop()
  type: number[];

  @Prop()
  imageUrl: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  id: string;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
