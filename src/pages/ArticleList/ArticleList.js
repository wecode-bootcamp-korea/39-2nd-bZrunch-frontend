import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ListBox from './ListBox';

const ArticleList = () => {
  const [priceList, setPriceList] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const { cate_id } = useParams();

  const handleBtn = id => {
    setSelectedId(id);

    if (id !== 0) {
      searchParams.set('price', BUTTON_DATA[id].price);
    } else {
      searchParams.delete('price');
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.137:3000/writings?cate_id=${cate_id}&${searchParams.toString()}`
    )
      .then(res => res.json())
      .then(data => setPriceList(data.result));
  }, [searchParams]);

  return (
    <Wrapper>
      <Header>
        <HeaderFont>{TITLE_LIST[cate_id - 1]}</HeaderFont>
        <HeaderBtnWrapper>
          {BUTTON_DATA.map(item => {
            return (
              <HeaderButton
                key={item.id}
                id={item.id}
                selectedId={selectedId}
                onClick={() => {
                  handleBtn(item.id);
                }}
              >
                {item.title}
              </HeaderButton>
            );
          })}
        </HeaderBtnWrapper>
      </Header>
      <ListMain>
        <ListBox priceList={priceList} />
      </ListMain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.theme.darkGray};
`;

const HeaderFont = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 40px;
  width: 940px;
  color: ${props => props.theme.theme.black};
  font-size: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
`;

const HeaderBtnWrapper = styled.div`
  margin-bottom: 20px;
`;

const HeaderButton = styled.button`
  margin: 0 10px 10px 0;
  padding: 4px 10px;
  border: 1px solid
    ${({ id, selectedId }) => (id === selectedId ? '#00c1bb' : 'gray')};
  border-radius: 15px;
  white-space: nowrap;
  color: ${({ id, selectedId }) => (id === selectedId ? '#00c1bb' : 'gray')};
  font-size: 14px;
  background-color: ${props => props.theme.theme.white};
  cursor: pointer;
`;

const ListMain = styled.div`
  margin-bottom: 20px;
  padding-bottom: 40px;
  background-color: ${props => props.theme.theme.gray};
`;

export default ArticleList;

const BUTTON_DATA = [
  {
    id: 0,
    title: '전체',
    price: 0,
  },
  {
    id: 1,
    title: '무료',
    price: 0,
  },
  {
    id: 2,
    title: '유료',
    price: 1000,
  },
];

const TITLE_LIST = [
  '개발자',
  '프론트엔드',
  '백엔드',
  '웹개발',
  '위코드',
  '자바스크립트',
  '일상',
  '카페',
  '데이트',
  '맛집',
  '여행',
  '취업',
];
