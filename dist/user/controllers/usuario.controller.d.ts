import { UsuarioService } from './../service/usuario.service';
import { Usuario } from '../entities/usuario.entity';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findAll(): Promise<Usuario[]>;
}
