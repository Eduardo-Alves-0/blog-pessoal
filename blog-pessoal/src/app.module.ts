/**
 * Arquivo: app.module.ts
 *
 * Este é o módulo raiz (principal) da aplicação NestJS.
 *
 * Função principal:
 * - O `AppModule` é o ponto central da configuração da aplicação.
 * - É nele que integramos recursos globais, como a conexão com o banco de dados
 *   e os módulos de funcionalidade (ex: PostagemModule).
 *
 * O que o código faz:
 * - Importa o `TypeOrmModule.forRoot()`, que cria a conexão inicial com o banco MySQL.
 *
 * Configurações do banco:
 *  - type: 'mysql' → Define o tipo de banco utilizado.
 *  - host: 'localhost' → Endereço do servidor de banco de dados.
 *  - port: 3306 → Porta padrão do MySQL.
 *  - username: 'root' → Usuário de acesso ao banco.
 *  - password: '1234' → Senha do usuário do banco.
 *  - database: 'db_blogpessoal' → Nome do banco de dados a ser usado.
 *  - entities: [Postagem] → Lista de entidades (tabelas) que o TypeORM deve mapear.
 *  - synchronize: true → Gera automaticamente as tabelas no banco de acordo com as entidades (apenas recomendado em ambiente de desenvolvimento).
 *  - logging: true → Exibe no console as queries SQL executadas pelo TypeORM.
 *
 * controllers: []
 * - Por enquanto não há controladores globais definidos no módulo raiz.
 *
 * providers: []
 * - Também não há serviços globais registrados diretamente aqui.
 *
 * Resumindo:
 * O `app.module.ts` é o coração da aplicação. Ele conecta o projeto ao banco de dados
 * e serve como ponto inicial para carregar os demais módulos (como o módulo de Postagem).
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entites/postagem.entity';
import { PostagemModule } from './Postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TypeOrmModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
