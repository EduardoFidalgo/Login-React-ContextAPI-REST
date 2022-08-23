import React, { useState } from 'react'
import { AuthProvider } from './context/authProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedLayout } from './components/protectedLayout';
import { Login } from './components/login';
import 'antd/dist/antd.css';
import { NotFound } from './components/404';
import { Dashboard } from './components/dashboard';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
