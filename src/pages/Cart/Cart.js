import React from 'react';
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';

const Cart = () => {
  return (
    <WrapperContent>
      <HeadContent>
        <HeadTitle>SHOPPING CART</HeadTitle>
        <PurchaseBtn>구매</PurchaseBtn>
      </HeadContent>
      <CartMainWrapper>
        {CART_DATA.map(item => {
          return (
            <ItemWrapper>
              <ItemTextWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemText>{item.sub}</ItemText>
              </ItemTextWrapper>
              <ItemRight>
                <ItemImg src="images/Cart/cat.jpg" />
                <ItemPrice>{item.price}원</ItemPrice>
                <DeleteBtn />
              </ItemRight>
            </ItemWrapper>
          );
        })}
      </CartMainWrapper>
      <BottomWrapper>
        <BottomTitle>TOTAL</BottomTitle>
        <BottomItemPrice>원</BottomItemPrice>
      </BottomWrapper>
    </WrapperContent>
  );
};

const WrapperContent = styled.div`
  margin-top: 100px;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  margin: 0 auto;
`;

const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 100px;
  border-bottom: 1px solid ${props => props.theme.theme.moreLightGray};
`;

const HeadTitle = styled.div`
  font-size: 50px;
  letter-spacing: 3px;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
`;
const PurchaseBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid ${props => props.theme.theme.moreLightGray};
  background-color: ${props => props.theme.theme.white};
  border-radius: 15px;
  font-size: 14px;
  padding: 4px 10px;
  white-space: nowrap;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${props => props.theme.theme.lightGray};
`;

const CartMainWrapper = styled.div`
  margin-top: 30px;
  width: 1200px;
`;

const ItemWrapper = styled.div`
  padding: 30px;
  width: 1000px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.theme.moreLightGray};
`;

const ItemTextWrapper = styled.div`
  width: 680px;
  height: 100%;
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
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const DeleteBtn = styled(RiDeleteBinLine)`
  cursor: pointer;
  margin-left: 30px;
  width: 28px;
  height: 28px;
`;

const ItemImg = styled.img`
  width: 120px;
  height: 120px;
`;

const ItemPrice = styled.div`
  margin-left: 30px;
  font-size: 24px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
`;

const BottomWrapper = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.theme.moreLightGray};
  margin-top: 20px;
  width: 1000px;
  height: 120px;
  display: flex;
  justify-content: space-between;
`;

const BottomTitle = styled.div`
  font-size: 32px;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
`;

const BottomItemPrice = styled.div`
  font-size: 32px;
  font-family: 'Nanum Myeongjo', serif;
`;

export default Cart;

const CART_DATA = [
  {
    id: 0,
    title: '나는 이걸 살꺼야',
    sub: '이거이거이ㅓ기어기어ㅣ거이ㅓ기ㅓ이ㅓ기어기어기어기어ㅣㄱ어ㅣㅣㄱ',
    img: 'images/Cart/cat.jpg',
    price: '1000',
  },
  {
    id: 1,
    title: '이것도 ',
    sub: '이거이거이ㅓ기어기어ㅣ거이ㅓ기ㅓ이ㅓ기어기어기어기어ㅣㄱ어ㅣㅣㄱ',
    img: 'images/Cart/cat.jpg',
    price: '1000',
  },
  {
    id: 2,
    title: '이것도',
    sub: '이거이거이ㅓ기어기어ㅣ거이ㅓ기ㅓ이ㅓ기어기어기어기어ㅣㄱ어ㅣㅣㄱ',
    img: 'images/Cart/cat.jpg',
    price: '1000',
  },
];
