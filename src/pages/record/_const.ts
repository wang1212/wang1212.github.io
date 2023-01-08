export const START_YEAR = 2017;
export const END_YEAR = new Date().getFullYear();
export const YEARS = Array.from(
  Array(END_YEAR - START_YEAR + 1),
  (_, index) => START_YEAR + index
);

export const MONTH_LABELS = Array.from(
  Array(12),
  (_, index) => `${index + 1}月`
);

export const WEEKDAY_LABELS_2 = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
];
export const WEEKDAY_LABELS = [
  '周日',
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
];
