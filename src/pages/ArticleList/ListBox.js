import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ListBox = ({ priceList }) => {
  const navigate = useNavigate();

  const goToArticle = id => {
    navigate(`/article/writings/${id}`);
  };

  return (
    <WrapContent>
      {priceList.map(data => {
        return (
          <ArticleLi key={data.id} onClick={() => goToArticle(data.id)}>
            <PostTitle>
              <TitleName>{data.title}</TitleName>
              <SubArticle>{data.content}</SubArticle>
              <SubContentSpan>
                <SpanText>댓글</SpanText>
                <SpanNum>{data.re}</SpanNum>
                <IconDot />
                <SpanNum>{data.time}</SpanNum>
                <SpanText>분전</SpanText>
                <IconDot />
                <SpanTextBy>by</SpanTextBy>
                <SpanText>{data.authors}</SpanText>
              </SubContentSpan>
            </PostTitle>
            <Image src={data.header_image} />
          </ArticleLi>
        );
      })}
    </WrapContent>
  );
};

const WrapContent = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  width: 940px;
  background-color: ${props => props.theme.theme.gray};
`;

const ArticleLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  margin-top: 10px;
  border-bottom: 1px solid ${props => props.theme.theme.darkGray};
  background-color: ${props => props.theme.theme.white};
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
  min-height: 180px;
  list-style: none;
  cursor: pointer;
`;

const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleName = styled.strong`
  margin-bottom: 20px;
  font-size: 23px;
  font-weight: 500;
  letter-spacing: -1px;
  white-space: nowrap;
`;

const SubArticle = styled.span`
  color: ${props => props.theme.theme.lightGray};
  font-size: 18px;
  line-height: 21px;
`;

const SubContentSpan = styled.span`
  color: ${props => props.theme.theme.lightGray};
  display: flex;
  font-size: 15px;
  overflow: hidden;
  margin-top: 55px;
`;

const SpanText = styled.span`
  margin-right: 5px;
`;

const SpanTextBy = styled.span`
  margin: 0 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
`;

const SpanNum = styled.span``;

const IconDot = styled.img`
  width: 2px;
  height: 2px;
  background-color: ${props => props.theme.theme.lightGray};
  margin: 5px;
  vertical-align: top;
  display: inline-block;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
`;

export default ListBox;

const ListData = [
  {
    id: 0,
    title: '정말어렵다',
    sub: '여기는 서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.',
    re: '0',
    time: '10',
    username: '김건우',
    img: '/images/ArticleList/cat.jpg',
  },
  {
    id: 1,
    title: '진짜로',
    sub: ' 화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!',
    re: '10',
    time: '20',
    username: '김건우',
    img: '/images/ArticleList/gom.jpeg',
  },
  {
    id: 2,
    title: '완전!',
    sub: '여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이 들어갑니다.',
    re: '30',
    time: '10',
    username: '김건우',
    img: '/images/ArticleList/cat.jpg',
  },
  {
    id: 3,
    title: '진짜로',
    sub: ' 화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!',
    re: '10',
    time: '20',
    username: '김건우',
    img: '/images/ArticleList/gom.jpeg',
  },
  {
    id: 4,
    title: '완전!',
    sub: '여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이 들어갑니다.',
    re: '30',
    time: '10',
    username: '김건우',
    img: '/images/ArticleList/cat.jpg',
  },
  {
    id: 5,
    title: '진짜로',
    sub: ' 화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!화이팅!!!',
    re: '10',
    time: '20',
    username: '김건우',
    img: '/images/ArticleList/gom.jpeg',
  },
];
