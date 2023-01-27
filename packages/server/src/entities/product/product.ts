import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ length: '50' })
  @Field(() => String)
  category: string;

  @Column({ length: '50' })
  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  quantity: number;

  @Column({ length: '50', nullable: true })
  @Field(() => String, { nullable: true })
  origin: string;
}