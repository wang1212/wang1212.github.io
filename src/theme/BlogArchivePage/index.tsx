import React from 'react';
import Link from '@docusaurus/Link';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import type { ArchiveBlogPost, Props } from '@theme/BlogArchivePage';
import BlogArchivePage from '@theme-original/BlogArchivePage';

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
];

/** ! custom config */
const customConfig = {
  archive: {
    title: '历史文章',
    description: () =>
      descriptionSet[Math.floor(Math.random() * descriptionSet.length)],
  },
};

type MonthProps = {
  year: string;
  month: string;
  posts: ArchiveBlogPost[];
};

function Month({ year, month, posts }: MonthProps) {
  const formatterDate = (date: string) =>
    date
      .split(/[^\d]+/)
      .slice(0, 3)
      .map((v) => v.padStart(2, '0'))
      .join('-');

  return (
    <>
      <h4>
        <small style={{ color: 'var(--ifm-color-secondary)' }}>{year}</small>{' '}
        {month} 月
      </h4>
      <ul>
        {posts.map((post) => (
          <li key={post.metadata.date}>
            <Link to={post.metadata.permalink}>
              <div>{post.metadata.title}</div>
            </Link>
            <div style={{ opacity: 0.5 }}>
              <small>
                发布于 {formatterDate(post.metadata.frontMatter.date as string)}
              </small>{' '}
              {(post.metadata.frontMatter.update !==
                post.metadata.frontMatter.date && (
                <small>
                  最后更新于{' '}
                  {formatterDate(post.metadata.frontMatter.update as string)}
                </small>
              )) ||
                ''}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function listPostsByMonth(
  blogPosts: readonly ArchiveBlogPost[]
): Omit<MonthProps, 'year'>[] {
  const postsByMonth = blogPosts.reduceRight((posts, post) => {
    const month = post.metadata.date.split('-')[1];
    const monthPosts = posts.get(month) ?? [];
    return posts.set(month, [post, ...monthPosts]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(postsByMonth, ([month, posts]) => ({
    month,
    posts,
  }));
}

type YearProps = {
  year: string;
  posts: ArchiveBlogPost[];
};

function Year({ year, posts }: YearProps) {
  const months = listPostsByMonth(posts);

  return (
    <>
      <h3>{year} 年</h3>
      {months
        .sort((a, b) => Number(b.month) - Number(a.month))
        .map((_props, idx) => (
          <Month key={idx} year={year} {..._props} />
        ))}
    </>
  );
}

function YearsSection({ years }: { years: YearProps[] }) {
  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="row">
          {years
            .sort((a, b) => Number(b.year) - Number(a.year))
            .map((_props, idx) => (
              <div key={idx} className="col col--4 margin-vert--lg">
                <Year {..._props} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function listPostsByYear(blogPosts: readonly ArchiveBlogPost[]): YearProps[] {
  const postsByYear = blogPosts.reduceRight((posts, post) => {
    const year = post.metadata.date.split('-')[0]!;
    const yearPosts = posts.get(year) ?? [];
    return posts.set(year, [post, ...yearPosts]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(postsByYear, ([year, posts]) => ({
    year,
    posts,
  }));
}

export default function BlogArchivePageWrapper(props: Props) {
  const years = listPostsByYear(props.archive.blogPosts);
  const title = customConfig.archive.title;

  return (
    <>
      <PageMetadata
        title={customConfig.archive.title}
        description={customConfig.archive.description()}
      />
      <Layout>
        <header className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">
              {customConfig.archive.description()}
            </p>
          </div>
        </header>
        <main>{years.length > 0 && <YearsSection years={years} />}</main>
      </Layout>
      {/* <BlogArchivePage {...props} /> */}
    </>
  );
}
