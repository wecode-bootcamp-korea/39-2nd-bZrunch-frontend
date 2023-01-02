import React, { useRef, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LeftNav = ({ isOpen, handleBtn }) => {
  const navigate = useNavigate();
  const sideRef = useRef(null);
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const profile_image = localStorage.getItem('profile_image');

  const clickOutside = e => {
    if (isOpen && !sideRef.current.contains(e.target)) {
      handleBtn();
    }
  };

  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('profile_image');
    localStorage.removeItem('tid');
    navigate('/');
    alert('로그아웃 되었습니다!');
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });

  return (
    <Aside isOpen={isOpen} ref={sideRef}>
      <Header>
        {token ? (
          <>
            <ProfileImg src={profile_image} />
            <NameTitle>
              <Name>{name}</Name>
              <NameWriter>작가님</NameWriter>
            </NameTitle>
            <LoginLink to="/write">글쓰기</LoginLink>
          </>
        ) : (
          <>
            <Logo to="/">bZrunch</Logo>
            <Text>
              <Saying>You can make anything by writing</Saying>
              <Author>-C.S.Lewis-</Author>
            </Text>
            <LoginLink to="/login">브Z런치 시작하기</LoginLink>
          </>
        )}
      </Header>
      <Main>
        <HomeLink to="/">브Z런치 홈</HomeLink>
        <NowLink to="/articleList/1">브Z런치 나우</NowLink>
        {token ? (
          <>
            <MyPageLink to="/myPage">마이 페이지</MyPageLink>
            <CartLink to="/cart">장바구니</CartLink>
            <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
          </>
        ) : (
          <Forget>계정을 잊어버리셨나요?</Forget>
        )}
      </Main>
    </Aside>
  );
};

const Aside = styled.div`
  position: fixed;
  top: 0;
  width: 250px;
  height: 100%;
  left: ${props => (props.isOpen ? 0 : '-250px')};
  border: 1px solid ${props => props.theme.theme.darkGray};
  background-color: white;
  transition: 0.5s ease;
  z-index: 10;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.theme.darkGray};
  background-color: ${props => props.theme.theme.gray};
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 50px;
  border-radius: 50%;
`;

const Logo = styled(Link)`
  padding-top: 50px;
  font-size: 30px;
  font-family: 'Caveat', cursive;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

const Text = styled.div`
  margin-top: 30px;
  color: gray;
  font-family: 'Georgia', serif;
  text-align: center;
`;

const NameTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Name = styled.div`
  margin-right: 5px;
  color: ${props => props.theme.theme.black};
  font-weight: bold;
`;

const NameWriter = styled.span`
  color: ${props => props.theme.theme.dartGray};
  font-size: 12px;
`;

const Saying = styled.div`
  width: 70%;
  margin: 0 auto 20px;
  font-size: 14px;
  line-height: 15px;
`;

const Author = styled.div`
  margin-bottom: 30px;
  font-size: 12px;
`;

const LoginLink = styled(Link)`
  margin-bottom: 30px;
  padding: 7px 10px;
  border: 1px solid ${props => props.theme.theme.mint};
  border-radius: 20px;
  background-color: white;
  color: ${props => props.theme.theme.mint};
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  background-color: white;
  color: gray;
  font-size: 15px;
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: -0.5px;
`;

const HomeLink = styled(Link)`
  padding-bottom: 40px;
  text-decoration: none;
  color: gray;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${props => props.theme.theme.mint};
    cursor: pointer;
  }

  &:hover:before {
    content: '──';
  }

  &:hover:after {
    content: '──';
  }
`;

const NowLink = styled(Link)`
  padding-bottom: 40px;
  text-decoration: none;
  color: gray;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${props => props.theme.theme.mint};
    cursor: pointer;
  }

  &:hover:before {
    content: '──';
  }

  &:hover:after {
    content: '──';
  }
`;

const MyPageLink = styled(Link)`
  padding-bottom: 40px;
  color: gray;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${props => props.theme.theme.mint};
    cursor: pointer;
  }

  &:hover:before {
    content: '──';
  }

  &:hover:after {
    content: '──';
  }
`;

const CartLink = styled(Link)`
  color: gray;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${props => props.theme.theme.mint};
    cursor: pointer;
  }

  &:hover:before {
    content: '──';
  }

  &:hover:after {
    content: '──';
  }
`;

const LogoutBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-bottom: 20px;
  padding: 5px 10px;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 20px;
  background-color: white;
  color: gray;
  font-size: 10px;
  cursor: pointer;
`;

const Forget = styled.div`
  position: absolute;
  display: inline;
  bottom: 50px;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  color: gray;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
`;

export default LeftNav;
