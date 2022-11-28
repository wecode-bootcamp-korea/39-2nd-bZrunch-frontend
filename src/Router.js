import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Article from "./pages/Article/Article";
import ArticleList from "./pages/ArticleList/ArticleList";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";
import Search from "./pages/Search/Search";
import Write from "./pages/Write/Write";


const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/article" element={<Article />} />
                <Route path="/articleList" element={<ArticleList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Main />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/search" element={<Search />} />
                <Route path="/write" element={<Write />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;