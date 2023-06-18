/**
 * @link https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
 * @link https://www.30secondsofcode.org/js/s/day-of-year
 */
export function dayOfYear(date: Date) {
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
}
