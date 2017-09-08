import { modules as typeModule } from './types';
import { modules as userModule } from './user';

// Controllers
export { User } from './user';

export const modules = [
  ...typeModule,
  ...userModule
];
