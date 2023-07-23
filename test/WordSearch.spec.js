import WordSearch from '../src/WordSearch.js';

describe('WordSearch', () => {
  it('should return undefined if no occurrences are found', () => {
    const wordSearch = new WordSearch([
      'abcdefghij',
      'saggsasagg',
      'qwopjrpqis',
      'mfaslkfmsa',
      'msflksmafl',
      'oqjrwqiwra',
      'ijqwrjifmm',
      'mafslkfasm',
      'koqwopwqrk',
      'kvuvyfbjch',
    ]); // no "java" occurrence in above grid

    expect(wordSearch.find(['java'])).toEqual({
      java: undefined
    });
  });

  it('should find occurrences horizontally: left to right', () => {
    const wordSearch = new WordSearch([
      'abcdefghij',
      'saggsasagg',
      'qwopjrpqis',
      'mfaslkfmsa',
      'msflksmafl',
      'oqjrwqiwra',
      'ijqwrjifmm',
      'mafslkfasm',
      'koqwopwqrk',
      'kvjavabjch', // java
    ]);

    expect(wordSearch.find(['java'])).toEqual({
      java: {
        start: [10, 3],
        end: [10, 6],
      },
    });
  });

  it('should find occurrences horizontally: right to left', () => {
    const wordSearch = new WordSearch([
      'abcdefghij',
      'saggsasagg',
      'qwopjrpqis',
      'mfaslkfmsa',
      'msflksmafl',
      'oqjrwqiwra',
      'ijqwrjifmm',
      'mafslkfasm',
      'koqwopwqrk',
      'kvavajbjch', // avaj
    ]);

    expect(wordSearch.find(['java'])).toEqual({
      java: {
        start: [10, 6],
        end: [10, 3],
      },
    });
  });

  it('should find occurrences vertically: top-down', () => {
    const wordSearch = new WordSearch([
      'abcdefghij', // j
      'saggsasaga', // a
      'qwopjrpqiv', // v
      'mfaslkfmsa', // a
      'msflksmafl',
      'oqjrwqiwra',
      'ijqwrjifmm',
      'mafslkfasm',
      'koqwopwqrk',
      'kvuvyfbjch',
    ]);

    expect(wordSearch.find(['java'])).toEqual({
      java: {
        start: [1, 10],
        end: [4, 10],
      },
    });
  });

  it('should find occurrences vertically: bottom-up', () => {
    const wordSearch = new WordSearch([
      'abcdefghij',
      'saggsasagg',
      'qwopjrpqis',
      'mfaslkfmsa',
      'msflksmafl',
      'oqjrwqiwra',
      'ajqwrjifmm', // a
      'vafslkfasm', // v
      'aoqwopwqrk', // a
      'jvuvyfbjch', // j
    ]);

    expect(wordSearch.find(['java'])).toEqual({
      java: {
        start: [10, 1],
        end: [7, 1],
      },
    });
  });

  it('should find multiple occurrences', () => {
    const wordSearch = new WordSearch([
      'abcdefghij',
      'saggsasagg',
      'qwopjrpqis', // p
      'mfaylkfmsa', // y
      'msftksmafl', // t
      'oqjhwqiwra', // h
      'ijqorjifmm', // o
      'mafnlkfasm', // n
      'koqwopwqrk',
      'kvjavabjch', // java
    ]);

    expect(wordSearch.find(['java', 'python'])).toEqual({
      java: {
        start: [10, 3],
        end: [10, 6],
      },
      python: {
        start: [3, 4],
        end: [8, 4],
      },
    });
  });
});  
