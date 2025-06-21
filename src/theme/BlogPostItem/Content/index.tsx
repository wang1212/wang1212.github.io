import React, { type ReactNode } from 'react';
import Content from '@theme-original/BlogPostItem/Content';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { formatISODate } from '../../../utils/date';
import type ContentType from '@theme/BlogPostItem/Content';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  const { metadata } = useBlogPost();

  return (
    <>
      <blockquote>
        最后更新于 {formatISODate(metadata.frontMatter.update as string)}
      </blockquote>
      <Content {...props} />
    </>
  );
}
