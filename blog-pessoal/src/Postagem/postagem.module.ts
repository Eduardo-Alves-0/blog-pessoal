/**
 * Arquivo: postagemModule.ts
 *
 * Este arquivo define o módulo **PostagemModule** no NestJS.
 *
 * Função principal:
 * - Agrupar todos os recursos relacionados à entidade **Postagem**
 *   (controllers, services e entidades do TypeORM) em um único módulo,
 *   deixando o código organizado e modular.
 *
 * Estrutura do módulo:
 * - imports: [TypeOrmModule.forFeature([Postagem])]
 *   -> Conecta o módulo ao banco de dados, permitindo operações
 *      CRUD na tabela/entidade `Postagem`.
 *
 * - providers: [PostagemService]
 *   -> Registra o service, responsável pela regra de negócio
 *      e comunicação com o banco de dados.
 *
 * - controllers: [PostagemController]
 *   -> Registra o controller, que expõe endpoints HTTP para
 *      manipulação de postagens.
 *
 * - exports: [TypeOrmModule]
 *   -> Torna o TypeOrmModule disponível para outros módulos
 *      que precisarem acessar a entidade `Postagem`.
 *
 * Sobre a pasta:
 * Esta pasta **postagem** normalmente contém:
 * - `controllers/` → Controladores responsáveis pelas rotas HTTP (ex: postagem.controller.ts).
 * - `services/` → Serviços responsáveis pelas regras de negócio (ex: postagem.service.ts).
 * - `entities/` → Entidades que representam tabelas no banco de dados (ex: postagem.entity.ts).
 * - `postagemModule.ts` → O módulo que integra todos esses elementos.
 *
 * Resumindo:
 * O módulo **PostagemModule** organiza toda a lógica da funcionalidade de Postagens
 * dentro do projeto NestJS, seguindo a arquitetura modular do framework.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './controllers/postagem.controller';
import { Postagem } from './entites/postagem.entity';
import { PostagemService } from './services/postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [TypeOrmModule],
})
export class PostagemModule {}
