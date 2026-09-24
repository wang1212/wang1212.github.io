import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme-original/BlogLayout';
import BlogListPaginator from '@theme-original/BlogListPaginator';
import SearchMetadata from '@theme-original/SearchMetadata';
import BlogListPageStructuredData from '@theme-original/BlogListPage/StructuredData';
import type { Props } from '@theme/BlogListPage';
import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import { formatterDate } from '../../utils/date';
import styles from './styles.module.css';

function BlogListPageMetadata(props: Props) {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function PostListItem({ content }: { content: any }) {
  const { metadata, frontMatter } = content;
  const rawDate = (frontMatter.update as string) || metadata.date;
  const date = rawDate
    ? typeof rawDate === 'string'
      ? formatterDate(rawDate)
      : formatterDate(rawDate.toISOString())
    : '';
  const tags: string[] = frontMatter.tags || [];

  return (
    <BlogPostProvider content={content}>
      <a href={metadata.permalink} className={styles.postItem}>
        <span className={styles.postDate}>{date}</span>
        <div className={styles.postRight}>
          <span className={styles.postTitle}>{metadata.title}</span>
          {tags.length > 0 && (
            <div className={styles.postTags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag.replace(/^!/, '')}</span>
              ))}
            </div>
          )}
        </div>
      </a>
    </BlogPostProvider>
  );
}

function BlogListPageContent(props: Props) {
  const { metadata, items, sidebar } = props;

  return (
    <BlogLayout sidebar={sidebar}>
      <div className={styles.postList}>
        {items.map(({ content: BlogPostContent }) => (
          <PostListItem key={BlogPostContent.metadata.permalink} content={BlogPostContent} />
        ))}
      </div>
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
