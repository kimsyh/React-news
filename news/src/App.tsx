import React, { useState, useCallback } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import "./App.css";
import NewList from "./components/NewsList";
import Categories from "./components/Categories";
import NewsPages from "./page/NewsPages";

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category :any) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/> 
      <NewList category={category}/>

    </>
  );
}

export default App;
