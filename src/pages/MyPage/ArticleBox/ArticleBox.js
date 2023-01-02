import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ArticleBox({ data }) {
  return (
    <Articlebox>
      <Content to={`/article/${data.id}`}>
        <Title>{data.title}</Title>
        <Description>{data.content}</Description>
        <Description>by {data.authors}</Description>
      </Content>
      <Link to={`/article/${data.id}`}>
        {data.color ? (
          <Color color={data.color} />
        ) : (
          <ItemImg src={data.header_image} alt={`${data.title} 대표이미지`} />
        )}
      </Link>
    </Articlebox>
  );
}

const ItemImg = styled.img`
  width: 140px;
  height: 140px;
`;

const Color = styled.div`
  background-color: ${({ color }) => color};
  height: 150px;
  width: 150px;
  opacity: 0.73;
`;

const Articlebox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeef;
  margin: 20px 30px 0 0;
  padding: 0 20px 20px;
`;

const Content = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export default ArticleBox;
