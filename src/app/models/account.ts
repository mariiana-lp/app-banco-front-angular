import { Client } from "./client";

export class Account {
    idAccount:number;
    number:string;
    type: string;
    balance: number;
    status: boolean;
    client: Client;
}
