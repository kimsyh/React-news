import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem/index";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }: any) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category == "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=22ff47f773bd4db9b21428aa8f6185e1"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>loading...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <>
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    </>
  );
};

export default NewsList;
NewsList;
