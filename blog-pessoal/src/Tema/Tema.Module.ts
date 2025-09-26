import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaController } from './Controllers/Tema.controller';
import { Tema } from './entites/tema.entity';
import { TemaService } from './services/tema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tema]), TemaModule],
  providers: [TemaService],
  controllers: [TemaController],
  exports: [TypeOrmModule],
})
export class TemaModule {}
