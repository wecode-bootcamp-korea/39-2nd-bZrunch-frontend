import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TopBtn = () => {
  const [isBtn, setIsBtn] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ShowBtn = () => {
      if (window.scrollY > 850) {
        setIsBtn(true);
      } else {
        setIsBtn(false);
      }
    };
    window.addEventListener('scroll', ShowBtn);

    return () => {
      window.removeEventListener('scroll', ShowBtn);
    };
  }, []);

  return isBtn && <Top onClick={scrollToTop}>Top ↑</Top>;
};

const Top = styled.button`
  position: sticky;
  bottom: 20px;
  left: 92%;
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.theme.lightGray};
  border-radius: 20px;
  font-size: 15px;
  background-color: transparent;
  color: gray;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
`;

export default TopBtn;
