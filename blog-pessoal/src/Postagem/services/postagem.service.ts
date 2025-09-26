import { TemaService } from './../../Tema/Services/Tema.service';
/**
 * Arquivo: postagem.service.ts
 * Pasta: services
 *
 * Função do arquivo:
 * Este arquivo contém a classe `PostagemService`, que é responsável por toda a
 * regra de negócio relacionada à entidade **Postagem**.
 * Ele atua como uma camada intermediária entre o **Controller** (que recebe as requisições)
 * e o **Repository** (que acessa o banco de dados via TypeORM).
 *
 * Sobre a pasta services:
 * A pasta `services/` armazena as classes de serviço do NestJS, responsáveis
 * por regras de negócio, validações e manipulação dos dados.
 *
 * Principais elementos do código:
 * - @Injectable() → Torna a classe injetável em outras partes da aplicação.
 * - @InjectRepository(Postagem) → Injeta o repositório do TypeORM, permitindo
 *   acessar a tabela `Postagem` diretamente.
 * - postagemRepository: Repository<Postagem> → Objeto que executa operações no banco.
 *
 * Métodos do serviço:
 * - findAll() → Retorna todas as postagens do banco.
 * - findById(id) → Busca uma postagem pelo seu ID.
 *    - Se não encontrar, lança um erro 404 (HttpException).
 * - findByAllTitulo(titulo) → Busca postagens cujo título contenha o termo informado
 *   (usando ILike para busca case-insensitive).
 * - create(postagem) → Cria e salva uma nova postagem no banco.
 * - update(postagem) → Atualiza uma postagem existente.
 *    - Antes, valida se a postagem existe chamando findById().
 * - delete(id) → Remove uma postagem do banco.
 *    - Antes, valida se a postagem existe chamando findById().
 *
 * Resumindo:
 * O `PostagemService` centraliza toda a lógica de CRUD da entidade `Postagem`.
 * Ele garante que os Controllers só precisem chamar métodos do serviço, sem se preocupar
 * com detalhes de banco de dados.
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { Postagem } from '../entites/postagem.entity';
import { TemaService } from './../../Tema/Services/Tema.service';

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>,
        private TemaService: TemaService

    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            relations:{
                tema: true
            }
        });
    }

    async findById(id: number): Promise<Postagem> {

        let postagem = await this.postagemRepository.findOne({
            where: {
                id
            },
            relations:{
                tema: true
            }
        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        return postagem;
    }

    async findAllByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
                tema: true
            }
        })
    }

    async create(postagem: Postagem): Promise<Postagem> {
      await this.TemaService.findById(postagem.tema.id)

        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem> {
        
        await this.findById(postagem.id);
        
        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult> {
        
        await this.findById(id);

        return await this.postagemRepository.delete(id);

    }

}