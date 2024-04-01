import { faker } from "@faker-js/faker";

export interface Blog {
  title: string;
  content: string;
}

export const blog = (): Blog => {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3)
  };
};
