import Demo from './Components/Modal';
import { AppShell, Container } from '@mantine/core';
import { useState } from 'react';
import HeaderTabsColored from './Components/DS_Header';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from './Pages/Register';
import ExpenseCard from './Components/Card';
import { Footer } from './Components/footer';
import About from './Pages/About';
import Login from './Pages/Login';

function App() {
  return (
    <div className='App'>
      <AppShell>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HeaderTabsColored
                  user={{
                    name: '',
                    image: '',
                  }}
                  tabs={['Dashboard', 'Insights', 'About']}
                />
                <Container>
                  <Demo />
                  <ExpenseCard />
                </Container>
              </>
            }
          />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </AppShell>
    </div>
  );
}

export default App;
