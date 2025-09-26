import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tema } from '../../Tema/entites/tema.entity';

// Define que essa classe será uma entidade (tabela) chamada "tb_postagens"
@Entity({ name: 'tb_postagens' })
export class Postagem {
  // Chave primária gerada automaticamente (auto-incremento)
  @PrimaryGeneratedColumn()
  id: number;

  // Campo título - obrigatório, tamanho máximo 100 caracteres
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  // Campo texto - obrigatório, tamanho máximo 1000 caracteres
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  // Data de atualização automática sempre que o registro for modificado
  @UpdateDateColumn()
  data: Date;

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Tema;
}
