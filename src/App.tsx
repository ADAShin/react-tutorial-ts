import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext, ThemeType } from './context/ThemeContext';
import { Form } from './Form';
import { Header, TabStateType } from './Header';
import { WithLoadingInjectedProps } from './hoc/withLoader';
import { List } from './List';

type ContainerProps = {
  customeTheme: ThemeType;
};

const Container = styled.div<ContainerProps>`
  height: 100%;
  color: ${({ customeTheme }) => customeTheme.color};
  background-color: ${({ customeTheme }) => customeTheme.backgroundColor};
`;

type AppProps = WithLoadingInjectedProps<string[]>;

const App: FC<AppProps> = ({ data }) => {
  const [tab, setTab] = useState<TabStateType>('list');
  const [langs, setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  const addlangs = (newLang: string) => {
    setLangs([...langs, newLang]);
    setTab('list');
  };

  return (
    <Container customeTheme={theme}>
      <Header tab={tab} setTab={setTab} />
      {tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addlangs} />}
    </Container>
  );
};

export default App;
