import styles from './index.module.css';
import React, { useEffect, useState, useCallback } from 'react';
import Link from '@docusaurus/Link';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import type { ArchiveBlogPost, Props } from '@theme/BlogArchivePage';
import BlogArchivePage from '@theme-original/BlogArchivePage';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import clsx from 'clsx';

/**
 * ! 覆盖内部实现
 */

const descriptionSet = [
  '人不应该是插在花瓶里供人观赏的静物，而是蔓延在草原上随风起舞的韵律。生命不是安排，而是追求，人生的意义也许永远没有答案，但也要尽情感受这种没有答案的人生。',
  '其实我们每个人的生活都是一个世界，即使最平凡的人也要为他生活的那个世界而奋斗。',
  '人一辈子最珍贵的品质其实就两样：一个是热血，一个是天真。',
  '你不能因为自己变成了不痛不痒的人，就去嘲笑那些爱恨分明的人。',
  '尊重那些与你抗争的人，因为你争的是理，不是去损毁对方的人格。',
  '梦想这东西与经典一样，永远不会因时间而褪色，反而更显珍贵。',
  '我们走过的每一步不一定是完美的，但每一步都有值得深思的意义。',
  '做生活的导演，不成；次之，做演员；再次之，做观众。',
  '软件只是一种帮助人们完成某些事情的工具——许多程序员从来不理解这一点。关注交付的价值，不要过分关注工具的细节 - John Carmack',
  'const res = ["👨", "‍", "👩", "‍", "👧", "‍", "👦"].join(\'\'); console.log(res);',
];

/** ! custom config */
const customConfig = {
  archive: {
    title: '岁月留痕',
    description: () =>
      descriptionSet[Math.floor(Math.random() * descriptionSet.length)],
  },
};

// ------------------------------------------------------------------------------------

type SortBy = 'date' | 'update';

