/* eslint-disable prettier/prettier */
// usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  usuario_id: number;

  @Column()
  usuario_name: string;

  @Column()
  usuario_email: string;
}
