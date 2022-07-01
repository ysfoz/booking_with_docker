import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mobile, small, tablet } from "../../components/responsive";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 1024px;
  margin: auto auto;
  margin-top: 30px;

  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.small && "14px"};
`;
const AddressContainer = styled.span`
  font-size: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Address = styled.span`
  font-size: 12px;
`;
const Info = styled.span`
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 400;
`;
const Button = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px;
  height: fit-content;
  border-radius: 5px;
  cursor: pointer;
  ${small({ display: (props) => (props.noDisplay ? "none" : null) })}
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5px;
  margin: 10px;
`;

const Image = styled.img`
  width: 33%;
  object-fit: cover;
  height: 250px;
  ${small({ height: "180px" })}
  ${mobile({ height: "140px" })}
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 10px;
  ${small({ flexDirection: "column" })}
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 10px;
`;
const Detail = styled.p`
  font-size: 12px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: lightblue;
  padding: 10px;
  gap: 10px;
`;

const PriceWrapper = styled.div``;
const Price = styled.span`
  font-weight: 700;
  margin-right: 10px;
`;
const PriceDetail = styled.span`
  font-weight: 300;
`;

const SliderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SliderWrapper = styled.div`
  width: 80%;
  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${mobile({ width: "90%", "max-height": "60%" })}
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 40px;
  color: white;
  ${tablet({ "font-size": "24px" })}
`;

const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  right: 6%;
  font-size: 40px;
  color: white;
  cursor: pointer;
  ${tablet({ "font-size": "24px" })}
`;

export {
  FooterContainer,
  Container,
  Wrapper,
  HeaderContainer,
  ImageContainer,
  BottomContainer,
  Title,
  Address,
  Info,
  Button,
  AddressContainer,
  Image,
  DetailsContainer,
  Detail,
  PriceContainer,
  Price,
  PriceDetail,
  PriceWrapper,
  SliderContainer,
  SliderWrapper,
  ArrowIcon,
  CloseIcon,
};
