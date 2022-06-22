import { useState } from 'react';
import { LANGUAGES } from './const/language';
import { Form } from './Form';
import { List } from './List';

type TabStateType = 'list' | 'form';

function App() {
  const [tab, setTab] = useState<TabStateType>('list');
  const [langs, setLangs] = useState(LANGUAGES);

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
