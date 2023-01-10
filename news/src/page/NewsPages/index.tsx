import React ,{ useState }from 'react';
import styled, {css} from 'styled-components'
import Categories from '../../components/Categories';
import { NavLink } from 'react-router-dom';

import NewsList from '../../components/NewsList';



 
const NewsPage = ({ match } : any) => {
  const category = match.params.category || 'all';
  return (
    <>
      {/* <Categories/>
      <NewsList category={category}/> */}
      newPage
    </>
  );
}

export default NewsPage  ;
