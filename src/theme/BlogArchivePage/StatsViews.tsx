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
  onTagClick: (tag: string | null) => void;

  // 日历相关
  calendarData: CalendarData[];
  calendarYear: number;
  availableYears: number[];
  onYearChange: (year: number) => void;
  currentDate: string | null;
  onDateClick: (date: string | null) => void;

  // 搜索相关
  searchQuery: string;
  onSearchChange: (query: string) => void;

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

// 计算一年中的第几天
function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// 活动日历视图
function ActivityCalendarView({
  calendarData,
  calendarYear,
  currentDate,
  onDateClick,
}: {
  calendarData: CalendarData[];
  calendarYear: number;
  currentDate: string | null;
  onDateClick: (date: string | null) => void;
}) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    content: string;
  }>({ visible: false, x: 0, y: 0, content: '' });

  const MONTH_LABELS = Array.from(Array(12), (_, index) => `${index + 1}月`);
  const WEEKDAY_LABELS = ['日', '一', '二', '三', '四', '五', '六'];

  // 创建日期到活动数的映射，方便快速查找
  const dateToCount = new Map<string, number>();
  calendarData.forEach(({ date, count }) => {
    dateToCount.set(date, count);
  });

  // 处理鼠标移入单元格
  const handleMouseOver = (event: React.MouseEvent, value: any) => {
    if (!value) return;

    // 阻止浏览器显示默认的 title 提示
    event.preventDefault();
    event.stopPropagation();

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    // 计算提示框位置：在目标元素正上方居中
    const x = rect.left + rect.width / 2;
    const y = rect.top - 10; // 10px 的间距

    const targetDate = new Date(value.date);
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    const weekday = ['日', '一', '二', '三', '四', '五', '六'][
      targetDate.getDay()
    ];
    const dayOfYear = getDayOfYear(targetDate);
    const count = value.count || 0;

    setTooltip({
      visible: true,
      x,
      y,
      content: `${year}-${month}-${day} 周${weekday}\n今年第${dayOfYear}天\n有${count}条活动记录`,
    });
  };

  // 处理鼠标移出日历
  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  // 自定义单元格样式
  const classForValue = (
    dateCountData: { date?: string; count?: number } | null
  ) => {
    if (!dateCountData || !dateCountData.date) {
      return 'color-empty';
    }

    let className = '';

    // 根据活动数量设置颜色
    if (dateCountData.count && dateCountData.count <= 4) {
      className = `color-github-${dateCountData.count}`;
    } else {
      className = dateCountData.count ? 'color-github-4' : 'color-empty';
    }

    // 如果是选中的日期，添加 selected 类
    if (currentDate && dateCountData.date === currentDate) {
      className += ' color-github-selected';
    }

    return className;
  };

  // 处理日期点击
  const handleDateClick = (value: { date: string; count?: number } | null) => {
    if (!value || !value.date) return;

    // 如果点击的是已选中的日期，则取消选择
    const newDate = currentDate === value.date ? null : value.date;
    onDateClick(newDate);
  };

  // 返回空字符串，阻止默认的 title 提示
  const titleForValue = () => '';

  return (
    <section className="margin-vert--lg">
      <div onClick={handleMouseLeave}>
        <CalendarHeatmap
          startDate={new Date(`${calendarYear - 1}-12-31`)}
          endDate={new Date(`${calendarYear}-12-31`)}
          monthLabels={MONTH_LABELS}
          weekdayLabels={WEEKDAY_LABELS}
          classForValue={classForValue}
          values={calendarData}
          titleForValue={titleForValue}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={handleDateClick}
        />
      </div>
      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            background: 'rgba(0, 0, 0, 0.85)',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '13px',
            zIndex: 1000,
            pointerEvents: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            transform: 'translateX(-50%) translateY(-100%)', // 向上偏移 100%
            whiteSpace: 'pre',
            maxWidth: '180px',
            textAlign: 'left',
            lineHeight: '1.5',
            padding: '8px 12px',
          }}
        >
          {tooltip.content.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          <div
            style={{
              position: 'absolute',
              bottom: '-4px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderTop: '4px solid rgba(0, 0, 0, 0.85)',
            }}
          />
        </div>
      )}
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
  currentDate,
  onDateClick,
  searchQuery,
  onSearchChange,
  initialMode = 'activityCalendar',
}: StatsViewsProps) {
  const [displayMode, setDisplayMode] = useState<StatsDisplayMode>(initialMode);

  return (
    <>
      <div
        className="margin-bottom--md"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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

        {/* 搜索框 */}
        <div className="navbar__search" style={{ minWidth: '200px' }}>
          <input
            type="search"
            className="navbar__search-input"
            placeholder="输入关键字搜索..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              padding: '0.5rem 1rem 0.5rem 2.5rem',
              borderRadius: '20px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              width: '100%',
              outline: 'none',
              fontSize: '0.9rem',
              boxSizing: 'border-box',
              backgroundPosition: '1rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1rem',
            }}
          />
        </div>
      </div>

      <div style={{ clear: 'both' }}>
        {displayMode === 'tagCloud' && (
          <TagCloudView
            tagList={tagList}
            onTagClick={(tag) => {
              onTagClick(tag);
              onDateClick(null); // 清除日期选择
            }}
          />
        )}
        {displayMode === 'tagList' && (
          <TagListView
            tagList={tagList}
            currentTag={currentTag}
            onTagClick={(tag) => {
              onTagClick(tag);
              onDateClick(null); // 清除日期选择
            }}
          />
        )}
        {displayMode === 'activityCalendar' && (
          <ActivityCalendarView
            calendarData={calendarData}
            calendarYear={calendarYear}
            currentDate={currentDate}
            onDateClick={(date) => {
              // 直接调用 onDateClick，内部会处理标签清除逻辑
              onDateClick(date);
            }}
          />
        )}
      </div>
    </>
  );
}
