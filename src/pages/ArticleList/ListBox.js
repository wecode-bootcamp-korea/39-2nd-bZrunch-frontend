import React from 'react';
import styled from 'styled-components';

const ListBox = () => {
  return (
    <WrapContent>
      {ListData.map(data => {
        return (
          <ArticleLi>
            <LinkPost>
              <PostTitle>
                <TitleName>{data.title}</TitleName>
                <SubContentWrap>
                  <SubArticle>{data.sub}</SubArticle>
                </SubContentWrap>
                <SubContentSpan>
                  <SpanText>댓글</SpanText>
                  <SpanNum>{data.re}</SpanNum>
                  <IconDot />
                  <SpanNum>{data.time}</SpanNum>
                  <SpanText>분전</SpanText>
                  <IconDot />
                  <SpanTextBy>by</SpanTextBy>
                  <SpanText>{data.username}</SpanText>
                </SubContentSpan>
              </PostTitle>
              <Thumb>
                <Image src={data.img} />
              </Thumb>
            </LinkPost>
          </ArticleLi>
        );
      })}
    </WrapContent>
  );
};

const WrapContent = styled.div`
  padding-top: 20px;
  background-color: ${props => props.theme.theme.gray};
  margin: 0 auto;
  width: 940px;
`;

const ArticleLi = styled.li`
  list-style: none;
  background-color: ${props => props.theme.theme.white};
  border-bottom: 1px solid ${props => props.theme.theme.darkGray};
  box-sizing: border-box;
  min-height: 180px;
  padding: 30px 20px;
  position: relative;
  margin-top: 10px;
`;

const LinkPost = styled.div`
  clear: both;
  display: block;
  overflow: hidden;
`;

const PostTitle = styled.div`
  width: 700px;
`;

const TitleName = styled.strong`
  font-size: 20px;
  font-weight: normal;
  letter-spacing: -1px;
  white-space: nowrap;
`;

const SubContentWrap = styled.div`
  width: 700px;
  max-height: 42px;
  padding-top: 20px;
`;

const SubArticle = styled.span`
  color: ${props => props.theme.theme.lightGray};
  font-size: 14px;
  line-height: 21px;
`;

const SubContentSpan = styled.span`
  color: ${props => props.theme.theme.lightGray};
  display: block;
  font-size: 12px;
  overflow: hidden;
  padding-top: 20px;
  margin-top: 35px;
`;

const SpanText = styled.span`
  margin-right: 5px;
`;

const SpanTextBy = styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  margin-right: 2px;
  width: 15px;
  height: 15px;
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

const Thumb = styled.div`
  overflow: hidden;
  position: absolute;
  right: 20px;
  top: 30px;
  width: 120px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

export default ListBox;

const ListData = [
  {
    id: 0,
    title: '정말어렵다',
    sub: '여기는 서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이 들어갑니다.',
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
    sub: '여기는 서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이 들어갑니다.',
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
    sub: '여기는 서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이들어갑니다.여기는 서브 내용이 들어갑니다.여기는 서브내용이 들어갑니다.여기는 서브 내용이 들어갑니다.여기는서브 내용이 들어갑니다.여기는 서브 내용이 들어갑니다.',
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
