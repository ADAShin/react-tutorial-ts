import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 64px;
`;

type Props = PropsWithChildren & {
  title: string;
};

export const TabBodyContainer: FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <h4>{title}</h4>
      {children}
    </Container>
  );
};
