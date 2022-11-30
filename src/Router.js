import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Article from './pages/Article/Article';
import ArticleList from './pages/ArticleList/ArticleList';
import Cart from './pages/Cart/Cart';
import KakaoLogin from './pages/Login/KakaoLogin';
import KakaoPay from './pages/Cart/KakaoPay';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Search from './pages/Search/Search';
import Write from './pages/Write/Write';
import KakaoPayFail from './pages/Cart/KakaoPayFail';
import MyPageList from './pages/MyPage/MyPageList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/article/writings/:writing_id" element={<Article />} />
        <Route path="/articleList/:cate_id" element={<ArticleList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<KakaoLogin />} />
        <Route path="/" element={<Main />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/payment/approval" element={<KakaoPay />} />
        <Route path="/payment/cancel" element={<KakaoPayFail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/write" element={<Write />} />
        <Route path="/mywritings" element={<MyPageList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
