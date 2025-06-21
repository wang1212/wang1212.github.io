import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

type StatsDisplayMode = 'tagCloud' | 'tagList' | 'activityCalendar';
type TagItem = [string, number];

export interface CalendarData {
  date: string;
  count: number;
}

interface StatsViewsProps {
  // 标签相关
  tagList: TagItem[];
  currentTag: string | null;
  onTagClick: (tag: string) => void;

  // 日历相关
  calendarData: CalendarData[];
  calendarYear: number;
  availableYears: number[];
  onYearChange: (year: number) => void;

  // 视图控制
  initialMode?: StatsDisplayMode;
}

// 标签云视图
function TagCloudView({
  tagList,
  onTagClick,
}: {
  tagList: TagItem[];
  onTagClick: (tag: string) => void;
}) {
  useEffect(() => {
    // 客户端代码中引入第三方库
    const WordCloud = require('wordcloud');
    const wordcloudElement = document.getElementById('wordcloud');

    if (!wordcloudElement) return;

    const options = {
      list: tagList.filter((tagItem) => tagItem[1] > 1),
      classes: styles['word'],
      backgroundColor: 'transparent',
      shape: 'square',
      weightFactor: 2,
      rotateRatio: 0.5,
      rotationSteps: 2,
      fontFamily: 'Impact',
      color: 'random-light',
      gridSize: Math.round(
        (24 * wordcloudElement.getBoundingClientRect().width) / 1024
      ),
      shrinkToFit: true,
      click(item: TagItem) {
        onTagClick(item[0]);
      },
    };

    // 使用setTimeout确保元素已经渲染
    const timer = setTimeout(() => {
      WordCloud(wordcloudElement, options);
    }, 0);

    return () => {
      clearTimeout(timer);
      WordCloud.stop();
    };
  }, [tagList, onTagClick]);

  return (
    <section>
      <div id="wordcloud" style={{ width: '100%', height: '400px' }}></div>
    </section>
  );
}

// 标签列表视图
function TagListView({
  tagList,
  currentTag,
  onTagClick,
}: {
  tagList: TagItem[];
  currentTag: string | null;
  onTagClick: (tag: string) => void;
}) {
  return (
    <section>
      <ul className={styles['tag-list']}>
        {tagList
          .slice()
          .sort((a, b) => b[1] - a[1])
          .map((tagItem) => (
            <li
              key={tagItem[0]}
              className={`button button--sm button--outline button--secondary ${
                currentTag === tagItem[0] ? 'button--active' : ''
              }`}
              onClick={() => onTagClick(tagItem[0])}
            >
              {tagItem[0]} {tagItem[1] > 1 && tagItem[1]}
            </li>
          ))}
      </ul>
    </section>
  );
}

// 活动日历视图
function ActivityCalendarView({
  calendarData,
  calendarYear,
}: {
  calendarData: CalendarData[];
  calendarYear: number;
}) {
  const MONTH_LABELS = Array.from(Array(12), (_, index) => `${index + 1}月`);
  const WEEKDAY_LABELS = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <section className="margin-vert--lg">
      <div>
        <CalendarHeatmap
          startDate={new Date(`${calendarYear - 1}-12-31`)}
          endDate={new Date(`${calendarYear}-12-31`)}
          monthLabels={MONTH_LABELS}
          weekdayLabels={WEEKDAY_LABELS}
          classForValue={(dateCountData: { count?: number } | null) => {
            if (!dateCountData) {
              return 'color-empty';
            }
            if (dateCountData?.count && dateCountData.count <= 4) {
              return `color-github-${dateCountData.count}`;
            }
            return 'color-github-4';
          }}
          values={calendarData}
        />
      </div>
    </section>
  );
}

export default function StatsViews({
  tagList,
  currentTag,
  onTagClick,
  calendarData,
  calendarYear,
  availableYears,
  onYearChange,
  initialMode = 'activityCalendar',
}: StatsViewsProps) {
  const [displayMode, setDisplayMode] = useState<StatsDisplayMode>(initialMode);

  return (
    <>
      <div
        className="margin-bottom--md"
        style={{ display: 'flex', gap: '8px' }}
      >
        <div className="dropdown dropdown--hoverable">
          <button className="button button--primary">
            {displayMode === 'tagCloud'
              ? '标签云'
              : displayMode === 'tagList'
              ? '标签列表'
              : '活动日历'}
          </button>
          <ul className="dropdown__menu">
            <li>
              <a
                className={`dropdown__link ${
                  displayMode === 'activityCalendar'
                    ? 'dropdown__link--active'
                    : ''
                }`}
                onClick={() => setDisplayMode('activityCalendar')}
              >
                活动日历
              </a>
            </li>
            <li>
              <a
                className={`dropdown__link ${
                  displayMode === 'tagCloud' ? 'dropdown__link--active' : ''
                }`}
                onClick={() => setDisplayMode('tagCloud')}
              >
                标签云
              </a>
            </li>
            <li>
              <a
                className={`dropdown__link ${
                  displayMode === 'tagList' ? 'dropdown__link--active' : ''
                }`}
                onClick={() => setDisplayMode('tagList')}
              >
                标签列表
              </a>
            </li>
          </ul>
        </div>
        {displayMode === 'activityCalendar' && (
          <div className="dropdown dropdown--hoverable">
            <button className="button button--outline button--secondary">
              {calendarYear}年
            </button>
            <ul className="dropdown__menu">
              {availableYears.map((year) => (
                <li key={year}>
                  <a
                    className={`dropdown__link ${
                      calendarYear === year ? 'dropdown__link--active' : ''
                    }`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onYearChange(year);
                    }}
                  >
                    {year}年
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {displayMode === 'tagCloud' && (
          <TagCloudView tagList={tagList} onTagClick={onTagClick} />
        )}
        {displayMode === 'tagList' && (
          <TagListView
            tagList={tagList}
            currentTag={currentTag}
            onTagClick={onTagClick}
          />
        )}
        {displayMode === 'activityCalendar' && (
          <ActivityCalendarView
            calendarData={calendarData}
            calendarYear={calendarYear}
          />
        )}
      </div>
    </>
  );
}
