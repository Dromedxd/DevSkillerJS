export default class WordSearch {
  constructor(letterGrid) {
    this.letterGrid = letterGrid;
    this.directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
  }

  find(words) {
    const result = {};
    for (const word of words) {
      const found = this.lookForWord(word);
      result[word] = found;
    }

    return result;
  }

  lookForWord(word) {
    for (let i = 0; i < this.letterGrid.length; i++) {
      for (let j = 0; j < this.letterGrid[i].length; j++) {
        const currentLetter = this.letterGrid[i][j];
        if (currentLetter === word[0]) {
          for (const direction of this.directions) {
            const found = this.wordDir(word, i, j, direction[0], direction[1]);
            if (found) {
              return {
                start: [i + 1, j + 1],
                end: [i + 1 + direction[0] * (word.length - 1), j + 1 + direction[1] * (word.length - 1)],
              };
            }
          }
        }
      }
    }

    return undefined;
  }

  wordDir(word, row, column, directionRow, directionColumn) {
    if (row + directionRow * (word.length - 1) >= 0 &&
        row + directionRow * (word.length - 1) < this.letterGrid.length &&
        column + directionColumn * (word.length - 1) >= 0 &&
        column + directionColumn * (word.length - 1) < this.letterGrid[0].length) {

      for (let i = 1; i < word.length; i++) {
        const nxtLetter = this.letterGrid[row + directionRow * i][column + directionColumn * i];
        if (nxtLetter !== word[i]) {
          return false;
        }
      }

      return true;
    }

    return false;
  }
}
