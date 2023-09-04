import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [{ name: 'device', url: 'http://localhost:3001/graphql' }],
        }),
      },
      server: {
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        installSubscriptionHandlers: true,
      },
    }),
  ],
  providers: [UsersService, UsersResolver],
})
export class AppModule {}
