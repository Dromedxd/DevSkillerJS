import WordSearch from '../src/WordSearch.js';

describe('Letter Grid Readme Examples', () => {
  it('should find occurrences horizontally: left to right', () => {
    const letterGrid = [
      'word',
      '____',
      '____',
      '____',
    ];
    const result = {
      word: {
        start: [1, 1],
        end: [1, 4],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences horizontally: right to left', () => {
    const letterGrid = [
      'drow',
      '____',
      '____',
      '____',
    ];
    const result = {
      word: {
        start: [1, 4],
        end: [1, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences vertically: top-down', () => {
    const letterGrid = [
      'w___',
      'o___',
      'r___',
      'd___',
    ];
    const result = {
      word: {
        start: [1, 1],
        end: [4, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find occurrences vertically: bottom-up', () => {
    const letterGrid = [
      'd___',
      'r___',
      'o___',
      'w___',
    ];
    const result = {
      word: {
        start: [4, 1],
        end: [1, 1],
      },
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['word'])).toEqual(result);
  });

  it('should find multiple occurrences', () => {
    const letterGrid = [
      "______",
      "_c____",
      "_s____",
      "_h____",
      "basic_",
      "_r____",
      "_p____",
    ]

    const result = {
      "basic": { // horizontal
        "start": [ 5, 1 ],
        "end": [ 5, 5 ]
      },
      "csharp": { // vertical
        "start": [ 2, 2 ],
        "end": [ 7, 2 ]
      },
      "haskell": undefined // not found
    };
    const wordSearch = new WordSearch(letterGrid);

    expect(wordSearch.find(['basic', 'csharp', 'haskell'])).toEqual(result);
  });
});
