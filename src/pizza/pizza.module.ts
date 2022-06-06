import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { PizzaSchema } from './pizza.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pizza', schema: PizzaSchema }]),
  ],
  controllers: [PizzaController],
  providers: [PizzaService],
})
class PizzaModule {}

export default PizzaModule;
