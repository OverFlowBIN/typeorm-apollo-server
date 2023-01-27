import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Product {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  category: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  price: number;

  @Field(() => String)
  quantity: number;

  @Field(() => String, { nullable: true })
  origin: string;
}