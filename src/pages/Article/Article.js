import React from 'react';
import styled from 'styled-components';

const Article = () => {
  return (
    <>
      <Header>
        <Title>제목 고양이</Title> bnbn
        <Writer>
          by 책공장
          <Icon className="material-symbols-outlined">favorite</Icon>
        </Writer>
      </Header>
      <Body>
        <BodyContents>내용이닥</BodyContents>
      </Body>
      <Footer>
        <Contents>
          유주
          <Button>구독하기</Button>
          <Follower>구독자 100</Follower>
        </Contents>
        <Profile src="/images/background.jpg" />
      </Footer>
    </>
  );
};

const Header = styled.header`
  border-bottom: 1px solid black;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 45px;
  padding: 50px 0;
  width: 700px;
  position: fixed;
`;

const Writer = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 700px;
  position: fixed;
`;

const Icon = styled.span`
  margin-left: 20px;
  font-size: 30px;
`;

const BodyContents = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  width: 700px;
`;
const Body = styled.div`
  background-color: white;
  height: 500px;
  position: relative;
  z-index: 1;
`;

const Footer = styled.div`
  background-color: ${props => props.theme.theme.gray};
  position: relative;
  height: 800px;
  padding-top: 20px;
`;

const Profile = styled.img`
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 10px;
  position: absolute;
  right: 150px;
  top: -30px;
  z-index: 2;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 15px;
  color: ${props => props.theme.theme.mint};
  border: 1px solid ${props => props.theme.theme.mint};
  background-color: white;
  margin-left: 20px;
  cursor: pointer;
`;

const Contents = styled.div`
  margin: 30px auto;
  width: 700px;
`;

const Follower = styled.div`
  margin: 20px 0;
  font-size: 14px;
`;

export default Article;
