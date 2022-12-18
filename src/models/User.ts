export class User {
  name: string;
  email: string;
  hour_value: number;
  hour_amount_per_day: number;

  constructor(
    name: string = "",
    email: string = "",
    hour_value: number = 0,
    hour_amount_per_day: number = 0
  ) {
    this.name = name;
    this.email = email;
    this.hour_value = hour_value;
    this.hour_amount_per_day = hour_amount_per_day;
  }
}
