import { useState } from 'react'
import './App.css'

import NavBar from './components/landingPage/Navbar'
import Content from './components/landingPage/content'
import Future from './components/designed/future'
import Blogr from './components/Blogr/blogr'
import Tooling from './components/tooling/Tooling'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
    <NavBar />
    <Content />
    <Future />
    <Blogr />
    <Tooling />
    <Footer />
    </>
  )
}

export default App
