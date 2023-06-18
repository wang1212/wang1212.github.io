import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useSWR from 'swr';

export type EventMetadata = {};

export type EventData = {
  title: string;
  description: string;
  labels?: string[];
};

export type Dataset = {
  metadata: EventMetadata;
  events: { [date: string]: EventData[] };
};

export function useDataset(): {
  data: Dataset;
  isError: boolean;
  isLoading: boolean;
} {
  const config = useDocusaurusContext();
  const { data, error, isLoading } = useSWR(`/api/timeline/index`, () =>
    fetch(`${config.siteConfig.baseUrl}database/timeline/index.json`).then(
      (response) => response.json()
    )
  );

  return {
    data,
    isError: error,
    isLoading,
  };
}
