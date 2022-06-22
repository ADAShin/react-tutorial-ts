import { useEffect, useState } from 'react';
import { getLanguages } from './const/language';
import { Form } from './Form';
import { List } from './List';

type TabStateType = 'list' | 'form';

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
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addlangs} />}
    </div>
  );
}

export default App;
