import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import TagsListInline from '@theme-original/TagsListInline';
import EditMetaRow from '@theme-original/EditMetaRow';
import ReadMoreLink from '@theme-original/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';

export default function BlogPostItemFooter(): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost();
  const {
    tags,
    title,
    editUrl,
    hasTruncateMarker,
    lastUpdatedBy,
    lastUpdatedAt,
  } = metadata;

  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;

  if (!renderFooter) return null;

  // 详情页 footer
  if (isBlogPostPage) {
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    return (
      <footer className={styles.footer}>
        {tagsExists && (
          <div className={styles.tagsRow}>
            <TagsListInline tags={tags} />
          </div>
        )}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            className={clsx(styles.editRow, ThemeClassNames.blog.blogFooterEditMetaRow)}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </footer>
    );
  }

  // 列表页 footer（简化）
  return (
    <footer className={styles.footerList}>
      {tagsExists && (
        <div className={clsx('col', { 'col--9': truncatedPost })}>
          <TagsListInline tags={tags} />
        </div>
      )}
      {truncatedPost && (
        <div className={clsx('col text--right', { 'col--3': tagsExists })}>
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
