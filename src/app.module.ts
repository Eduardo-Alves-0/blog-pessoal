import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.mdule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'db_blog_pessoal',
      entities: [],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
