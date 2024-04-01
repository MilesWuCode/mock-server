import * as fs from "fs";
import { type User, user } from "./model/user";
import { type Blog, blog } from "./model/blog";

const arrayPushs = <T>(callback: () => T, i: number = 0): T[] => {
  let arr: T[] = [];

  if (i <= 0) return arr;

  while (i) {
    arr.push(callback());

    i--;
  }

  return arr;
};

const data = {
  users: [arrayPushs<User>(user, 5)],
  blogs: [arrayPushs<Blog>(blog, 10)],
};

const json = JSON.stringify(data, null, 2);

fs.writeFileSync("db.json", json);
