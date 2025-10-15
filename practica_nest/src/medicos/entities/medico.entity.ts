import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Receta } from '../../recetas/entities/receta.entity';

@Entity('medicos')
export class Medico {
    @PrimaryGeneratedColumn()
    id_medico: number;

    @Column()
    numero_licencia: string;

    @Column()
    institucion: string;

    @Column()
    ubicacion_consultorio: string;

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => Receta, receta => receta.medico)
    recetas: Receta[];
}
