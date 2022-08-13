import React, { useState } from 'react'
import { AuthProvider } from './context/authProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedLayout } from './components/protectedLayout';
import { Login } from './components/login';
import 'antd/dist/antd.css';
import { Profile } from './components/profile';
import { NotFound } from './components/404';

function App() {

  return (
   <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/profile'>
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        </Route>
        
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
   </AuthProvider>
  )
}

export default App
