import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CiImageOn } from 'react-icons/ci';
import { VscSymbolColor } from 'react-icons/vsc';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import AWS from 'aws-sdk';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Write = () => {
  const [isColor, setIsColor] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [writeContent, setWriteContent] = useState({
    title: '',
    content: '',
  });
  const [isPrice, setIsPrice] = useState('');
  const [category, setCategory] = useState({});
  const [selectedId, setSelectedId] = useState(0);
  const [selectColor, setSelectColor] = useState('');
  const [colorId, setColorId] = useState('');
  const navi = useNavigate();

  const onClickColor = id => {
    setColorId(id);
  };

  const goToMain = () => {
    navi('/');
  };

  const getValue = e => {
    const { name, value } = e.target;
    setWriteContent({
      ...writeContent,
      [name]: value,
    });
  };

  const ACCESS_KEY = process.env.REACT_APP_S3_ACCESSKEY;
  const SECRET_ACCESS_KEY = process.env.REACT_APP_S3_SECRET_ACCESSKEY;
  const REGION = 'ap-northeast-2';
  const S3_BUCKET = 'bzrunch';

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const handleFileInput = e => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const uploadFile = () => {
    if (selectedFile) {
      const params = {
        ACL: 'public-read',
        Body: selectedFile,
        Bucket: S3_BUCKET,
        Key: 'upload/' + selectedFile.name,
      };

      myBucket.upload(params).send((err, data) => {
        if (err) {
          return console.log(err);
        }

        postData(data.Location);
      });
    } else {
      postData();
    }
  };

  const postData = imgSrc => {
    fetch('http://10.58.52.137:3000/writings', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        user_id: 1,
        title: writeContent.title,
        content: writeContent.content,
        header_image: imgSrc || null,
        price: isPrice,
        category_id: category,
        color_id: colorId || null,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'WRITING CREATED') {
          alert('게시글이 등록 됐습니다');
          goToMain();
        } else {
          alert('다시 등록하세요');
        }
      });
  };

  useEffect(() => {
    fetch('http://10.58.52.137:3000/writings/colors')
      .then(response => response.json())
      .then(data => setSelectColor(data.result));
  }, []);

  const handlePrice = id => {
    setSelectedId(id);
    if (id === 1) {
      setIsPrice(0);
    } else {
      setIsPrice(1000);
    }
  };

  const handleSelect = e => {
    setCategory(e.target.value);
  };

  const handleColor = () => {
    setIsColor(!isColor);
  };

  const backgroundImg = selectedFile ? URL.createObjectURL(selectedFile) : '';

  return (
    <MainWrapper>
      <TopWrapper>
        {isColor ? (
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
            selectColor={selectColor}
            // onProgress={() => onClickColor(selectColor.id)}
          >
            {selectColor?.map(item => {
              return (
                <SwiperSlide
                  typeof="button"
                  key={item.id}
                  itemID={item.id}
                  selectColor={selectColor}
                  onClick={() => onClickColor(item.id)}
                >
                  <Color style={{ backgroundColor: `${item.color}` }}>
                    <Text
                      type="text"
                      placeholder="제목을 입력해주세요"
                      onChange={getValue}
                      name="title"
                    />
                  </Color>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <>
            <Title
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={getValue}
              name="title"
            />
            <BackImage src={backgroundImg} />
          </>
        )}
        <EmoWrapper>
          <label htmlFor="fileinput">
            <ImageUpload />
          </label>
          <InputTag id="fileinput" type="file" onChange={handleFileInput} />
          <ChangeColor onClick={handleColor} />
        </EmoWrapper>
        <ButtonWrapper>
          <form>
            <SelectButton onChange={handleSelect} value={category}>
              {CATEGORY_DATAS.map(cate => {
                return (
                  <OptionButton
                    value={cate.id}
                    onClick={() => setCategory(cate.id)}
                    key={cate.id}
                  >
                    {cate.category}
                  </OptionButton>
                );
              })}
            </SelectButton>
            {BUTTON_DATA.map(item => {
              return (
                <FreeButton
                  key={item.id}
                  id={item.id}
                  selectedId={selectedId}
                  onClick={() => {
                    handlePrice(item.id);
                  }}
                  type="button"
                >
                  {item.name}
                </FreeButton>
              );
            })}
            <SaveButton onClick={uploadFile} type="button">
              게시
            </SaveButton>
          </form>
        </ButtonWrapper>
      </TopWrapper>
      <BottomWrapper>
        <WrapBody>
          <BodyText
            typeof="text"
            name="content"
            placeholder="내용을 입력해주세요"
            onChange={getValue}
          />
        </WrapBody>
      </BottomWrapper>
    </MainWrapper>
  );
};

const Text = styled.input`
  position: absolute;
  transform: translate(-50%, 500%);
  font-size: 34px;
  border: none;
  text-align: center;
  outline: none;
  background-color: transparent;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
`;

const MainWrapper = styled.div`
  height: 100%;
`;

const ButtonWrapper = styled.div`
  margin-top: 80px;
  position: absolute;
  right: 100px;
  top: 0;
  z-index: 1;
`;

const SelectButton = styled.select`
  margin-right: 10px;
  border: 1px solid ${props => props.theme.theme.mint};
  color: ${props => props.theme.theme.mint};
`;

const OptionButton = styled.option``;

const SaveButton = styled.button`
  font-size: 14px;
  color: white;
  border: 1px solid ${props => props.theme.theme.mint};
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${props => props.theme.theme.mint};

  &:active {
    opacity: 0.3;
  }
`;

const FreeButton = styled.button`
  margin-right: 5px;
  font-size: 14px;
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
  color: ${({ id, selectedId }) => (id === selectedId ? '#00C1BB' : 'gray')};
  border: 1px solid
    ${({ id, selectedId }) => (id === selectedId ? '#00C1BB' : 'gray')};
  background-color: white;
  &:active {
    opacity: 0.3;
  }
`;

const EmoWrapper = styled.div`
  position: absolute;
  top: 150px;
  right: 223px;
  z-index: 1;
  width: 30px;
`;

const ImageUpload = styled(CiImageOn)`
  width: 28px;
  height: 28px;
  color: gray;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.theme.mint};
  }
`;

const ChangeColor = styled(VscSymbolColor)`
  margin-top: 5px;
  width: 28px;
  height: 28px;
  color: gray;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.theme.mint};
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  border-bottom: 1px solid #eee;
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
`;

const Title = styled.input`
  font-size: 34px;
  border: none;
  text-align: center;
  outline: none;
  background-color: transparent;
`;

const BottomWrapper = styled.div`
  background-color: #fff;
  height: 450px;
  display: flex;
`;

const WrapBody = styled.div`
  min-height: 200px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  background-color: white;
`;

const BodyText = styled.textarea`
  font-size: 24px;
  width: 100%;
  min-height: 400px;
  outline: none;
  border: none;
  text-align: center;
  resize: none;
  margin-top: 20px;
`;

const InputTag = styled.input`
  display: none;
`;

const Color = styled.div`
  height: 450px;
  width: 100%;
  position: relative;
`;

export default Write;

const CATEGORY_DATAS = [
  { id: 1, category: '개발자' },
  { id: 2, category: '프론트엔드' },
  { id: 3, category: '백엔드' },
  { id: 4, category: '웹개발' },
  { id: 5, category: '위코드' },
  { id: 6, category: '자바스크립트' },
  { id: 7, category: '일상' },
  { id: 8, category: '카페' },
  { id: 9, category: '데이트' },
  { id: 10, category: '맛집' },
  { id: 11, category: '여행' },
  { id: 12, category: '취업' },
];

const BUTTON_DATA = [
  {
    id: 1,
    name: '무료',
  },
  {
    id: 2,
    name: '유료',
  },
];
