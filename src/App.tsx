import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLanguages } from './const/language';
import { Form } from './Form';
import { List } from './List';

type TabStateType = 'list' | 'form';

const Header = styled.header`
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

function App() {
  const [tab, setTab] = useState<TabStateType>('list');
  const [langs, setLangs] = useState<string[]>([]);

  useEffect(() => {
    console.log('App.tsx:useEffect');
    const fetchLanguages = async () => {
      const languages = await getLanguages();
      setLangs(languages);
    };
    void fetchLanguages();
  }, []);

  const addlangs = (newLang: string) => {
    setLangs([...langs, newLang]);
    setTab('list');
  };

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>
            リスト
          </HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>
            フォーム
          </HeaderLi>
        </HeaderUl>
      </Header>
      {tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addlangs} />}
    </div>
  );
}

export default App;
