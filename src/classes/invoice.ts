import { HasFormatter } from "../interfaces/HasFormatter";
export class Invoice implements HasFormatter {
  // client: string;
  // details: string;
  // amount: number;

  //Access modifiers
  // readonly client: string;
  // private details: string;
  // public amount: number;

  // constructor(c:string , d:string , a:number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;

  // }

  // automatically pass the props to the constructor
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  }
}
