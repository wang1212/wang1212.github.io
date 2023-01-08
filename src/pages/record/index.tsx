import React, { useRef, useEffect, useState, useMemo } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import styles from './index.module.css';
import Loading from './_Loading';
import {
  END_YEAR,
  YEARS,
  MONTH_LABELS,
  WEEKDAY_LABELS,
  WEEKDAY_LABELS_2,
} from './_const';
import { useDataByYear, YearDataset, EventData } from './_data';
import { dayOfYear } from './_util';

type DayEventsData = { date: string; events: EventData[] };

type DayEventListProps = {
  metadata: YearDataset['metadata'];
  eventsData: DayEventsData;
};

function DayEventList({ metadata, eventsData }: DayEventListProps) {
  if (!eventsData) {
    return null;
  }

  return (
    <section>
      <header>
        <h3 style={{ display: 'flex', alignItems: 'center' }}>
          {eventsData.date}{' '}
          <span className="margin-left--sm">
            {WEEKDAY_LABELS_2[new Date(eventsData.date).getDay()]}
          </span>
          <small
            className="margin-right-md"
            style={{ marginLeft: 'auto', opacity: 0.3 }}
          >
            第 {dayOfYear(new Date(eventsData.date))} 天
          </small>
        </h3>
      </header>
      <main>
        {eventsData.events.map((eventData, index) => (
          <div key={index} className={clsx('card', 'margin-bottom--md')}>
            <div className="card__header">
              <h3>{metadata.type[eventData.type]}</h3>
            </div>
            <div className="card__body">
              <p
                dangerouslySetInnerHTML={{
                  __html: eventData.description?.replace(/\n/g, '<br />'),
                }}
              ></p>
            </div>
            {(eventData.labels?.length && (
              <div className="card__footer">
                {eventData.labels.map((label, index) => (
                  <span
                    key={index}
                    className="badge badge--secondary margin-right--sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )) ||
              ''}
          </div>
        ))}
      </main>
    </section>
  );
}

function Tooltip({ data }) {
  const $dom = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.append($dom.current);
    $dom.current.classList.add(styles['tooltip']);

    return () => {
      $dom.current.remove();
    };
  }, []);

  console.log(data);

  return (
    <div>
      <div></div>
    </div>
  );
}

type CalHeatmapProps = {
  year: number;
  dataset: DayEventsData[];
  onDateClick: (dateEventsData: DayEventsData) => void;
};

function CalHeatmap({ year, dataset, onDateClick }: CalHeatmapProps) {
  const [tooltipData, setTooltipData] = useState(null);

  return (
    <section className="margin-bottom--md">
      <CalendarHeatmap
        startDate={new Date(`${year - 1}-12-31`)}
        endDate={new Date(`${year}-12-31`)}
        monthLabels={MONTH_LABELS}
        weekdayLabels={WEEKDAY_LABELS}
        // showWeekdayLabels
        tooltipDataAttrs={(data) => {
          return {
            'data-tooltip': `test ${data?.date}`,
          };
        }}
        classForValue={(dateEventsData: DayEventsData) => {
          if (!dateEventsData) {
            return 'color-empty';
          }
          if (dateEventsData?.events?.length <= 4) {
            return `color-github-${dateEventsData.events.length}`;
          }
          return `color-github-4`;
        }}
        onClick={(dateEventsData: DayEventsData) =>
          onDateClick?.(dateEventsData)
        }
        onMouseOver={(event, data) =>
          setTooltipData(data ? { event, data } : null)
        }
        onMouseLeave={() => setTooltipData(null)}
        values={dataset}
      />
    </section>
  );
}

export default () => {
  //
  const [currentYear, setCurrentYear] = useState(END_YEAR);
  const { data, isError, isLoading } = useDataByYear(currentYear);
  const [dateEventsData, setDateEventsData] = useState<DayEventsData>(null);

  const dataset = useMemo(() => {
    let dataset_: DayEventsData[] = [];
    if (!data) {
      setDateEventsData(null);
      return dataset_;
    }

    Object.keys(data.events).forEach((date) => {
      dataset_.push({
        date: `${data.metadata.year}-${date}`,
        events: data.events[date],
      });
    });

    setDateEventsData(dataset_[0]);

    return dataset_;
  }, [data]);

  return (
    <Layout title="记录">
      <div className="margin-vert--lg">
        <div className="container">
          {/* toolbar */}
          <section className="margin-bottom--lg">
            <div className="dropdown dropdown--hoverable">
              <button className="button button--primary">
                {currentYear}年
              </button>
              <ul className="dropdown__menu">
                {YEARS.slice()
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <li key={year}>
                      <a
                        className="dropdown__link"
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          setCurrentYear(year);
                        }}
                      >
                        {year}年
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
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
          {/* content */}
          {(!isError && !isLoading && (
            <>
              <CalHeatmap
                year={currentYear}
                dataset={dataset}
                onDateClick={setDateEventsData}
              />
              <DayEventList
                metadata={data.metadata}
                eventsData={dateEventsData}
              />
            </>
          )) ||
            ''}
        </div>
      </div>
    </Layout>
  );
};
