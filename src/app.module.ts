import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import PizzaModule from './pizza/pizza.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    PizzaModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: `mongodb+srv://${config.get('MONGO_USER')}:${config.get(
          'MONGO_PW',
        )}@pizza-cluster.56ojo.mongodb.net/?retryWrites=true&w=majority`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
