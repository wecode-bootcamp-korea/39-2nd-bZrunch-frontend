import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerFoot>
        <WrapInfo>
          <LeftArea>
            <LeftTitle>bZrunch</LeftTitle>
            <LeftText>You can make anything by writing.</LeftText>
            <LeftTextSub>C.S.Lewis</LeftTextSub>
          </LeftArea>
          <MiddleWrapper1>
            {LEFT_LI_DATA.map(item => {
              return <MiddleLi key={item.id}>{item.title}</MiddleLi>;
            })}
          </MiddleWrapper1>
          <MiddleWrapper2>
            {MIDDLE_LI.map(sample => {
              return <MiddleLi key={sample.id}>{sample.title}</MiddleLi>;
            })}
          </MiddleWrapper2>
          <RightWrapper>
            {RIGHT_LI.map(data => {
              return <RightLi key={data.id}>{data.title}</RightLi>;
            })}
          </RightWrapper>
        </WrapInfo>
      </InnerFoot>
      <BottomWrapper>
        <BottomLeft>@BZRUNCH</BottomLeft>
        <BottomRight href="https://github.com/wecode-bootcamp-korea/39-2nd-bZrunch-frontend">
          <Git />
        </BottomRight>
      </BottomWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  padding-top: 30px;
  background-color: #363636;
`;

const InnerFoot = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const WrapInfo = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const LeftArea = styled.div`
  padding-left: 90px;
  float: left;
  width: 350px;
`;

const LeftTitle = styled.div`
  color: white;
  font-family: 'Caveat', cursive;
  font-size: 40px;
  font-weight: bold;
`;

const LeftText = styled.div`
  margin-top: 15px;
  color: white;
  line-height: 30px;
  font-size: 20px;
  font-weight: lighter;
  font-family: Georgia, sans-serif;
`;

const LeftTextSub = styled.div`
  margin-top: 15px;
  color: gray;
  font-size: 20px;
  font-family: 'Caveat', cursive;
`;

const MiddleWrapper1 = styled.div`
  margin-left: 50px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MiddleWrapper2 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MiddleLi = styled.li`
  color: white;
  list-style: none;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;

const RightWrapper = styled.div`
  padding-right: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightLi = styled.li`
  color: white;
  list-style: none;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;

const BottomWrapper = styled.div`
  border-top: 0.5px solid lightgray;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding-left: 90px;
  padding-right: 90px;
`;

const BottomLeft = styled.div`
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  margin-top: 30px;
`;

const BottomRight = styled.a`
  margin-top: 30px;
`;

const Git = styled(AiFillGithub)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: white;
`;

export default Footer;

const LEFT_LI_DATA = [
  {
    id: 0,
    title: '????????? ????????????',
  },
  {
    id: 1,
    title: '????????????',
  },
  {
    id: 2,
    title: '?????? ?????? ????????????',
  },
  {
    id: 3,
    title: '????????????',
  },
  {
    id: 4,
    title: '????????????',
  },
];

const MIDDLE_LI = [
  {
    id: 0,
    title: '????????????',
  },
  {
    id: 1,
    title: '?????? ????????????',
  },
  {
    id: 2,
    title: '????????? ???????????? ????????????',
  },
  {
    id: 3,
    title: '????????? ????????????',
  },
  {
    id: 4,
    title: '????????????',
  },
];

const RIGHT_LI = [
  {
    id: 0,
    title: '??????????????? ????????????',
  },
  {
    id: 1,
    title: '???????????? ???????????? ??????',
  },
  {
    id: 2,
    title: '???????????? ?????????',
  },
  {
    id: 3,
    title: '??????????????? ???????????????',
  },
];
