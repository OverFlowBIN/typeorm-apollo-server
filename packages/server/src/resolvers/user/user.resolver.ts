import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../entities';

// const dummyData = [
//   { id: '1', email: 'test1@gmail.com', name: 'tester1', address: null},
//   { id: '2', email: 'test2@gmail.com', name: 'tester2', address: null},
//   { id: '3', email: 'test3@gmail.com', name: 'tester3', address: null},
//   { id: '4', email: 'test4@gmail.com', name: 'tester4', address: null},
// ];


// typeORM은 JPA와 비슷하게 사용 가능하다.

@Resolver()
export default class UserResolver {
  @Query((returns) => User)
  async user(@Arg('id') id: string) {
    return await User.findOneBy({ id });
  }

  @Query((resutns) => [User]) // User, [User]와 무슨차이? 그냥 배열화?
  async users() {
    return await User.find();
  }

  @Mutation((returns) => User)
  async createUser(
    @Arg('email') email: string,
    @Arg('name') name: string,
    @Arg('address') address: string,
  ) {
    const createUser = await User.create({
      email, 
      name,
      address
    });
    await createUser.save(); // COMMIT 역할
    return createUser;
  }
}