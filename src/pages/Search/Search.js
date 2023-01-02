import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../config';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const [getData, setGetData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  //검색에 맞는 데이터 받아오기
  useEffect(() => {
    searchParams.set('searchWord', searchWord);
    setSearchParams(searchParams);

    fetch(`${BASE_URL}/writings/search?${searchParams.toString()}`)
      .then(response => response.json())
      .then(data => setGetData(data.result));
  }, [searchParams, searchWord, setSearchParams]);
  return (
    <>
      <Inputall>
        <InputBox
          placeholder="검색어를 입력해 주세요."
          onChange={e => {
            setSearchWord(e.target.value);
          }}
          value={searchWord}
        />
        <SearchIcon />
      </Inputall>
      {searchWord ? (
        <Contents>
          <ArticleList>
            글 검색 〉
            {getData.slice(0, 6).map(article => {
              return (
                <LinkArticle
                  key={article.articleId}
                  to={`/article/${article.id}`}
                >
                  <Articles>{article.title}</Articles>
                </LinkArticle>
              );
            })}
          </ArticleList>
        </Contents>
      ) : (
        <Main>
          <Introduce>
            <Coder>개발</Coder>에 진심인 사람들
          </Introduce>
          <Team>
            <Wrap to="/">
              <Profile src="/images/Search/photo2.jpeg" />
              <Name>유자</Name>
              <Comment>겨울에는 따뜻한 유자차 한 잔</Comment>
            </Wrap>
            <Wrap to="/">
              <Profile src="/images/Search/hyunsang.png" />
              <Name>현상</Name>
              <Comment>먹은 만큼 성장하는 개발자 스토리텔러 입니다</Comment>
            </Wrap>
            <Wrap to="/">
              <Profile src="/images/Search/boyoon.png" />
              <Name>보보</Name>
              <Comment>매일 성장하는 개발자, 김보윤입니다.</Comment>
            </Wrap>
            <Wrap to="/">
              <Profile src="/images/Search/kunwoo.png" />
              <Name>건우</Name>
              <Comment>까탈스러운 판교 사는 냥반입니다.</Comment>
            </Wrap>
            <Wrap to="/">
              <Profile src="/images/Search/dongkeun.jpeg" />
              <Name>동그리</Name>
              <Comment>함께 성장하는 개발자 동그리입니다.</Comment>
            </Wrap>
          </Team>
        </Main>
      )}
    </>
  );
};
const Introduce = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const Coder = styled.span`
  color: ${props => props.theme.theme.mint};
`;

const Main = styled.div`
  margin-top: 80px;
  margin-bottom: 250px;
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, 50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0);
    }
  }
  animation: fadeInDown 2s;
`;

const Team = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 30px 100px;
`;

const Name = styled.span`
  font-weight: 300;
`;
const Comment = styled.span`
  width: 180px;
  font-size: 12px;
  font-weight: 300;
  margin-top: 5px;
`;

const Wrap = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
`;

const Profile = styled.img`
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 20px auto;
`;

const Inputall = styled.div`
  border-bottom: 1px solid black;
  width: 900px;
  position: relative;
  margin: 150px auto 20px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 30px;
  position: absolute;
  right: 0px;
`;

const InputBox = styled.input`
  border: none;
  font-size: 30px;
  font-weight: 200;
  padding-bottom: 5px;
  width: 850px;

  :focus {
    outline: none;
  }
`;

const Contents = styled.div`
  width: 900px;
  margin: 10px auto;
  display: flex;
  font-size: 14px;
  color: #959595;
  margin-bottom: 450px;
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, 50%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  animation: fadeInDown 3s;
`;

const ArticleList = styled.div`
  flex: 3;
`;

const Articles = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: black;
  font-weight: 300;
`;

const LinkArticle = styled(Link)`
  text-decoration: none;
`;

const WriterList = styled.div`
  flex: 1;
`;

const Writers = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: black;
  font-weight: 300;
`;

export default Search;
