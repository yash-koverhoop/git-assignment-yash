class User {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  sayHello() {
    console.log("Hello from", this.firstName, this.lastName);
  }
}
