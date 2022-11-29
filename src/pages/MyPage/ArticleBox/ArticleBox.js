import React from 'react';
import styled from 'styled-components';

function ArticleBox({ data }) {
  return (
    <Articlebox>
      <Content>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Description>by {data.writer}</Description>
      </Content>
      <Image alt="later" />
    </Articlebox>
  );
}

const Articlebox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeef;
  margin: 20px 30px 0 0;
`;

const Content = styled.div``;

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
  width: 50px;
  height: 50px;
`;

export default ArticleBox;
