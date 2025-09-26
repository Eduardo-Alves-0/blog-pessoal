import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { Postagem } from '../entites/postagem.entity';
export declare class PostagemService {
    private postagemRepository;
    constructor(postagemRepository: Repository<Postagem>);
    findAll(): Promise<Postagem[]>;
    findById(id: number): Promise<Postagem>;
    findByAllTitulo(titulo: string): Promise<Postagem[]>;
    create(postagem: Postagem): Promise<Postagem>;
    update(postagem: Postagem): Promise<Postagem>;
    delete(id: number): Promise<DeleteResult>;
}
