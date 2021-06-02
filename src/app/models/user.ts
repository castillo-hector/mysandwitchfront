export class User {
  constructor(
    public id: number,
    public password: string,
    public celphone: string,
    public identification: number,
    public name: string,
    public lastName: string
  ) {}
}

export class ResponseUser {
  constructor(
    public status: number,
    public message: string,
    public data: User[]
  ) {}
}
