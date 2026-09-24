import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { formatISODate } from '../../../../utils/date';
import styles from './styles.module.css';

export default function BlogPostItemHeaderInfo(): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { date, readingTime, frontMatter } = metadata;

  if (!isBlogPostPage) return null;

  const updateDate = frontMatter.update as string;
  const publishDate = typeof date === 'string' ? date : date?.toISOString?.() || '';
  const updateStr = updateDate ? formatISODate(updateDate) : '';
  const publishStr = publishDate ? formatISODate(publishDate) : '';

  return (
    <div className={styles.info}>
      <div className={styles.meta}>
        <span>发布于 {publishStr}</span>
        {updateStr && updateStr !== publishStr && (
          <span>更新于 {updateStr}</span>
        )}
        {typeof readingTime !== 'undefined' && (
          <span>{Math.ceil(readingTime)} 分钟阅读</span>
        )}
      </div>
    </div>
  );
}
