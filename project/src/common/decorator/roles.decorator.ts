import { ReflectMetadata } from '../../../node_modules/@nestjs/common';

export const Roles = (...roles: string[]) => ReflectMetadata('roles', roles);