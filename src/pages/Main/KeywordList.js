import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const KeywordList = () => {
  const navigate = useNavigate();
  const param = useParams();

  const goToCategory = () => {
    navigate(`/articleList/${param}`);
  };

  return (
    <CategoryList>
      {CATEGORY_DATAS.map(categorydata => {
        return (
          <Category key={categorydata.id} onClick={goToCategory}>
            {categorydata.category}
          </Category>
        );
      })}
    </CategoryList>
  );
};

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  margin: 20px auto 100px;
  width: 780px;
  text-align: center;
`;

const Category = styled.button`
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  background-color: white;
  color: gray;
  font-size: 14px;

  &:hover {
    border: 1px solid #00c1bb;
    color: #00c1bb;
    cursor: pointer;
  }
`;

const CATEGORY_DATAS = [
  { id: 1, category: '개발자' },
  { id: 2, category: '프론트엔드' },
  { id: 3, category: '백엔드' },
  { id: 4, category: '웹개발' },
  { id: 5, category: '위코드' },
  { id: 6, category: '자바스크립트' },
  { id: 7, category: '일상' },
  { id: 8, category: '카페' },
  { id: 9, category: '데이트' },
  { id: 10, category: '맛집' },
  { id: 11, category: '여행' },
  { id: 12, category: '취업' },
];

export default KeywordList;
