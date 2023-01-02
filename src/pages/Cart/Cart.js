import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config';
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';

const Cart = () => {
  const [cartDatas, setCartDatas] = useState([]);
  const token = localStorage.getItem('token');

  const getCartData = () => {
    fetch(`${BASE_URL}/carts`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setCartDatas(data.result));
  };

  const totalPrice = cartDatas
    .map(cartData => cartData.price)
    .reduce((a, b) => a + b, 0);

  // 개별 삭제버튼
  const deleteAriticle = id => {
    fetch(`${BASE_URL}/carts`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({ cart_id: id }),
    }).then(res => {
      if (res.status === 200) {
        getCartData();
      }
    });
  };

  // 카카오페이 결제
  const APP_ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;

  const goToPay = () => {
    fetch('https://kapi.kakao.com/v1/payment/ready', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `KakaoAK ${APP_ADMIN_KEY}`,
      },
      body: new URLSearchParams({
        cid: 'TC0ONETIME',
        partner_order_id: 'partner_order_id',
        partner_user_id: 'partner_user_id',
        item_name: 'article',
        quantity: cartDatas.length,
        total_amount: totalPrice,
        tax_free_amount: totalPrice,
        approval_url: 'http://localhost:3000/payment/approval',
        cancel_url: 'http://localhost:3000/payment/cancel',
        fail_url: 'http://localhost:3000/payment/cancel',
      }),
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem('tid', result.tid);
        window.location.href = result.next_redirect_pc_url;
      });
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <WrapperContent>
      <HeadContent>
        <HeadTitle>SHOPPING CART</HeadTitle>
      </HeadContent>
      <Main>
        {cartDatas.length === 0 ? (
          <ZeroContent>장바구니가 비었습니다!</ZeroContent>
        ) : (
          <CartMainWrapper>
            {cartDatas.length &&
              cartDatas.map(cartData => {
                const {
                  id,
                  title,
                  authors,
                  content,
                  header_image,
                  price,
                  color,
                } = cartData;

                return (
                  <ItemWrapper key={id}>
                    <ItemTextWrapper>
                      <ItemTitle>{title}</ItemTitle>
                      <ItemText>{authors}</ItemText>
                      <ItemText>{content}</ItemText>
                    </ItemTextWrapper>
                    {color ? (
                      <Color color={color} />
                    ) : (
                      <ItemImg src={header_image} alt={`${title} 대표이미지`} />
                    )}
                    <ItemRight>
                      <ItemPrice>{Number(price).toLocaleString()}원</ItemPrice>
                      <DeleteBtn onClick={() => deleteAriticle(id)} />
                    </ItemRight>
                  </ItemWrapper>
                );
              })}
          </CartMainWrapper>
        )}
        <SideWrapper>
          <Order>
            <ArticlePrice>
              <Title>상품금액</Title>
              <Price>{totalPrice.toLocaleString()}원</Price>
            </ArticlePrice>
            <DiscountPrice>
              <Title>할인금액</Title>
              <Price>- 0 원</Price>
            </DiscountPrice>
          </Order>

          <Total>
            <TotalTitle>결제 예정 금액</TotalTitle>
            <Totalprice> {totalPrice.toLocaleString()}원</Totalprice>
          </Total>
          <PayBtn onClick={goToPay}>결제하기</PayBtn>
          <Agree>
            회원 본인은 주문내용을 확인했으며, 구매조건 및 개인정보취급방침과
            결제에 동의합니다.
          </Agree>
        </SideWrapper>
      </Main>
    </WrapperContent>
  );
};

const ZeroContent = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 60px;
  margin-top: 100px;
  margin-left: 100px;
  color: ${props => props.theme.theme.mint};
`;

const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 90%;
  margin: 80px auto 0;
  margin-bottom: 400px;
`;

const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${props => props.theme.theme.moreLightGray};
`;

const HeadTitle = styled.div`
  font-size: 35px;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  letter-spacing: 3px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartMainWrapper = styled.div`
  width: 70%;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 200px;
  border-bottom: 1px solid ${props => props.theme.theme.moreLightGray};
`;

const ItemTextWrapper = styled.div`
  width: 70%;
`;

const ItemTitle = styled.div`
  color: ${props => props.theme.theme.lightGray};
  font-size: 24px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
`;

const ItemText = styled.div`
  margin-top: 20px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;
`;

const DeleteBtn = styled(RiDeleteBinLine)`
  margin-left: 30px;
  width: 25px;
  height: 25px;
  color: ${props => props.theme.theme.lightGray};
  cursor: pointer;
`;

const ItemImg = styled.img`
  width: 140px;
  height: 140px;
`;

const Color = styled.div`
  background-color: ${({ color }) => color};
`;

const ItemPrice = styled.div`
  margin-left: 30px;
  font-size: 24px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 100px;
  width: 25%;
  height: 350px;
  padding: 30px;
  margin-top: 40px;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #e9ecef;
`;

const Order = styled.div`
  border-bottom: 1px solid gray;
  font-family: 'Noto Sans KR', sans-serif;
`;

const ArticlePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 15px;
`;

const Price = styled.div`
  font-size: 15px;
`;

const DiscountPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: red;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 15px;
  font-weight: bold;
`;

const TotalTitle = styled.div``;

const Totalprice = styled.div``;

const PayBtn = styled.button`
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #5055b1;
  border-radius: 10px;
  background-color: #5055b1;
  color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const Agree = styled.div`
  margin-top: 20px;
  color: #abb0b5;
  font-size: 12px;
  line-height: 1.3;
`;

export default Cart;
