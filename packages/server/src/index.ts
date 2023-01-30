import 'reflect-metadata'; // typeorm과 typegraphql을 사용하기 위해
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { buildSchema } from 'type-graphql';
import * as resolver from  './resolvers'
import PostgresDataSource from './data-source';


const createSchema = () =>
  buildSchema({
    resolvers: [
      resolver.UserResolver, 
      resolver.ProductResolver
    ], // resolver들을 여기에 등록? => 안했을때 서버에 표시안됨!
  });

const startApolloServer = async () => {
  await PostgresDataSource.initialize(); // DataSource 초기화
  
  const schema = await createSchema();
  
  const app = express();
  const httpServer = http.createServer(app);
  
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  
  await server.start();
  server.applyMiddleware({ app });
  
  httpServer.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};

startApolloServer();