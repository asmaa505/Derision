import WORDS from './VOCAB.json';

export function getWordByIndex(words, index) {
  const keys = Object.keys(words);
  const word = keys[index];
  return {
    word: word,
    definition: words[word]
  };
}

export const PLAN = {};
for (let d = 1; d <= 365; d++) {
  PLAN[d] = [(d - 1) % 414];
}

export function calcLevel(day) {
  return day / 10;
}

export function calculateAccuracy(attempts, day) {
  if (!attempts) return 1.0;
  // Each completed day requires completing the listToLearn, which is 4 words (1 word * 4 times).
  const totalCorrect = (day - 1) * 4;
  if (totalCorrect >= attempts) return 1.0;
  return totalCorrect / attempts;
}

export function calculateNewWords(day) {
  return day;
}

export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function isEncountered(day, word) {
  for (let d = 1; d < day; d++) {
    if (PLAN[d]) {
      const wordsForDay = PLAN[d].map(idx => getWordByIndex(WORDS, idx).word);
      if (wordsForDay.includes(word)) {
        return true;
      }
    }
  }
  return false;
}

export function countdownIn24Hours(timestamp) {
  const twentyFourHours = 24 * 60 * 60 * 1000;
  const timePassed = Date.now() - timestamp;
  return twentyFourHours - timePassed;
}

export function convertMilliseconds(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  return {
    hours,
    minutes,
    seconds
  };
}