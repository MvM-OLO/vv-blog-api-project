import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vv_sys_config')
export class SystemInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'author_name' })
  authorName: string;

  @Column({ name: 'system_name' })
  systemName: string;

  @Column({ name: 'welcome_word' })
  welcomeWord: string;
  
  @Column()
  background: string;

  @Column()
  avatar: string;
}
