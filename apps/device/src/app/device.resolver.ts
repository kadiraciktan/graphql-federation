import {
  Args,
  Query,
  Resolver,
  ResolveReference,
  Directive,
} from '@nestjs/graphql';
import { DeviceObjectType } from './device.object.type';

@Resolver((of) => DeviceObjectType)
export class DeviceResolver {
  devices: Array<string> = ['device1', 'device2', 'device3'];

  @Query((returns) => DeviceObjectType)
  getDevices() {
    const obj = new DeviceObjectType();
    obj.id = 1;
    obj.name = 'device1';
    return obj;
  }
}
