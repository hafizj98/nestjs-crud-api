import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  @IsOptional()
  @IsString()
  @Column()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Column('decimal')
  price: number;
}
