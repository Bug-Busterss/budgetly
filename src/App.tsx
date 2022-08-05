import Demo from './Components/Modal';
import { AppShell } from '@mantine/core';
import { useState } from 'react';
import HeaderTabsColored from './Components/DS_Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <AppShell>
        <Routes>
          <Route path='/'>
            <HeaderTabsColored
              user={{
                name: '',
                image: '',
              }}
              tabs={['Dashboard', 'Insights', 'About']}
            />
            <Demo />
          </Route>
        </Routes>
      </AppShell>
    </div>
  );
}

export default App;
