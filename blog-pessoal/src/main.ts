/**
 * Este arquivo é o ponto de entrada da aplicação NestJS.
 *
 * Explicação passo a passo:
 * - Importa os módulos necessários (ValidationPipe, NestFactory e AppModule).
 * - A função bootstrap() cria a instância da aplicação a partir do AppModule.
 * - Define o fuso horário da aplicação para UTC-3 (Brasília).
 * - Configura um ValidationPipe global, que valida automaticamente os dados das requisições.
 * - Ativa o CORS, permitindo que a API seja acessada por aplicações externas (como front-end).
 * - Inicia o servidor na porta definida pela variável de ambiente PORT,
 *   ou na porta 4000 caso não esteja configurada.
 */

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
