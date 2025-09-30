import { Tema } from '../../tema/entities/tema.entity';
import { TemaService } from '../../tema/service/tema.service';
export declare class TemaController {
    private readonly temaService;
    constructor(temaService: TemaService);
    findAll(): Promise<Tema[]>;
    findById(id: number): Promise<Tema>;
    findAllBydescricao(descricao: string): Promise<Tema[]>;
    create(tema: Tema): Promise<Tema>;
    update(tema: Tema): Promise<Tema>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
