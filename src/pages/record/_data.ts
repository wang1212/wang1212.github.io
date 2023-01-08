import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useSWR from 'swr';

export type EventMetadata = { year: number; type: string[] };

export type EventData = {
  type: number;
  description: string;
  labels?: string[];
};

export type YearDataset = {
  metadata: EventMetadata;
  events: { [date: string]: EventData[] };
};

export function useDataByYear(year: number): {
  data: YearDataset;
  isError: boolean;
  isLoading: boolean;
} {
  const config = useDocusaurusContext();
  const { data, error, isLoading } = useSWR(`/api/record/${year}`, () =>
    fetch(`${config.siteConfig.baseUrl}database/record/${year}.json`).then(
      (response) => response.json()
    )
  );

  return {
    data,
    isError: error,
    isLoading,
  };
}
