import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Card } from './components/Cards/Card'
import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Main />
    <Card />
  </React.StrictMode>
)
