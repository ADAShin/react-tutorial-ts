import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Button } from './components/Button';
import { ThemeContext } from './context/ThemeContext';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

type CustomLiProps = {
  focused: boolean;
};

const HeaderLi = styled.li<CustomLiProps>`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${(props) => (props.focused ? '2px solid #F44336' : 'none')};
`;

const HeaderButton = styled(Button)`
  padding: 0;
  margin-bottom: 4px;
`;

export type TabStateType = 'list' | 'form';

type Props = {
  tab: TabStateType;
  setTab: (type: TabStateType) => void;
};

export const Header: FC<Props> = ({ tab, setTab }) => {
  const [, toggleTheme] = useContext(ThemeContext);
  return (
    <Container>
      <HeaderUl>
        <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>
          リスト
        </HeaderLi>
        <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>
          フォーム
        </HeaderLi>
      </HeaderUl>
      <HeaderButton onClick={toggleTheme}>テーマ変更</HeaderButton>
    </Container>
  );
};
