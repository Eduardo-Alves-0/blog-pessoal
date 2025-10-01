import { DeleteResult, Repository } from 'typeorm';
import { TemaService } from '../../tema/service/tema.service';
import { Postagem } from '../entities/postagem.entity';
export declare class PostagemService {
    private postagemRepository;
    private temaService;
    constructor(postagemRepository: Repository<Postagem>, temaService: TemaService);
    findAll(): Promise<Postagem[]>;
    findById(id: number): Promise<Postagem>;
    findAllByTitulo(titulo: string): Promise<Postagem[]>;
    create(postagem: Postagem): Promise<Postagem>;
    update(postagem: Postagem): Promise<Postagem>;
    delete(id: number): Promise<DeleteResult>;
}
