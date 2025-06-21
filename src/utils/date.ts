/**
 * @link https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
 * @link https://www.30secondsofcode.org/js/s/day-of-year
 */
export function dayOfYear(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function formatterDate(date: string) {
  return date
    .split(/[^\d]+/)
    .slice(0, 3)
    .map((v) => v.padStart(2, '0'))
    .join('-');
}

/**
 * 将 ISO 8601 格式的日期时间字符串转换为标准格式
 * @param isoString ISO 8601 格式的日期时间字符串，例如 "2025-06-21T15:18:00.000Z"
 * @returns 格式为 "YYYY-MM-DD HH:mm:ss" 的字符串
 */
export function formatISODate(isoString: string): string {
  // 解析 ISO 8601 字符串，确保使用 UTC 时间
  const date = new Date(isoString);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
