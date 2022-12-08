import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Article = () => {
  //article 내용 가져오기
  const [getArticle, setGetArticle] = useState({});
  const { writing_id } = useParams();
  const naviCart = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.52.137:3000/writings/${writing_id}`)
      .then(response => response.json())
      .then(result => setGetArticle(result.writing[0]));
  }, [writing_id]);

  const {
    title,
    writer,
    content,
    subscribers,
    author_id,
    likes,
    id,
    price,
    header_image,
    color,
  } = getArticle;
  console.log(getArticle);
  //추천글 mockdata 내용 가져오기
  const [getRecommend, setGetRecommend] = useState([]);

  useEffect(() => {
    fetch('/data/recommend.json')
      .then(response => response.json())
      .then(result => setGetRecommend(result));
  }, []);

  //작가 구독하기
  const [isSubscribe, setIsSubscribe] = useState(false);
  const handleSubscribe = () => {
    setIsSubscribe(prev => !prev);
    let copy = { ...getArticle };
    if (isSubscribe) {
      copy.subscribers = Number(subscribers) - 1;
      setGetArticle(copy);
    } else {
      copy.subscribers = Number(subscribers) + 1;
      setGetArticle(copy);
    }
  };

  //구독하기 정보 BE로 전달
  const subscribe = useEffect(() => {
    fetch(`http://10.58.52.137:3000/likes/authors/${author_id}`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    }).then(response => response.json());
  }, [isSubscribe, author_id]);

  //글 좋아요
  const [isActive, setIsActive] = useState(false);
  const handleLike = () => {
    setIsActive(prev => !prev);
    let copy = { ...getArticle };
    if (isActive) {
      copy.likes = Number(likes) - 1;
      setGetArticle(copy);
    } else {
      copy.likes = Number(likes) + 1;
      setGetArticle(copy);
    }
  };

  //글 좋아요 정보 BE로 전달
  const likeArticle = useEffect(() => {
    fetch(`http://10.58.52.137:3000/likes/writings/${id}`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    }).then(response => response.json());
  }, [isActive, id]);

  //장바구니로 데이터 보내기

  const sendItem = () => {
    fetch('http://10.58.52.137:3000/carts', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        writing_id: id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        naviCart('/cart');
      });
  };

  return (
    <>
      <Header>
        {color ? <Color color={color} /> : <BackImg src={header_image} />}
        <Title>{title}</Title>
        <Writer>
          by {writer}
          {isActive ? (
            <ClickedIcon
              className="material-symbols-outlined"
              onClick={(likeArticle, handleLike)}
            >
              favorite
            </ClickedIcon>
          ) : (
            <Icon
              className="material-symbols-outlined"
              onClick={(likeArticle, handleLike)}
            >
              favorite
            </Icon>
          )}
          <Likes>{likes}</Likes>
        </Writer>
      </Header>
      {price === 0 ? (
        <Body>
          <BodyContents>{content}</BodyContents>
        </Body>
      ) : (
        <Body>
          <Purchase>구매 요청</Purchase>
          <Buttonwrap>
            <BuyButton onClick={sendItem}>장바구니 담기</BuyButton>
            <BuyButton>결제하기</BuyButton>
          </Buttonwrap>
        </Body>
      )}
      <Footer>
        <Contents>
          {writer}
          {isSubscribe ? (
            <ClickedBtn onClick={(subscribe, handleSubscribe)}>
              구독중
            </ClickedBtn>
          ) : (
            <Button onClick={(subscribe, handleSubscribe)}>구독하기</Button>
          )}
          <Follower>구독자 {subscribers}</Follower>
        </Contents>
        <Profile src="/images/background.jpg" />
        <Recommend>
          {getRecommend.map(data => {
            return (
              <Box key={data.rectitle} to={`article/${data.id}`}>
                <Thumbnail src={data.img_src} />
                <RecTitle>{data.rectitle}</RecTitle>
                <RecContents>{data.reccontents}</RecContents>
                <RecContents>by {data.recwriter}</RecContents>
              </Box>
            );
          })}
        </Recommend>
      </Footer>
    </>
  );
};
const Color = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;

const Purchase = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 260px;
`;

const BackImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BuyLink = styled(Link)``;

const Buttonwrap = styled.div`
  text-align: center;
`;

const Thumbnail = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

const Box = styled(Link)`
  width: 300px;
  margin: 20px;
  color: black;
  text-decoration: none;
`;

const RecTitle = styled.h1`
  width: 100%;
  font-size: 25px;
  font-weight: 300;
  margin-top: 30px;
`;

const RecContents = styled.h1`
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  margin-top: 15px;
`;

const Recommend = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 80px;
  justify-content: space-around;
`;

const Header = styled.header`
  border-bottom: 1px solid black;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Nanum Myeongjo', serif;
  font-size: 45px;
  padding: 100px 0;
  width: 700px;
  position: fixed;
`;

const Writer = styled.p`
  font-size: 12px;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bolder;
  display: flex;
  align-items: center;
  width: 700px;
  position: fixed;
  padding: 30px 0;
`;

const Icon = styled(AiOutlineHeart)`
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;
`;

const ClickedIcon = styled(AiFillHeart)`
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;
  color: ${props => props.theme.theme.mint};
`;

const Likes = styled.span``;

const BodyContents = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0 auto;
  padding-top: 30px;
  width: 700px;
  font-size: 25px;
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
  height: 1000px;
  padding-top: 20px;
  @media only screen and (max-width: 1180px) {
    height: 1300px;
  }
  @media only screen and (max-width: 840px) {
    height: 2200px;
  }
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

const BuyButton = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 22.5px;
  margin: 0 20px;
  color: ${props => props.theme.theme.mint};
  border: 1px solid ${props => props.theme.theme.mint};
  background-color: white;
  cursor: pointer;
`;

const ClickedBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 15px;
  color: white;
  border: 1px solid ${props => props.theme.theme.mint};
  background-color: ${props => props.theme.theme.mint};
  margin-left: 20px;
  cursor: pointer;
`;

const Contents = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 28px;
  margin: 30px auto;
  width: 700px;
`;

const Follower = styled.div`
  margin: 20px 0;
  font-size: 14px;
`;

export default Article;
