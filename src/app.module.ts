import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import PizzaModule from './pizza/pizza.module';
import configuration from './config/configuration';
import { ValidationController } from './validation/validation.controller';
import { ValidationService } from './validation/validation.service';
import OrderModule from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    PizzaModule,
    OrderModule,
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
  controllers: [ValidationController],
  providers: [ValidationService],
})
export class AppModule {}
