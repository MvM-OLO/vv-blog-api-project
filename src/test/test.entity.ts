import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class Cats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}