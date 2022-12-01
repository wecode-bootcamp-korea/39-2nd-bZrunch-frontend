import React from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const KakaoLogin = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const KAKAO_CODE = location.search.split('=')[1];
  // console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  const KAKAO_CODE = searchParams.get('code');

  // http://10.58.52.185:3000/user/signin
  // http://10.58.52.229:3000/auth/signin
  // 카카오 인가코드 백엔드에게 전송
  fetch('http://10.58.52.185:3000/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ KAKAO_CODE: `${KAKAO_CODE}` }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.userInfo.token) {
        localStorage.setItem('token', data.userInfo.token);
        localStorage.setItem('name', data.userInfo.name);
        localStorage.setItem('profile_image', data.userInfo.profile_image);
        navigate('/');
      } else {
        alert('다시 시도해주세요!');
        navigate('/login');
      }
    });

  return;
};

export default KakaoLogin;
