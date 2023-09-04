import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeviceObjectType {
  @Field((type) => ID)
  id: number;
  @Field()
  name: string;
}
