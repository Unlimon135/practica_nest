import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Medico } from '../../medicos/entities/medico.entity';
import { Paciente } from '../../pacientes/entities/paciente.entity';
import { Busqueda } from '../../busquedas/entities/busqueda.entity';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    email: string;

    @Column()
    contraseña: string;

    @Column()
    tipo_usuario: string;

    @Column({ type: 'date' })
    fecha_registro: Date;

    @Column()
    estado: string;

    @OneToOne(() => Medico, medico => medico.usuario)
    medico: Medico;

    @OneToOne(() => Paciente, paciente => paciente.usuario)
    paciente: Paciente;

    @OneToMany(() => Busqueda, busqueda => busqueda.usuario)
    busquedas: Busqueda[];
}