function PostItem({ post }: { post: ArchiveBlogPost }) {
  const formatterDate = (date: string) =>
    date
      .split(/[^\d]+/)
      .slice(0, 3)
      .map((v) => v.padStart(2, '0'))
      .join('-');

  return (
    <li>
      <Link to={post.metadata.permalink}>
        <div>{post.metadata.title}</div>
      </Link>
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

type MonthProps = {
  year: string;
  month: string;
  posts: ArchiveBlogPost[];
  sortBy: SortBy;
};

function Month({ year, month, posts, sortBy }: MonthProps) {
  const [parent, enableAnimations] = useAutoAnimate();

  posts.sort(
    (a, b) =>
      new Date(b.metadata.frontMatter[sortBy] as string).getTime() -
      new Date(a.metadata.frontMatter[sortBy] as string).getTime()
  );

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

function listPostsByMonth(
  blogPosts: readonly ArchiveBlogPost[],
  sortBy: SortBy
): Omit<MonthProps, 'year'>[] {
  const postsByMonth = blogPosts.reduceRight((posts, post) => {
    const month = (post.metadata.frontMatter[sortBy] as string).split('-')[1];
    const monthPosts = posts.get(month) ?? [];
    return posts.set(month, [post, ...monthPosts]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(postsByMonth, ([month, posts]) => ({
    month,
    posts,
    sortBy,
  }));
}

type YearProps = {
  year: string;
  posts: ArchiveBlogPost[];
  sortBy: SortBy;
};

function Year({ year, posts, sortBy }: YearProps) {
  const months = listPostsByMonth(posts, sortBy);
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <section className="_js-year col col--4 margin-bottom--lg">
      <h3>{year} 年</h3>
      <div ref={parent}>
        {months
          .sort((a, b) => Number(b.month) - Number(a.month))
          .map((props) => (
            <Month key={props.month} year={year} {...props} />
          ))}
      </div>
    </section>
  );
}

function YearsSection({
  years,
  sortBy,
  tag,
  updateSortBy,
}: {
  years: YearProps[];
  sortBy: SortBy;
  tag: string | null;
  updateSortBy: (sortBy: SortBy) => void;
}) {
  const [parent, enableAnimations] = useAutoAnimate();

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
          {(tag && (
            <span
              className="badge badge--secondary"
              style={{ marginLeft: 'auto' }}
            >
              {tag}
            </span>
          )) ||
            ''}
        </nav>
        <div ref={parent} className="row">
          {years
            .sort((a, b) => Number(b.year) - Number(a.year))
            .map((props) => (
              <Year key={props.year} {...props} />
            ))}
        </div>
      </div>
    </section>
  );
}

function listPostsByYear(
  blogPosts: readonly ArchiveBlogPost[],
  sortBy: SortBy
): YearProps[] {
  const postsByYear = blogPosts.reduceRight((posts, post) => {
    const year = (post.metadata.frontMatter[sortBy] as string).split('-')[0]!;
    const yearPosts = posts.get(year) ?? [];
    return posts.set(year, [post, ...yearPosts]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(postsByYear, ([year, posts]) => ({
    year,
    posts,
    sortBy,
  }));
}

type TagMap = Map<string, { item: unknown; count: number }>;

function getTagMap(blogPosts: readonly ArchiveBlogPost[]): TagMap {
  const tagMap: TagMap = new Map();

  blogPosts.forEach((post) => {
    (post.metadata.tags || []).forEach((tag) => {
      let tagData = tagMap.get(tag.label);
      if (!tagMap.has(tag.label)) {
        tagData = { item: tag, count: 0 };
      }
      tagData.count++;
      tagMap.set(tag.label, tagData);
    });
  });

  return tagMap;
}

export default function BlogArchivePageWrapper(props: Props) {
  const [description] = useState(customConfig.archive.description());
  const title = customConfig.archive.title;
  const [showTagCloud, setShowTagCloud] = useState(true);
  const [tag, setTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>('update');
  const [years, setYears] = useState([]);
  const tagMap = getTagMap(props.archive.blogPosts);
  const tagList: [string, number][] = Array.from(
    tagMap,
    ([tagName, tagData]) => [tagName, tagData.count]
  );

  const updateTag = useCallback(
    (tag: string) => {
      setTag((prevTag) => {
        const urlParamsTemp = new URLSearchParams(window.location.search);
        const newTag = prevTag === tag ? null : tag;

        if (newTag === null) {
          urlParamsTemp.delete('tag');
        } else {
          urlParamsTemp.set('tag', newTag);
        }

        window.history.replaceState(
          { tag: newTag },
          '',
          `${window.location.pathname}?${urlParamsTemp.toString()}`
        );
        return newTag;
      });
    },
    [setTag]
  );

  useEffect(() => {
    setTag(window.history?.state?.tag || null);
  }, [setTag]);

  useEffect(() => {
    // ! 客户端代码中引入第三方库
    const WordCloud = require('wordcloud');

    WordCloud(document.getElementById('wordcloud'), {
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
        (24 *
          document.getElementById('wordcloud').getBoundingClientRect().width) /
          1024
      ),
      shrinkToFit: true,
      click(item) {
        updateTag(item[0]);
      },
    });

    return () => {
      WordCloud.stop();
    };
  }, [updateTag]);

  useEffect(() => {
    const posts = !tag
      ? props.archive.blogPosts
      : props.archive.blogPosts.filter((post) =>
          post.metadata.frontMatter.tags.includes(tag)
        );

    setYears(listPostsByYear(posts, sortBy));
  }, [tag, sortBy, setYears]);

  return (
    <>
      <Layout title={customConfig.archive.title} description={description}>
        <BackToTopButton />

        <header className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{description}</p>
          </div>
        </header>
        <main>
          {props.archive.blogPosts.length > 0 ? (
            <>
              <section className="margin-vert--lg">
                <div className="container">
                  <nav className="margin-bottom--md">
                    <button
                      className={clsx(
                        'button button--sm button--primary',
                        !showTagCloud && 'button--outline'
                      )}
                      onClick={() => setShowTagCloud(!showTagCloud)}
                    >
                      标签云
                    </button>
                  </nav>
                  <section className={clsx(!showTagCloud && styles['hide'])}>
                    <div
                      id="wordcloud"
                      style={{ width: '100%', height: '400px' }}
                    ></div>
                  </section>
                  <section className={clsx(showTagCloud && styles['hide'])}>
                    <ul className={styles['tag-list']}>
                      {tagList
                        .slice()
                        .sort((a, b) => b[1] - a[1])
                        .map((tagItem) => (
                          <li
                            key={tagItem[0]}
                            className={`button button--sm button--outline button--secondary ${
                              tag === tagItem[0] ? 'button--active' : ''
                            }`}
                            onClick={() => updateTag(tagItem[0])}
                          >
                            {tagItem[0]} {tagItem[1] > 1 && tagItem[1]}
                          </li>
                        ))}
                    </ul>
                  </section>
                  <hr className="margin-vert--lg" style={{ opacity: 0.25 }} />
                </div>
              </section>
              <YearsSection
                sortBy={sortBy}
                updateSortBy={setSortBy}
                tag={tag}
                years={years}
              />
            </>
          ) : (
            ''
          )}
        </main>
      </Layout>
      {/* <BlogArchivePage {...props} /> */}
    </>
  );
}
