import React from 'react';
import styled from 'styled-components';
import MainSlide from './MainSlide';
import KeywordList from './KeywordList';
import Writers from './Writers';

const Main = () => {
  return (
    <>
      <Header>
        글이 작품이 되는 공간, 브Z런치
        <Article>
          브Z런치에 담긴 아름다운 작품을 감상해보세요.
          <br />
          그리고 다시 꺼내 보세요.
          <br />
          서랍 속 간직하고 있는 글과 감성을.
        </Article>
      </Header>
      <MainSlide />

      <Keyword>BZRUNCH KEYWORD</Keyword>
      <KeywordTitle>키워드로 분류된 다양한 글모음</KeywordTitle>
      <KeywordList />

      <Writers Keyword={Keyword} KeywordTitle={KeywordTitle} />
    </>
  );
};

const Header = styled.header`
  margin: 60px 0 0 25%;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 40px;
`;

const Article = styled.div`
  margin-top: 15px;
  color: gray;
  font-size: 30px;
  line-height: 50px;
`;

const Keyword = styled.div`
  padding-top: 130px;
  text-align: center;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 4px;
`;

const KeywordTitle = styled.div`
  padding: 20px 0 40px;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
`;

export default Main;
