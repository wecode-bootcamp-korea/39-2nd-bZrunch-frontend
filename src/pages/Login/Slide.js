import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styled from 'styled-components';

const Slide = () => {
  return (
    <LoginSlide>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {LOGIN_SLIDE_DATAS.map(loginslidedata => {
          return (
            <SwiperSlide key={loginslidedata.id}>
              <img alt="브지런치로그인이미지" src={loginslidedata.img} />
              <div>
                <p>{loginslidedata.title}</p>
                <p>{loginslidedata.content}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </LoginSlide>
  );
};

const LoginSlide = styled.div`
  width: 50%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100px;
    height: 45vh;
    background: #fff;
    font-size: 18px;
    text-align: center;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 75%;
    object-fit: cover;
  }

  .swiper-slide p {
    margin-top: 15px;
    color: gray;
    font-size: 15px;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;

    .swiper-button-prev,
    .swiper-button-next {
      color: #e6e6e6;
    }
    .swiper-pagination {
      .swiper-pagination-bullet-active {
        --swiper-theme-color: dimgray;
      }
    }
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 0.3s opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    bottom: 0;
  }
`;

const LOGIN_SLIDE_DATAS = [
  {
    id: 1,
    img: 'https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-01.png',
    title: '브런치 작가로 데뷔하세요.',
    content: '진솔한 에세이부터 업계 지식까지',
  },
  {
    id: 2,
    img: 'https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-02.png',
    title: '브런치로 제안받는 새로운 기회',
    content: '당신에게 영감을 주는 작품을 추천합니다.',
  },
  {
    id: 3,
    img: 'https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-03.png',
    title: '작가를 구독하고, 새 글을 받아보세요',
    content: '당신에게 영감을 주는 작품을 추천합니다.',
  },
];

export default Slide;
