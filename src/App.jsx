import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import {Tarefas}  from './components/Tarefas'

function App() {
  // const texto = prompt("Digite Seu Nome");
  return (
    <div className='App'>
      {/* <NovaTarefa/>
      <Form props={texto}/> */}
      <Tarefas/>
    </div>
  )
}

export default App
