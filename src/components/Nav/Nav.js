import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import LeftNav from './LeftNav';

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem('token');

  const handleBtn = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <LeftNav isOpen={isOpen} handleBtn={handleBtn} />
      <Icon>
        <HamburgerMenu onClick={handleBtn} />
        <Brunch to="/">bZrunch</Brunch>
        <NavRight>
          {token ? (
            <LoginLink to="/write">글쓰기</LoginLink>
          ) : (
            <LoginLink to="/login">시작하기</LoginLink>
          )}

          <SearchIcon
            onClick={() => {
              navigate('/search');
            }}
          />
        </NavRight>
      </Icon>
    </>
  );
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  background-color: white;
  opacity: 0.9;
  z-index: 9;
`;

const HamburgerMenu = styled(RxHamburgerMenu)`
  font-size: 30px;
  cursor: pointer;
`;

const Brunch = styled(Link)`
  display: inline;
  padding-left: 15px;
  font-size: 25px;
  font-family: 'Caveat', cursive;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 20px;
`;

const LoginLink = styled(Link)`
  padding: 7px 10px;
  border: 1px solid ${props => props.theme.theme.lightGray};
  border-radius: 20px;
  font-size: 10px;
  background-color: transparent;
  color: ${props => props.theme.theme.lightGray};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.theme.mint};
    border-color: ${props => props.theme.theme.mint};
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin: 0 15px;
  color: ${props => props.theme.theme.black};
  font-size: 25px;
  cursor: pointer;
`;

export default Nav;
