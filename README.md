# node-jokes

A free and open source library for one-liner random developer friendly jokes in node

⚠️ **DEPRECATED**

This project is no longer maintained and has been archived. Please use the actively maintained replacement. Thank you for your support!

## Installation

Install node-jokes with npm

```bash
npm install node-jokes

```

## Usage/Examples

#### Get random joke

```javascript
import NodeJoke from "node-jokes";

const joke = NodeJoke.getJoke();
console.log(joke);
```

#### Get multiple jokes

```javascript
import NodeJoke from "node-jokes";

const jokes = NodeJoke.getJokes();
console.log(jokes);
```

## Parameter Reference

#### Get random joke

```javascript
const joke = NodeJoke.getJokes("en", "general");
```

| Parameter  | Type     | Description         |
| :--------- | :------- | :------------------ |
| `lang`     | `string` | Language preference |
| `category` | `string` | category preference |

#### Get multiple jokes

```javascript
const jokes = NodeJoke.getJokes(10, "en", "general");
```

| Parameter  | Type     | Description                              |
| :--------- | :------- | :--------------------------------------- |
| `limit`    | `number` | Numbers of jokes required, default is 10 |
| `lang`     | `string` | Language preference                      |
| `category` | `string` | category preference                      |

## Parameters supports

#### lang

| Parameter | Description |
| :-------- | :---------- |
| `en`      | English     |
| `esp`     | Spanish     |
| `hi`      | Hindi       |
| `fr`      | French      |
| `jp`      | Japanese    |

#### category

| Parameter     | Description                           |
| :------------ | :------------------------------------ |
| `general`     | jokes related to general category     |
| `pun`         | jokes related to pun category         |
| `life`        | jokes related to life category        |
| `programming` | jokes related to programming category |
| `humor`       | jokes related to humor category       |
| `knock-knock` | jokes related to knock-knock category |

## Run Locally

Clone the project

```bash
git clone https://github.com/sandeep-shome/node-jokes.git
```

Go to the project directory

```bash
cd my-project
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run start
```

## Appendix

Node-Joke is a completely free and open-source joke-as-a-service project designed for entertainment. It stores all jokes internally within the package, which can lead to limitations in the randomness of generated jokes. After delivering a few random jokes, there's a possibility of repetition.

As a solo developer, I may not be able to add as many jokes as desired. This project is currently in beta, and I aim to expand the joke library in the future. Enjoy the jokes available now!

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Authors

- [@Sandeep](https://www.github.com/sandeep-shome)

## License

[MIT](https://choosealicense.com/licenses/mit/)
