import React, { useRef } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import clsx from 'clsx';
import type { ArchiveBlogPost } from '@theme/BlogArchivePage';



type SortBy = 'date' | 'update';

export interface YearProps {
  year: string;
  posts: ArchiveBlogPost[];
  sortBy: SortBy;
}

// 文章项组件
function formatDateTime(dateStr: string): string {
  const parts = dateStr.split(/[^\d]+/).slice(0, 5);
  const datePart = parts.slice(0, 3).map((v) => v.padStart(2, '0')).join('-');
  const timePart = parts.slice(3, 5).map((v) => v.padStart(2, '0')).join(':');
  return timePart ? `${datePart} ${timePart}` : datePart;
}

function PostItem({ post, sortBy }: { post: ArchiveBlogPost; sortBy: SortBy }) {
  const dateStr = (post.metadata.frontMatter[sortBy] as string) ||
    (post.metadata.frontMatter.date as string) ||
    '';
  const date = dateStr ? formatDateTime(dateStr) : '';

  return (
    <li>
      <a href={post.metadata.permalink} style={{ display: 'flex', gap: '0.8rem', alignItems: 'baseline', textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize: '0.8em',
          color: 'var(--ifm-font-color-tertiary)',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}>
          {date}
        </span>
        <span style={{
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize: '0.92em',
        }}>
          {post.metadata.title}
        </span>
      </a>
    </li>
  );
}

// 年份部分组件
function Year({
  year,
  posts,
  sortBy,
}: {
  year: string;
  posts: ArchiveBlogPost[];
  sortBy: SortBy;
}) {
  const POST_COLLAPSE_THRESHOLD = 10;
  const [isExpanded, setIsExpanded] = React.useState(
    posts.length <= POST_COLLAPSE_THRESHOLD
  );
  const [parent] = useAutoAnimate();

  // 按日期排序
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = (a.metadata.frontMatter[sortBy] as string) || '';
    const dateB = (b.metadata.frontMatter[sortBy] as string) || '';
    return dateB.localeCompare(dateA);
  });

  const displayedPosts = isExpanded
    ? sortedPosts
    : sortedPosts.slice(0, POST_COLLAPSE_THRESHOLD);

  return (
    <section className="_js-year margin-bottom--lg">
      <h3 style={{
        fontFamily: 'var(--ifm-font-family-monospace)',
        fontSize: '1.1em',
        fontWeight: 700,
        marginBottom: '0.3rem',
      }}>
        {year}
      </h3>
      <ul ref={parent} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {displayedPosts.map((post) => (
          <PostItem key={post.metadata.permalink} post={post} sortBy={sortBy} />
        ))}
      </ul>
      {posts.length > POST_COLLAPSE_THRESHOLD && (
        <button
          className="button button--sm margin-top--md"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--ifm-color-primary)',
            fontFamily: 'var(--ifm-font-family-monospace)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            padding: '0.3rem 0 0.3rem 1.5rem',
          }}
        >
          {isExpanded
            ? '收起部分文章'
            : `展开其余 ${posts.length - POST_COLLAPSE_THRESHOLD} 篇...`}
        </button>
      )}
    </section>
  );
}

// 主组件
// 获取一年中的第几天
const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

// 格式化日期显示
const formatDateDisplay = (dateStr: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = weekdays[date.getDay()];
  const dayOfYear = getDayOfYear(date);
  return `${year}-${month}-${day} 周${weekday} 第${dayOfYear}天`;
};

export default function PostList({
  years,
  sortBy,
  tag,
  selectedDate,
  searchQuery,
  updateSortBy,
  onTagClick,
  onDateClick,
  onSearchClear,
  loadMoreRef,
  hasMore,
  totalPosts,
}: {
  years: Array<{ year: string; posts: ArchiveBlogPost[]; sortBy: SortBy }>;
  sortBy: SortBy;
  tag: string | null;
  selectedDate: string | null;
  searchQuery: string | null;
  updateSortBy: (sortBy: SortBy) => void;
  onTagClick?: (tag: string | null) => void;
  onDateClick?: (date: string | null) => void;
  onSearchClear?: () => void;
  loadMoreRef: React.RefObject<HTMLDivElement>;
  hasMore: boolean;
  totalPosts: number;
}) {
  const [parent] = useAutoAnimate();

  if (years.length === 0) {
    return null;
  }

  return (
    <section className="margin-bottom--lg">
      <div className="container">
        <nav
          className="margin-bottom--md"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <button
            title="按发布时间排序"
            className={clsx(
              'button button--sm button--primary',
              sortBy !== 'date' && 'button--outline',
              'margin-right--sm'
            )}
            onClick={() => updateSortBy('date')}
          >
            发布时间
          </button>
          <button
            title="按更新时间排序"
            className={clsx(
              'button button--sm button--primary',
              sortBy !== 'update' && 'button--outline'
            )}
            onClick={() => updateSortBy('update')}
          >
            更新时间
          </button>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span className="badge badge--secondary">{`${totalPosts} 篇`}</span>
            {tag && (
              <span
                className="badge badge--secondary"
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick?.(null);
                }}
                title="点击清除标签筛选"
              >
                {tag} ×
              </span>
            )}
            {selectedDate && (
              <span
                className="badge badge--secondary"
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  onDateClick?.(null);
                }}
                title="点击清除日期筛选"
              >
                {formatDateDisplay(selectedDate)} ×
              </span>
            )}
            {searchQuery && (
              <span
                className="badge badge--secondary"
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  onSearchClear?.();
                }}
                title="点击清除搜索"
              >
                关键字: {searchQuery} ×
              </span>
            )}
          </div>
        </nav>
        <div ref={parent} className="">
          {years.map((props) => (
            <Year key={props.year} {...props} />
          ))}
        </div>
        {hasMore && (
          <div
            ref={loadMoreRef}
            className="margin-vert--lg"
            style={{ textAlign: 'center' }}
          >
            加载更多...
          </div>
        )}
      </div>
    </section>
  );
}

// 工具函数：按年份分组文章
export function listPostsByYear(
  blogPosts: readonly ArchiveBlogPost[],
  sortBy: SortBy
) {
  const postsByYear = blogPosts.reduceRight((posts, post) => {
    const year = (post.metadata.frontMatter[sortBy] as string).split('-')[0]!;
    const yearPosts = posts.get(year) ?? [];
    return posts.set(year, [...yearPosts, post as ArchiveBlogPost]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(
    postsByYear,
    ([year, posts]) =>
      ({
        year,
        posts,
        sortBy,
      } as YearProps)
  ).sort((a, b) => Number(b.year) - Number(a.year));
}
