import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArticleBox from '../ArticleBox/ArticleBox';

function FourArticleBox({ title, data }) {
  return (
    <AllWrap>
      <SubTitle>{title}</SubTitle>
      <ArticleWrap>
        {data.map((list, i) => {
          return <ArticleBox data={list} key={i} />;
        })}
      </ArticleWrap>
    </AllWrap>
  );
}
const AllWrap = styled.div`
  margin-top: 30px;
`;

const ArticleWrap = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SubTitle = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: black;
`;

export default FourArticleBox;
