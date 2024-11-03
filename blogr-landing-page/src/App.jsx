import { useState } from 'react'
import './App.css'

import NavBar from './components/landingPage/Navbar'
import Content from './components/landingPage/content'
import Future from './components/designed/future'
import Blogr from './components/Blogr/blogr'

function App() {

  return (
    <>
    <NavBar />
    <Content />
    <Future />
    <Blogr />
    </>
  )
}

export default App
