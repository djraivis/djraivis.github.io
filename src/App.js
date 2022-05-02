// React
import React from 'react'
// Components
import Card from './components/Card'
import Whoami from './components/Whoami'
import Buttons from './components/Buttons'
import Content from './components/Content'
import Skills from './components/Skills'
// Styles
import './App.css'

function App() {
  return (
    <div className="digital-business-card">
      <Card />
      <Whoami />
      <Buttons />
      <Content />
      <Skills />
    </div>
  )
}
export default App
