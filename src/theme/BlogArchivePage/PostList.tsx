import React, { useRef } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import clsx from 'clsx';
import type { ArchiveBlogPost } from '@theme/BlogArchivePage';
import { formatterDate } from '../../utils/date';

type SortBy = 'date' | 'update';

export interface YearProps {
  year: string;
  posts: ArchiveBlogPost[];
  sortBy: SortBy;
}

// 文章项组件
function PostItem({ post }: { post: ArchiveBlogPost }) {
  return (
    <li>
      <a href={post.metadata.permalink}>
        <div>{post.metadata.title}</div>
      </a>
      <div style={{ opacity: 0.5 }}>
        <small>
          发布于 {formatterDate(post.metadata.frontMatter.date as string)}
        </small>{' '}
        {post.metadata.frontMatter.update !== post.metadata.frontMatter.date ? (
          <small>
            最后更新于{' '}
            {formatterDate(post.metadata.frontMatter.update as string)}
          </small>
        ) : (
          ''
        )}
      </div>
    </li>
  );
}

// 月份部分组件
function Month({
  year,
  month,
  posts,
}: {
  year: string;
  month: string;
  posts: ArchiveBlogPost[];
}) {
  const [parent] = useAutoAnimate();

  return (
    <section className="_js-month">
      <h4>
        <small style={{ color: 'var(--ifm-color-secondary)' }}>{year}</small>{' '}
        {month} 月
      </h4>
      <ul ref={parent}>
        {posts.map((post) => (
          <PostItem key={post.metadata.permalink} post={post} />
        ))}
      </ul>
    </section>
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

  // 按月份分组文章
  const listPostsByMonth = (blogPosts: readonly ArchiveBlogPost[]) => {
    const postsByMonth = blogPosts.reduceRight((posts, post) => {
      const month = (post.metadata.frontMatter[sortBy] as string).split('-')[1];
      const monthPosts = posts.get(month) ?? [];
      return posts.set(month, [post, ...monthPosts]);
    }, new Map<string, ArchiveBlogPost[]>());

    return Array.from(postsByMonth, ([month, posts]) => ({
      month,
      posts: posts.sort(
        (a, b) =>
          new Date(b.metadata.frontMatter[sortBy] as string).getTime() -
          new Date(a.metadata.frontMatter[sortBy] as string).getTime()
      ),
    })).sort((a, b) => Number(b.month) - Number(a.month));
  };

  // 获取所有月份的文章
  const allMonths = listPostsByMonth(posts);

  // 获取所有已排序的文章
  const sortedPosts = allMonths.flatMap((month) => month.posts);

  // 根据 isExpanded 决定显示多少篇文章
  const displayedPosts = isExpanded
    ? sortedPosts
    : sortedPosts.slice(0, POST_COLLAPSE_THRESHOLD);

  // 重新生成月份分组
  const months = listPostsByMonth(displayedPosts);

  return (
    <section className="_js-year col col--4 margin-bottom--lg">
      <h3>{year} 年</h3>
      <div ref={parent}>
        {months.map((props) => (
          <Month key={props.month} year={year} {...props} />
        ))}
      </div>
      {posts.length > POST_COLLAPSE_THRESHOLD && (
        <button
          className="button button--sm button--outline button--primary margin-top--md"
          onClick={() => setIsExpanded(!isExpanded)}
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
export default function PostList({
  years,
  sortBy,
  tag,
  updateSortBy,
  onTagClick,
  loadMoreRef,
  hasMore,
  totalPosts,
}: {
  years: Array<{ year: string; posts: ArchiveBlogPost[]; sortBy: SortBy }>;
  sortBy: SortBy;
  tag: string | null;
  updateSortBy: (sortBy: SortBy) => void;
  onTagClick?: (tag: string | null) => void;
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
              >
                {tag} ×
              </span>
            )}
          </div>
        </nav>
        <div ref={parent} className="row">
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
