import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Money {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prefix: string;

  @Column()
  prefixChange: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  salePrice: number;

  @Column()
  createdBy: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedBy: number;

  @Column()
  updatedAt: Date;
}
