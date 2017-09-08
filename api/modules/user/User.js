// import UserModel from './model' or just define the model here

// This class MUST conform to the graphql schema!
export default class User {
  // const schema = <mongo schema or whatever>;
  // That way, you can easily access the schema from the controller class
  constructor({ accountType, email, firstname, lastname }) {
    this.accountType = accountType;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
