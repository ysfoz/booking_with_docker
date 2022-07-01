import {
  Container,
  Wrapper,
  TitleContainer,
  Title,
  Image,
  SubTitle,
} from "./proppertyList.style";
import { LoadingSpinner } from "../spinner/spinner.style";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotel/countbytype");
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          {images.map((image, index) => {
            return (
              <Wrapper key={index}>
                <Image src={image} />
                <TitleContainer>
                  <Title>{data[index]?.type}</Title>
                  <SubTitle>
                    {data[index]?.count} {data[index]?.type}s
                  </SubTitle>
                </TitleContainer>
              </Wrapper>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default PropertyList;
