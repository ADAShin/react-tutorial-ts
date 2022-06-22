import { FC, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 64px;
`;

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n + 2) {
    border-top: 1px solid #d9d8de;
  }
`;

type Props = {
  langs: string[];
};

export const List: FC<Props> = ({ langs }) => {
  useEffect(() => {
    console.log('List.tsx:useEffect');
    return () => {
      console.log('List.tsx:useEffect:unmount');
    };
  });

  return (
    <Container>
      {langs.map((lang, index) => (
        <ListItem key={index}>{lang}</ListItem>
      ))}
    </Container>
  );
};
