import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {
  FooterContainer,
  Container,
  HeaderContainer,
  ImageContainer,
  BottomContainer,
  Title,
  Info,
  Address,
  Button,
  Wrapper,
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
} from "./hotelstyle";
import useFetch from "../../hooks/useFetch";
import { LoadingSpinner } from "../../components/spinner/spinner.style";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading } = useFetch(`/hotel/find/${id}`);
  const { date, options } = useContext(SearchContext);
  const navigate = useNavigate();

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2 - date1);
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(date[0].endDate, date[0].startDate);

  const handleModal = (index) => {
    setOpen(true);
    setSlideIndex(index);
  };

  const handleChange = (direction) => {
    let slideNumber;
    if (direction === "l") {
      slideNumber = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      slideNumber = slideIndex === 5 ? 0 : slideIndex + 1;
    }
    setSlideIndex(slideNumber);
  };

  const handleReserve = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar />
      <Header list />

      {loading ? (
        <LoadingSpinner style={{ margin: "50% auto" }} />
      ) : (
        <>
          <Container>
            {openModal && (
              <Reserve days={days} setOpenModal={setOpenModal} id={id} />
            )}
            <HeaderContainer>
              <Wrapper>
                <Title>{data.name}</Title>
                <AddressContainer>
                  <FontAwesomeIcon icon={faLocationDot} />

                  <Address>{data.address}</Address>
                </AddressContainer>
                <Info color="#0071c2">
                  Lorem ipsum dolor sit amet consectetur,
                </Info>
                <Info color="green">
                  Book a stay over $200 at this property and get a free airport
                  taxi
                </Info>
              </Wrapper>

              <Button onClick={handleReserve} noDisplay>
                {!user ? "Login" : "Reserve or Book Now!"}
              </Button>
            </HeaderContainer>
            <ImageContainer>
              {open && (
                <SliderContainer>
                  <SliderWrapper>
                  <CloseIcon
                    icon={faCircleXmark}
                    onClick={() => setOpen(false)}
                  />
                    <ArrowIcon
                      icon={faCircleArrowLeft}
                      onClick={() => handleChange("l")}
                    />
                    <Image
                      style={{ width: "90%", height: "100%" }}
                      src={data.photos[slideIndex]}
                    />
                    <ArrowIcon
                      icon={faCircleArrowRight}
                      onClick={() => handleChange("r")}
                    />
                  </SliderWrapper>
                </SliderContainer>
              )}

              {data.photos?.map((image, index) => (
                <Image
                  src={image}
                  key={index}
                  onClick={() => handleModal(index)}
                />
              ))}
            </ImageContainer>
            <BottomContainer>
              <DetailsContainer>
                <Title>{data.title}</Title>
                <Detail>{data.desc}</Detail>
              </DetailsContainer>
              <PriceContainer>
                <Title
                  small
                >{`Perfect for a ${days}-nights stay and ${options.rooms} rooms!`}</Title>
                <Detail>
                  {`Located in the real heart of ${data.city}, this propperty has an excellent location score of ${data.rating}`}
                </Detail>
                <PriceWrapper>
                  <Price>${days * data?.cheapestPrice * options.rooms}</Price>
                  <PriceDetail>{`( ${days} nights )`}</PriceDetail>
                </PriceWrapper>
                <Button onClick={handleReserve}>
                  {!user ? "Login" : "Reserve or Book Now!"}
                </Button>
              </PriceContainer>
            </BottomContainer>
          </Container>

          <FooterContainer>
            <MailList />
            <Footer />
          </FooterContainer>
        </>
      )}
    </>
  );
};

export default Hotel;
