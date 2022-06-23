import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { TabBodyContainer } from './components/TabBodyContainer';

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
    <TabBodyContainer title="取扱い言語リスト">
      {langs.map((lang, index) => (
        <ListItem key={index}>{lang}</ListItem>
      ))}
    </TabBodyContainer>
  );
};
