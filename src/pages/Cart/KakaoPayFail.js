import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const KakaoPayFail = () => {
  const navigate = useNavigate();
  const Name = localStorage.getItem('name');

  const goToMain = () => {
    navigate('/');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <Wrapper>
      <UserName>{Name} 님,</UserName>
      <Pay>
        결제에 실패했습니다. <br />
        한번 더 시도해주세요!
      </Pay>
      <Btns>
        <MainBtn onClick={goToMain}>홈으로 돌아가기</MainBtn>
        <MyPageBtn onClick={goToCart}>장바구니로 돌아가기</MyPageBtn>
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
  line-height: 70px;
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

export default KakaoPayFail;
