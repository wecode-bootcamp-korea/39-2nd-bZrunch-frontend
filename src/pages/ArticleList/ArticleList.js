import React, { useState } from 'react';
import styled from 'styled-components';
import ListBox from './ListBox';

const ArticleList = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderFont>여기는 카테고리입니다</HeaderFont>
        <HeaderBtnWrapper>
          {buttonData.map(item => {
            return <HeaderButton id={item.id}>{item.title}</HeaderButton>;
          })}
        </HeaderBtnWrapper>
      </Header>
      <ListMain>
        <ListBox />
      </ListMain>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.theme.darkGray};
`;

const HeaderFont = styled.div`
  color: ${props => props.theme.theme.black};
  font-size: 30px;
  margin: 0 auto;
  width: 940px;
  position: relative;
  text-align: center;
  line-height: 30px;
  padding: 40px;
`;

const HeaderBtnWrapper = styled.div`
  margin-bottom: 20px;
`;

const HeaderButton = styled.button`
  border: 1px solid ${props => props.theme.theme.moreLightGray};
  background-color: ${props => props.theme.theme.white};
  border-radius: 15px;
  font-size: 14px;
  padding: 4px 10px;
  white-space: nowrap;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${props => props.theme.theme.lightGray};
`;

const ListMain = styled.div`
  background-color: ${props => props.theme.theme.gray};
  margin-bottom: 20px;
  padding-bottom: 40px;
`;

export default ArticleList;

const buttonData = [
  {
    id: 0,
    title: '전체',
  },
  {
    id: 1,
    title: '무료',
  },
  {
    id: 2,
    title: '유료',
  },
];
