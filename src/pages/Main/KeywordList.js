import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const KeywordList = () => {
  const navigate = useNavigate();
  const [categoryDatas, setCategoryDatas] = useState([]);

  const goToCategory = id => {
    navigate(`/articleList/${id}`);
  };

  useEffect(() => {
    fetch('http://10.58.52.137:3000/main/list')
      .then(res => res.json())
      .then(data => setCategoryDatas(data.result.category));
  }, []);

  return (
    <CategoryList>
      {categoryDatas.map(categorydata => {
        return (
          <Category
            key={categorydata.id}
            onClick={() => goToCategory(categorydata.id)}
          >
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

export default KeywordList;
