import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlide = () => {
  const navigate = useNavigate();
  const param = useParams();
  const userId = param.user_id;
  const writingId = param.writing_id;

  console.log(param);

  const goToArticle = () => {
    navigate(`/article/writings/${userId}/${writingId}`);
  };

  return (
    <AllSlide>
      <Slider {...settings}>
        {SLIDE_DATAS.map(slidedata => {
          return (
            <Set key={slidedata.id} onClick={goToArticle}>
              <SlideText>
                <TextTitle>{slidedata.title}</TextTitle>
                <TextWriter>by. {slidedata.writer}</TextWriter>
              </SlideText>
              <SingleSlide
                src={slidedata.img}
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
    font-size: 70px;

    height: 0;

    opacity: 0.3;
    color: white;
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

const SLIDE_DATAS = [
  {
    id: 1,
    img: 'images/kimboyoon/슬라이드이미지1.jpg',
    writer: '김건우',
    title: '카카오에서 만나요',
  },
  {
    id: 2,
    img: 'images/kimboyoon/슬라이드이미지2.jpg',
    writer: '김보윤',
    title: '맨 땅에 개발자되기',
  },
  {
    id: 3,
    img: 'images/kimboyoon/슬라이드이미지3.jpg',
    writer: '이동근',
    title: '위코드에서 살아남는 법',
  },
  {
    id: 4,
    img: 'images/kimboyoon/슬라이드이미지4.jpg',
    writer: '멍멍',
    title: '내 인생의 첫 강아지',
  },
  {
    id: 5,
    img: 'images/kimboyoon/슬라이드이미지5.jpg',
    writer: '오현상',
    title: '실리콘밸리 취업하기',
  },
  {
    id: 6,
    img: 'images/kimboyoon/슬라이드이미지6.jpg',
    writer: '이유주',
    title: '다음 승진은 너차례야',
  },
  {
    id: 7,
    img: 'images/kimboyoon/슬라이드이미지7.jpg',
    writer: '여행자',
    title: '여행가고 싶다',
  },
  {
    id: 8,
    img: 'images/kimboyoon/슬라이드이미지8.jpg',
    writer: '갓지영',
    title: '코딩은 껌이지',
  },
];

export default MainSlide;
