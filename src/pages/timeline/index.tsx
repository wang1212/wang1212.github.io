import React, { useRef, useEffect, useState, useMemo } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import { useDataset, EventData } from './_data';
import Loading from '../../components/Loading';

type IconLabelItemProps = {
  label: string;
};

function IconLabelItem({ label }: IconLabelItemProps) {
  const hasIcon = !label.match(/^\!/);
  const text = hasIcon ? label : label.slice(1);

  return (
    <div
      className={clsx(
        'badge badge--secondary padding-vert--none margin--xs',
        styles['icon-label-item']
      )}
    >
      {(hasIcon && (
        <>
          <img
            height="16"
            width="16"
            src={`https://cdn.simpleicons.org/${label
              .replace(/\s/g, '')
              .toLowerCase()}`}
          />
          <i className={clsx('margin-horiz--xs', styles['divider'])} />
        </>
      )) ||
        ''}
      <span>{text}</span>
    </div>
  );
}

type TimelineBlockItemProps = {
  data: EventData;
};

function TimelineBlockItem({ data }: TimelineBlockItemProps) {
  return (
    <div
      className={clsx(
        'card margin-top--md',
        styles['timeline-block-content-item']
      )}
    >
      <div className="card__header">
        <h4>{data.title}</h4>
      </div>
      <div className="card__body">
        <p>{data.description}</p>
      </div>
      {(data.labels.length && (
        <div className={clsx('card__footer', styles['icon-label-list'])}>
          {data.labels.map((label) => (
            <IconLabelItem key={label} label={label} />
          ))}
        </div>
      )) ||
        ''}
    </div>
  );
}

type TimelineBlockProps = {
  date: string;
  items: EventData[];
};

function TimelineBlock({ date, items }: TimelineBlockProps) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;

  return (
    <div className={styles['timeline-block']}>
      <i className={clsx('margin-right--lg', styles['timeline-block-line'])} />
      <div
        className={clsx('padding-vert--md', styles['timeline-block-content'])}
      >
        <h3>
          {year}.{String(month).padStart(2, '0')}
        </h3>
        {items.map((item, index) => (
          <TimelineBlockItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default () => {
  const { data, isError, isLoading } = useDataset();
  const sortedDates = Object.keys(data?.events || {})
    .slice()
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <Layout title="历程" description="展示过去的经历">
      <div className="margin-vert--lg">
        <div className="container">
          {/* loading */}
          {((isError || isLoading) && (
            <section
              className="margin-vert--xl"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Loading />
            </section>
          )) ||
            ''}

          {sortedDates.map((date) => (
            <TimelineBlock
              key={date}
              date={date}
              items={data?.events?.[date] || []}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
