import { faker } from "@faker-js/faker";

export interface User {
  name: string;
  age: number;
  email: string;
}

export const user = (): User => {
  return {
    name: faker.person.fullName(),
    age: faker.number.int({ min: 10, max: 60 }),
    email: faker.internet.email(),
  };
};
