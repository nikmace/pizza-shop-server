import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const corsConfig = {
    origin: ['http://localhost:3000', 'https://dodo-pizza.vercel.app/'],
    methods: 'GET, POST',
  };

  const app = await NestFactory.create(AppModule, { cors: corsConfig });
  app.enableCors();
  const config = app.get(ConfigService);
  app.setGlobalPrefix('/api/v1');

  console.log(`Global prefix is set for: /api/v1`);

  await app.listen(
    process.env.PORT || 5000,
    process.env.HOST || '0.0.0.0',
    () => {
      console.log(`Application is running on port: ${config.get('port')}`);
    },
  );
}
bootstrap();
