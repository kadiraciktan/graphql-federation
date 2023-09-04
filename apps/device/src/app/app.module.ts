import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { join } from 'path';
import { DeviceResolver } from './device.resolver';
import { DeviceObjectType } from './device.object.type';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TestSubscriptionResolver } from './test.subscription.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'apps/device/src/graphql/schema.graphql'),
      },
      plugins: [ApolloServerPluginInlineTrace()],
      installSubscriptionHandlers: true,
      subscriptions: {
        "subscriptions-transport-ws": true,
      },
    }),
  ],
  controllers: [],
  providers: [DeviceResolver, TestSubscriptionResolver],
})
export class AppModule {}
