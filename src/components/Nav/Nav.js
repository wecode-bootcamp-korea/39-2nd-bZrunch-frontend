import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import LeftNav from './LeftNav';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBtn = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <LeftNav isOpen={isOpen} handleBtn={handleBtn} />
      <Icon>
        <HamburgerMenu onClick={handleBtn} />
        <Brunch>bZrunch</Brunch>
        <NavRight>
          <Login>시작하기</Login>
          <i className="fa-solid fa-magnifying-glass" />
        </NavRight>
      </Icon>
    </>
  );
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  background-color: white;
`;

const HamburgerMenu = styled(RxHamburgerMenu)`
  font-size: 30px;
  cursor: pointer;
`;

const Brunch = styled.div`
  display: inline;
  padding-left: 15px;
  font-family: 'Caveat', cursive;
  font-size: 25px;
`;

const Login = styled.button`
  padding: 7px 10px;
  border: 1px solid ${props => props.theme.theme.lightGray};
  border-radius: 20px;
  background-color: transparent;
  color: ${props => props.theme.theme.lightGray};
  font-size: 10px;
  cursor: pointer;
`;

const NavRight = styled.div`
  margin-left: auto;
  padding-right: 20px;

  .fa-magnifying-glass {
    padding-left: 15px;
    cursor: pointer;
  }
`;

export default Nav;
