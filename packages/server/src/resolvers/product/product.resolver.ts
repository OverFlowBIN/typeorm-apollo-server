import { Arg, Mutation, ID, Query, Resolver } from 'type-graphql';
import { Product } from '../../entities';

const dummyData = [
  { id: '1', category: 'clothes', name: 'clothes_1', price: 1000, quantity: 10, origin: null},
  { id: '2', category: 'clothes', name: 'clothes_2', price: 1000, quantity: 10, origin: null},
  { id: '3', category: 'clothes', name: 'clothes_3', price: 1000, quantity: 10, origin: null},
  { id: '4', category: 'clothes', name: 'clothes_4', price: 1000, quantity: 10, origin: null},
  { id: '5', category: 'food', name: 'food_1', price: 2000, quantity: 10, origin: null},
  { id: '6', category: 'food', name: 'food_2', price: 2000, quantity: 10, origin: null},
  { id: '7', category: 'food', name: 'food_3', price: 2000, quantity: 10, origin: null},
  { id: '8', category: 'food', name: 'food_4', price: 2000, quantity: 10, origin: null},
  { id: '9', category: 'health', name: 'health_1', price: 3000, quantity: 10, origin: null},
  { id: '10', category: 'health', name: 'health_2', price: 3000, quantity: 10, origin: null},
  { id: '11', category: 'health', name: 'health_3', price: 3000, quantity: 10, origin: null},
];

@Resolver()
export default class ProductResolver {
  @Query((returns) => Product)
  async product(@Arg('id') id: string) {
    return dummyData.find((product) => product.id === id);
  }

  @Query((resutns) => [Product]) // [Product] vs Product => 결과값이 여러개냐 하나냐 차이
  async products() {
    return dummyData;
  }

  @Mutation((returns) => Product)
  async createProduct(
    @Arg('category') category: string,
    @Arg('name') name: string,
    @Arg('price') price: number,
    @Arg('quantity') quantity: number,
    @Arg('origin') origin: string,
  ) {
    const createProduct = {
      id: (Number(dummyData[dummyData.length - 1]['id'] + 1).toString()),
      category,
      name,
      price,
      quantity,
      origin,
    };
    dummyData.push(createProduct);
    return createProduct;
  }
}