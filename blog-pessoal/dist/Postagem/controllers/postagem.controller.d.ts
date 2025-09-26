import { Postagem } from '../entites/postagem.entity';
import { PostagemService } from './../services/postagem.service';
export declare class PostagemController {
    private readonly PostagemService;
    constructor(PostagemService: PostagemService);
    findAll(): Promise<Postagem[]>;
    findById(id: number): Promise<Postagem>;
    findByAllTitulo(titulo: string): Promise<Postagem[]>;
    create(postagem: Postagem): Promise<Postagem>;
    update(postagem: Postagem): Promise<Postagem>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
