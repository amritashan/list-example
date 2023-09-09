import { Statuses } from './types';

export function getRandomStatus() {
  const statuses = Object.entries(Statuses);
  const min = 0;
  const max = statuses.length;

  return statuses[getRandomNumberBetween(min, max)][1];
}

export function getRandomNumberBetween(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
}
