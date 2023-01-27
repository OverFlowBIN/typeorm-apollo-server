import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// SDL 구현 => 원래는 graphql 파일을 이용하여 SDL을 생성하지만
// typegraphql을 사용하면 객체 형태로 작성할 수 있다.

// @Entity가 추가되면서 DB와의 연동을 가능케 한다 => DB Entity 생성
// @Entity를 class에 붙여주면 알아서 class 이름으로 테이블을 생성해줌. 인자로 문자열을 넣어주면 넣어준 문자열로 테이블이 생성
// @PrimaryGeneratedColumn() 을 이용하면 primary key를 자동으로 생성해줌
// @Column을 이용하여 테이블의 column 속성을 정의할 수 있음

@Entity() 
@ObjectType()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: number;

  @Column({ length: '255' })
  @Field(() => String)
  email: string;

  @Column({ length: '50' })
  @Field(() => String)
  name: string;

  @Column({ length: '50', nullable: true })
  @Field(() => String, { nullable: true })
  address: string;
}