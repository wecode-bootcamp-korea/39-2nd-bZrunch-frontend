import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArticleBox from '../ArticleBox/ArticleBox';

function FourArticleBox() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/data/Article.json')
      .then(response => response.json())
      .then(result => setArticles(result));
  }, []);

  return (
    <ArticleWrap>
      {articles.map((data, i) => {
        return <ArticleBox data={data} key={i} />;
      })}
    </ArticleWrap>
  );
}

const ArticleWrap = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default FourArticleBox;
