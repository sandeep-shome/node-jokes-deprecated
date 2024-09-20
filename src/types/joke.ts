export interface Joke {
  joke: string;
  language: string;
  category: string;
}

export type Lang = "en" | "esp" | "fr" | "hi" | "jp";
export type Category =
  | ""
  | "programming"
  | "life"
  | "general"
  | "humor"
  | "pun"
  | "knock-knock";
