import { Resolver, Subscription } from '@nestjs/graphql';

@Resolver()
export class TestSubscriptionResolver {
  @Subscription((returns) => String)
  testSubscription() {
    return 'test';
  }

  @Subscription((returns) => String, {
    name: 'testSubscriptionWithCustomName',
  })
  testSubscriptionWithCustomName() {
    return 'test';
  }
}
