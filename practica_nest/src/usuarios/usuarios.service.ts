import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UsuariosService {
 constructor(
 @InjectRepository(Usuario)
 private usuarioRepository: Repository<Usuario>,
 ) {}
 async create(createUsuarioDto) {
 const usuario = this.usuarioRepository.create(createUsuarioDto);
 return await this.usuarioRepository.save(usuario);
 }
}