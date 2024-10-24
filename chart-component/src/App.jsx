import { useState } from 'react'
import './App.css'
import Header from "./components/header/header";

import BarChart from './components/barChart/barChart';
function App() {
 
  return (
  //   <Router className="bg-gradient-to-b from-beige-200 to-green-900 h-screen flex flex-col items-center justify-between">
  //   <Routes>
  //     <Route path="/" element={<Header />} />
  //     <Route path= '/' element ={<Bar />} />
  //     {/* <Route path="/recipe/:id" element={<RecipeDetail />} />
  //     <Route path="/recipe/:id" element={<AddRecipeForm />} /> */}
  //   </Routes>
  // </Router>
    <>
    <Header />
    <BarChart />
     </>
  )
}

export default App
