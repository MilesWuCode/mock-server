import * as fs from "fs";
import { faker } from "@faker-js/faker";

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: faker.person.fullName(),
  age: faker.number.int({ min: 10, max: 60 }),
  email: faker.internet.email(),
};

const data = {
  users: [user],
  posts: [],
};

const json = JSON.stringify(data, null, 2);

fs.writeFileSync("db.json", json);
