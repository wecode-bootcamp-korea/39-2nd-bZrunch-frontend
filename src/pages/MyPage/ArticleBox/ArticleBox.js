import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ArticleBox({ data }) {
  const style = {
    backgroundColor: data.color,
  };
  return (
    <Articlebox>
      <Content to={`/article/${data.id}`}>
        <Title>{data.title}</Title>
        <Description>{data.content}</Description>
        <Description>by {data.authors}</Description>
      </Content>
      {data.color ? (
        <Color style={style} />
      ) : (
        <Image src={data.header_image} alt="later" />
      )}
    </Articlebox>
  );
}

const Color = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
  margin: ;
`;

export default ArticleBox;
