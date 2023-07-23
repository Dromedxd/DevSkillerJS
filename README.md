# Word Search in JavaScript

# Introduction
You have a client that enjoys solving word search problems, but they would like to know if they can beat a computer in it. Your task is to make a program that will solve word searching for any given letter grid and word list.


# Problem Statement 

The project contains unit tests and your goal is to make sure all the tests are passing by filling in the missing code.

You are given a `WordSearch` class that has a `letterGrid` attribute which holds an array of strings that represent your letter grid, e.g.:
```
word
oocv
rbrk
dtrd
```
This class also has a `find(words)` method which should search through the grid for given `words`. This method has a missing implementation.

Each row of `letterGrid` is of the same length.

You are expected to:
1. Initialize the WordSearch object to hold the `letterGrid`.
2. Implement the `find` method that will search a given grid in all directions.
3. Make sure the Searching Directions include: **horizontal** and **vertical**.

## Directions

- Horizontal: left-to-right

```
word
____
____
____
```

- Horizontal: right-to-left

```
drow
____
____
____
```

- Vertical: top-down

```
w___
o___
r___
d___
```

- Vertical: bottom-up

```
d___
r___
o___
w___
```

## Output

The `find` method should return an object, with **keys** being words that are searched and **values** being the coordinates specifying where the words begin and end. For example, if we are looking for `basic`, `csharp` and `haskell` words (`wordSearch.find(['basic', 'csharp', 'haskell'])`), then the output should have the following structure:

```json
{
  "word": <COORDINATES>,
  "another": <COORDINATES>,
}
```

Each _coordinates_ is an object defining the **row** and the **column**, in which the word **starts** and **ends** (**index counting from 1**):

```json
{
  "start": [ROW, COLUMN],
  "end": [ROW, COLUMN],
}
```

If the word has not been found, set the value of its key to `undefined`.

## Edge Cases

- **Each word can only be found once** (there is also no place for storing multiple occurrences in a single word result). Do not worry, the test examples will not include any case that a word may be found more than once.

## Example

For the following letter grid:

```json
[
  "______",
  "_c____",
  "_s____",
  "_h____",
  "basic_",
  "_r____",
  "_p____",
]
```

and searched words: `'basic', 'csharp', 'haskell'`, the result is:

```json
{
  "basic": { // horizontal
    "start": [ 5, 1 ],
    "end": [ 5, 5 ]
  },
  "csharp": { // vertical
    "start": [ 2, 2 ],
    "end": [ 7, 2 ]
  },
  "haskell": undefined // not found
}
```

# Setup

Follow these steps if you are using a .zip/.git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies.
2. `npm test` – run all the tests once (this will be used to evaluate your solutions).
3. `npm run test:watch` - run all the tests in the _watch mode_ (optionally, you can use it locally if you prefer).

## Hint

Examples in this readme are included as testcases in the `examplesFromReadme.spec.js` file, take a look at them.

## Good Luck!
