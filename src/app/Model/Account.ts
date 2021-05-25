export class Account{
  id: number;
  username: string;
  password: string;
  sub: string;


  constructor(id: number, username: string, password: string, sub: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.sub = sub;
  }
}

