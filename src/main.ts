import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const corsConfig = {
    origin: ['http://localhost:3000', 'https://dodo-pizza.vercel.app/'],
    methods: 'GET',
  };

  const app = await NestFactory.create(AppModule, { cors: corsConfig });
  const config = app.get(ConfigService);
  app.setGlobalPrefix('/api/v1');

  await app.listen(3001, () => {
    console.log(`Application is running on port: ${config.get('port')}`);
  });
}
bootstrap();
