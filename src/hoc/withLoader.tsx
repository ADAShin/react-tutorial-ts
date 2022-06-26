import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext, ThemeType } from '../context/ThemeContext';

type ThemeProps = {
  customeTheme: ThemeType;
};

const LoadDiv = styled.div<ThemeProps>`
  height: 100%;
  padding: 36px;
  color: ${({ customeTheme }) => customeTheme.color};
  background-color: ${({ customeTheme }) => customeTheme.backgroundColor};
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
    const [theme] = useContext(ThemeContext);

    useEffect(() => {
      const fetchLanguages = async () => {
        const result = await fetchData();
        setData(result);
      };
      void fetchLanguages();
    }, []);

    const Loading = <LoadDiv customeTheme={theme}>ロード中...</LoadDiv>;

    return data ? <WrappedComponent {...(props as P)} data={data} /> : Loading;
  };
}
