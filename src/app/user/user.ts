export class User {
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public email: string,
    public nick: string,
    public password: string,
    public birthDate: string,
    public desription: string
  ) {}
}
