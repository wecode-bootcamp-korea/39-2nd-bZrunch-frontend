import React from 'react';
import styled from 'styled-components';
import TopBtn from '../../components/TopBtn/TopBtn';

const Writers = props => {
  const { Keyword, KeywordTitle } = props;

  return (
    <SubSection>
      <Keyword>BZRUNCH WRITERS</Keyword>
      <KeywordTitle>브Z런치 추천작가</KeywordTitle>

      <WritersList>
        {WRITER_DATAS.map(writerdata => {
          return (
            <Writer key={writerdata.id}>
              <WriterImg
                src={writerdata.writerImg}
                alt={`${writerdata.name}님의 프로필이미지`}
              />
              <WriterName>{writerdata.name}</WriterName>
              <WriterText>{writerdata.content}</WriterText>
              <WriterCategory>
                <CategoryBtn>개발자</CategoryBtn>
                <CategoryBtn>{writerdata.category}</CategoryBtn>
              </WriterCategory>
            </Writer>
          );
        })}
      </WritersList>

      <TopBtn />
    </SubSection>
  );
};

const SubSection = styled.div`
  padding-bottom: 50px;
  background-color: #fafafa;
`;

const WritersList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px 20px;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-bottom: 100px;
  margin: 0 auto;
`;

const Writer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 450px;
  padding: 46px 40px;
  margin: 0 auto;
  background-color: white;
`;

const WriterImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const WriterName = styled.strong`
  padding: 17px 12px 0;
  font-size: 20px;
  font-family: 'Nanum Myeongjo', serif;
  line-height: 28px;
`;

const WriterText = styled.div`
  height: 100px;
  margin-top: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 30px;
`;

const WriterCategory = styled.div`
  margin-top: 20px;
`;

const CategoryBtn = styled.button`
  margin: 5px;
  padding: 7px;
  border: 1px solid #ddd;
  border-radius: 20px;
  color: gray;
  background-color: transparent;
`;

const WRITER_DATAS = [
  {
    id: 1,
    writerImg: '/images/kimboyoon/kunwoo.png',
    name: '김건우',
    content: '안녕하세요. 까탈스러운 판교 사는 냥반입니다.',
    category: '풀스택',
  },
  {
    id: 2,
    writerImg: '/images/kimboyoon/boyoon.jpg',
    name: '김보윤',
    content: '안녕하세요. 기록용으로 소소하게 글을 쓰고 있어요.',
    category: '프론트엔드',
  },
  {
    id: 3,
    writerImg: '/images/kimboyoon/lee.jpeg',
    name: '이유주',
    content: '안녕하세요. 프론트엔드 개발자 이유주입니다..비움 작가 입니다.',
    category: '프론트엔드',
  },
  {
    id: 4,
    writerImg: '/images/kimboyoon/oh.jpg',
    name: '오현상',
    content: '먹은 만큼 성장하는 개발자 스토리텔러 입니다',
    category: '벡엔드',
  },
  {
    id: 5,
    writerImg: '/images/kimboyoon/dong.jpg',
    name: '이동근',
    content: '안녕하세요. 함께 성장하는 개발자 동그리입니다.',
    category: '백엔드',
  },
  {
    id: 6,
    writerImg:
      'https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside',
    name: '위코드',
    content: '위코드39기 화이팅!',
    category: '부트캠프',
  },
];

export default Writers;
