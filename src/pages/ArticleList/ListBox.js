import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ListBox = ({ priceList }) => {
  const navigate = useNavigate();

  const goToArticle = id => {
    navigate(`/article/${id}`);
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
                <SpanTextBy>by</SpanTextBy>
                <SpanText>{data.authors}</SpanText>
              </SubContentSpan>
            </PostTitle>
            {data.color ? (
              <Color color={data.color} />
            ) : (
              <ItemImg
                src={data.header_image}
                alt={`${data.title} 대표이미지`}
              />
            )}
          </ArticleLi>
        );
      })}
    </WrapContent>
  );
};

const Color = styled.div`
  background-color: ${({ color }) => color};
  height: 150px;
  width: 150px;
  opacity: 0.73;
`;

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
  display: flex;
  margin-top: 55px;
  color: ${props => props.theme.theme.lightGray};
  font-size: 15px;
  overflow: hidden;
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
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 5px;
  background-color: ${props => props.theme.theme.lightGray};
  vertical-align: top;
`;

const ItemImg = styled.img`
  width: 140px;
  height: 140px;
`;

export default ListBox;
