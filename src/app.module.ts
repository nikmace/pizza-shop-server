import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import PizzaModule from './pizza/pizza.module';
import configuration from './config/configuration';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    PizzaModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: `mongodb+srv://${
          config.get('mongo_user') || process.env.MONGO_USER
        }:${
          config.get('mongo_pw') || process.env.MONGO_PW
        }@pizza-cluster.56ojo.mongodb.net/?retryWrites=true&w=majority`,
        // uri: `mongodb+srv://admin_user:eVn9Hcty@pizza-cluster.56ojo.mongodb.net/?retryWrites=true&w=majority`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule {}
