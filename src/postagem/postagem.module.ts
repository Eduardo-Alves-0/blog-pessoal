import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaService } from '../tema/service/tema.service';
import { TemaModule } from '../tema/tema.mdule';
import { PostagemController } from './controllers/postagem.controller';
import { Postagem } from './entities/postagem.entity';
import { PostagemService } from './service/postagem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  providers: [PostagemService, TemaService],
  controllers: [PostagemController],
  exports: [TypeOrmModule],
})
export class PostagemModule {}
