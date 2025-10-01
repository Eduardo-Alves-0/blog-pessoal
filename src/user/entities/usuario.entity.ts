import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_usuarioq' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  usuario: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @IsNotEmpty()
  @Column({ length: 5000 })
  foto: string;

  @OneToMany(() => Postagem, (postagem) => postagem.usuario)
  postagem: Postagem[];
}
