import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlide = () => {
  const navigate = useNavigate();
  const [slideDatas, setSlideDatas] = useState([]);

  const goToArticle = id => {
    navigate(`/article/${id}`);
  };

  useEffect(() => {
    fetch('http://10.58.52.137:3000/main/list')
      .then(res => res.json())
      .then(data => setSlideDatas(data.result.writing));
  }, []);

  return (
    <AllSlide>
      <Slider {...settings}>
        {slideDatas.map(slidedata => {
          return (
            <Set key={slidedata.id} onClick={() => goToArticle(slidedata.id)}>
              <SlideText>
                <TextTitle>{slidedata.title}</TextTitle>
                <TextWriter>by. {slidedata.authors}</TextWriter>
              </SlideText>
              <SingleSlide
                src={slidedata.header_image}
                alt={`${slidedata.title}의 대표 이미지`}
              />
            </Set>
          );
        })}
      </Slider>
    </AllSlide>
  );
};

const settings = {
  className: 'slider variable-width',
  dots: true,
  arrows: true,
  infinite: true,
  speed: 900,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 2,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const AllSlide = styled.div`
  height: 450px;
  margin: 50px 0;

  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 0.5;
  }

  .slick-prev:before,
  .slick-next:before {
    height: 0;
    font-size: 70px;
    color: white;
    opacity: 0.3;
  }

  .slick-prev {
    left: 10px;
    z-index: 10;
  }
  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }

  .slick-next {
    right: 70px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }

  .slick-dots {
    bottom: -50px;
  }

  .slick-dots li {
    margin: -20px 15px;
  }

  .slick-dots li button:before {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gray;
    text-align: center;
    content: '';
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`;

const Set = styled.div`
  position: relative;
`;

const SingleSlide = styled.img`
  height: 450px;
  transition: all 0.3s ease-in-out;
  filter: brightness(80%);
  z-index: -10;

  &:hover {
    transform: scale(1.06);
  }
`;

const SlideText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  padding: 20px 50px;
  color: white;
  line-height: 50px;
  text-align: center;
  z-index: 1;
  cursor: pointer;

  &:hover + ${SingleSlide} {
    transform: scale(1.06);
  }
`;

const TextTitle = styled.div`
  font-size: 35px;
  font-family: 'Nanum Myeongjo', serif;
`;

const TextWriter = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`;

export default MainSlide;
