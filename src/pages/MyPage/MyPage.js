import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../../config';
import styled from 'styled-components';
import FourArticleBox from './FourArticleBox/FourArticleBox';

const MyPage = () => {
  const [myInfo, setMyInfo] = useState([]);
  const [myLikes, setMyLikes] = useState([]);
  const [myWritings, setMyWritings] = useState([]);
  const [myPurchase, setMyPurchase] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(`${BASE_URL}/mypage`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setMyInfo(data.result[0]);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/mypage/mylikes`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setMyLikes(data.result);
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}0/mypage/mywritings`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        setMyWritings(result.result);
      });
  }, []);

  return (
    <Mypage>
      <Header>
        <Profile src={myInfo.profile_image} />
      </Header>
      <Main>
        <Contents>
          <Name>{myInfo.name}</Name>
          <Text>{myInfo.description}</Text>
          <Container>
            <FollowAll>
              <Followwrap to="/">
                <Follow>구독자</Follow>
                <FollowNum>{myInfo.구독자}</FollowNum>
              </Followwrap>
              <Followwrap to="/">
                <Follow>관심작가</Follow>
                <FollowNum>{myInfo.관심작가}</FollowNum>
              </Followwrap>
            </FollowAll>
            <LinkBtn to="/write">
              <Button>글쓰기</Button>
            </LinkBtn>
          </Container>
          <ArticleBoxWrap>
            <LinkBtn>
              <FourArticleBox title="내가 쓴 글 〉" data={myWritings} />
            </LinkBtn>
            <LinkBtn>
              <FourArticleBox title="좋아요 한 글 〉" data={myLikes} />
            </LinkBtn>
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

const Mypage = styled.div`
  margin-bottom: 300px;
`;

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

const Followwrap = styled(Link)`
  margin: 15px 0 25px;
  width: 80px;
  text-decoration: none;
`;

const FollowAll = styled.div`
  display: flex;
`;
const LinkBtn = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 15px;
  color: ${props => props.theme.theme.mint};
  border: 1px solid ${props => props.theme.theme.mint};
  background-color: white;
  cursor: pointer;
`;

const ArticleBoxWrap = styled.div`
  margin-top: 10px;
`;

export default MyPage;
