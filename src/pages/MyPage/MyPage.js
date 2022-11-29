import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FourArticleBox from './FourArticleBox/FourArticleBox';

const MyPage = () => {
  return (
    <Mypage>
      <Header>
        <Profile src="/images/background.jpg" />
      </Header>
      <Main>
        <Contents>
          <Name>유자</Name>
          <Text>유자의 브런치입니다.</Text>
          <Container>
            <Followwrap>
              <Follow>구독자</Follow>
              <Follow>관심작가</Follow>
              <FollowNum>0</FollowNum>
              <FollowNum>1</FollowNum>
            </Followwrap>
            <Button>글쓰기</Button>
          </Container>
          <Likes to="/">
            <SubTitle>좋아요 한 글 ></SubTitle>
          </Likes>
          <ArticleBoxWrap>
            <FourArticleBox />
          </ArticleBoxWrap>
        </Contents>
      </Main>
    </Mypage>
  );
};
const Header = styled.header`
  background-color: ${props => props.theme.theme.gray};
  height: 300px;
  position: relative;
`;

const Profile = styled.img`
  position: absolute;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 10px;
  top: 240px;
  right: 170px;
`;

const Mypage = styled.div``;

const Main = styled.main``;

const Contents = styled.div`
  margin: 0 150px;
`;

const Name = styled.h1`
  margin-top: 30px;
  font-size: 26px;
  font-weight: 300;
`;

const Text = styled.div`
  font-size: 14px;
  margin: 10px 0;
  color: #acacac;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
`;

const Follow = styled.div`
  font-size: 14px;
  margin-right: 30px;
  color: #acacac;
  font-weight: 300;
`;

const FollowNum = styled.div`
  margin-top: 5px;
  color: #acacac;
  font-size: 20px;
`;

const Followwrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px 0;
  width: 170px;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 15px;
  color: ${props => props.theme.theme.mint};
  border: 1px solid ${props => props.theme.theme.mint};
  background-color: white;
`;

const SubTitle = styled.div`
  font-size: 14px;
  text-decoration: none;
  color: black;
  margin-top: 30px;
`;

const Likes = styled(Link)`
  text-decoration: none;
`;

const ArticleBoxWrap = styled.div``;

export default MyPage;
