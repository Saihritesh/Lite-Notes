import { Client, Account } from "appwrite";

const client = new Client()

  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("696cd70c0003355b92b0");

export const account = new Account(client);
