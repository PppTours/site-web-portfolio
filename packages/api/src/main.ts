import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { EnvVariable } from './env/enums/env-variable.enum';
import { EnvironmentVariableService } from './env/services/environment-variable.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const environmentVariable = app.get(EnvironmentVariableService);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.enableCors();
  await app.listen(environmentVariable.get(EnvVariable.Port));
}
bootstrap();
