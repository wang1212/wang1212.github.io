import React, { useRef, useEffect, useState, useMemo } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { PageMetadata } from '@docusaurus/theme-common';
import { VirtuosoGrid } from 'react-virtuoso';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import styles from './index.module.css';
import SearchInput from './_SearchInput';

const dataset = Array.from(Array(1000), (_, i) => i);

function Item({ data }) {
  return (
    <div className={clsx('card', styles['card'])}>
      <div className="card__header">
        <h5>{data}</h5>
      </div>
      <div className={clsx('card__body', styles['card__body'])}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className="card__footer">
        <span className="badge badge--secondary margin-right--sm">
          Secondary
        </span>
        <span className="badge badge--secondary margin-right--sm">
          Secondary
        </span>
      </div>
    </div>
  );
}

export default () => {
  const sss = useRef();
  const [parent, enableAnimations] = useAutoAnimate();

  useEffect(() => {
    // parent(document.getElementsByClassName('row--no-gutters')[0]);
  }, []);

  return (
    // <Layout title="收藏资源">
    <>
      <PageMetadata title="收藏资源" description="一些很棒的资源" />

      <div className="container">
        <SearchInput />
        <VirtuosoGrid
          listClassName={clsx('row row--no-gutters', styles['row'])}
          itemClassName="col col--3 padding--sm"
          useWindowScroll
          totalCount={dataset.length}
          // overscan={200}
          itemContent={(index) => (
            <Item key={dataset[index]} data={dataset[index]} />
          )}
        ></VirtuosoGrid>
      </div>
    </>
    // </Layout>
  );
};
