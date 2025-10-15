import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Receta } from '../../recetas/entities/receta.entity';

@Entity('pacientes')
export class Paciente {
    @PrimaryGeneratedColumn()
    id_paciente: number;

    @Column()
    nombre: string;

    @Column({ type: 'date' })
    fecha_nacimiento: Date;

    @Column()
    cedula: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => Receta, receta => receta.paciente)
    recetas: Receta[];
}
