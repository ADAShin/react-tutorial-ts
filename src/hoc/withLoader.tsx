import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadDiv = styled.div`
  padding: 36px;
`;

export type WithLoadingInjectedProps<T> = {
  data: T;
};

export function withLoading<
  T,
  P extends WithLoadingInjectedProps<T> = WithLoadingInjectedProps<T>
>(WrappedComponent: React.ComponentType<P>, fetchData: () => Promise<T>) {
  return (props: Omit<P, keyof WithLoadingInjectedProps<T>>) => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
      const fetchLanguages = async () => {
        const result = await fetchData();
        setData(result);
      };
      void fetchLanguages();
    }, []);

    const Loading = <LoadDiv>ロード中...</LoadDiv>;

    return data ? <WrappedComponent {...(props as P)} data={data} /> : Loading;
  };
}
