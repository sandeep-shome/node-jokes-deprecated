import { jokes } from "./jokes";
import { categories } from "./categories";
import { Category, Joke, Lang } from "./types/joke";

export class NodeJoke {
  static getJoke = (
    lang: Lang = "en", // by default lang is "en"
    category: Category = "" // by default category is empty
  ): Joke | void => {
    const cate: string =
      category === ""
        ? categories[Math.ceil(Math.random() * categories.length - 1)]
        : category;
    const filtered_jokes = jokes.filter(
      (joke: Joke) => joke.language === lang && joke.category === cate
    );
    return filtered_jokes[Math.ceil(Math.random() * filtered_jokes.length - 1)];
  };

  static getJokes(
    limit: number = 10, // by default limit is 10
    lang: Lang = "en", // by default lang is "en"
    category: Category = "" // by default category is empty
  ): Joke[] | void {
    const cate: string =
      category === ""
        ? categories[Math.ceil(Math.random() * categories.length - 1)]
        : category;
    const filtered_jokes = jokes.filter(
      (joke: Joke) => joke.language === lang && joke.category === cate
    );
    return filtered_jokes.slice(0, limit);
  }
}
