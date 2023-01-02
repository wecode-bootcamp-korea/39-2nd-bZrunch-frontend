import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import styled from 'styled-components';

const KakaoPay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const PGCODE = location.search.split('=')[1];
  const TID = localStorage.getItem('tid');
  const Name = localStorage.getItem('name');
  const token = localStorage.getItem('token');

  const goToMain = () => {
    navigate('/');
  };

  const goToMyPage = () => {
    navigate('/mypage');
  };

  fetch(`${BASE_URL}/payment/approval`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify({
      pg_token: PGCODE,
      tid: TID,
    }),
  });

  return (
    <Wrapper>
      <UserName>{Name} 님,</UserName>
      <Pay>결제가 완료되었습니다!</Pay>
      <Btns>
        <MainBtn onClick={goToMain}>홈으로 돌아가기</MainBtn>
        <MyPageBtn onClick={goToMyPage}>마이페이지로 이동</MyPageBtn>
      </Btns>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90vh;
  width: 80%;
  margin: 300px auto 0;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
`;

const UserName = styled.div`
  font-size: 20px;
`;

const Pay = styled.div`
  margin-top: 30px;
  font-size: 50px;
`;

const Btns = styled.div`
  margin-top: 50px;
`;

const MainBtn = styled.button`
  margin-right: 20px;
  padding: 15px 20px;
  border: 1px solid ${props => props.theme.theme.mint};
  border-radius: 7px;
  background-color: ${props => props.theme.theme.mint};
  color: white;
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  cursor: pointer;
`;

const MyPageBtn = styled.button`
  padding: 15px 20px;
  border: 1px solid ${props => props.theme.theme.mint};
  border-radius: 7px;
  background-color: white;
  color: ${props => props.theme.theme.mint};
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  cursor: pointer;
`;

export default KakaoPay;
