import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <>
      <Inputall>
        <InputBox placeholder="검색어를 입력해 주세요." />
        <SearchIcon />
      </Inputall>
      <Contents>
        <ArticleList>
          글 검색 ><Articles>유자나무에게</Articles>
        </ArticleList>
        <WriterList>
          작가 검색 ><Writers>유자나무</Writers>
        </WriterList>
      </Contents>
    </>
  );
};

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
