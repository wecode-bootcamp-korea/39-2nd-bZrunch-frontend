// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper';
// import styled from 'styled-components';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const ColorSlide = () => {
//   const [selectColor, setSelectColor] = useState('');

//   const onClickColor = () => {
//     setSelectColor(COLOR_DATA.id);
//     console.log(selectColor);
//   };

//   // useEffect(() => {
//   //   fetch('http://10.58.52.136:3000/w', {
//   //     method: 'GET',
//   //     headers: {
//   //       'content-Type': 'application/json;charset=utf-8',
//   //     },
//   //   })
//   //     .then(response => response.json())
//   //     .then(result => {
//   //       setSelectColor(result);
//   //     });
//   // });

//   // const [writeContent, setWriteContent] = useState({
//   //   title: '',
//   //   content: '',
//   // });
//   // const getValue = e => {
//   //   const { name, value } = e.target;
//   //   setWriteContent({
//   //     ...writeContent,
//   //     [name]: value,
//   //   });
//   //   console.log({ ...writeContent, [name]: value });
//   // };
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//         onProgress={() => onClickColor()}
//       >
//         {COLOR_DATA.map(item => {
//           return (
//             <SwiperSlide key={item.id} itemID={item.id}>
//               <Color style={{ backgroundColor: `${item.color}` }}>
//                 <Text
//                   // type="text"
//                   placeholder="제목을 입력해주세요"
//                   // onChange={getValue}
//                   // name="title"
//                 ></Text>
//               </Color>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </>
//   );
// };

// const Color = styled.div`
//   height: 450px;
//   width: 100%;
//   position: relative;
// `;

// const Text = styled.input`
//   position: absolute;
//   transform: translate(-50%, 500%);
//   font-size: 34px;
//   border: none;
//   text-align: center;
//   outline: none;
//   background-color: transparent;
// `;

// export default ColorSlide;

// const COLOR_DATA = [
//   {
//     id: 1,
//     color: 'white',
//   },
//   {
//     id: 2,
//     color: '#f67065',
//   },
//   {
//     id: 3,
//     color: '#f8972e',
//   },
//   {
//     id: 4,
//     color: '#fabb12',
//   },
//   {
//     id: 5,
//     color: '#24b877',
//   },
//   {
//     id: 6,
//     color: '#00c3bd',
//   },
//   {
//     id: 7,
//     color: '#50a1c3',
//   },
//   {
//     id: 8,
//     color: '#7878bc',
//   },
//   {
//     id: 9,
//     color: '#536b82',
//   },
//   {
//     id: 10,
//     color: '#a87856',
//   },
//   {
//     id: 11,
//     color: '#555555',
//   },
// ];
