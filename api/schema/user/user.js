import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const userDB = {};

class User {
  constructor(id, { username }) {
    this.id = id;
    this.username = username;
  }

  static getUsers() {
    return Object.keys(userDB).map(userId => new User(userId, userDB[userId]));
  }

  static getUser({ id }) {
    if(!userDB[id]) {
      throw new Error(`User with id ${id} not found!`);
    }
    return new User(id, userDB[id]);
  }

  static createUser({ input }) {
    const id = crypto.randomBytes(10).toString('hex');
    userDB[id] = input;
    return new User(id, input);
  }

  static updateUser({ id, input }) {
    const user = userDB[id];
    Object.assign(user, input);
    return new User(id, user);
  }
}

const types = fs.readFileSync(path.resolve(__dirname, 'user.graphqls'), 'utf8');
const resolvers = {
  users: User.getUsers,
  user: User.getUser,
  createUser: User.createUser,
  updateUser: User.updateUser
};

export default { types, resolvers };
