import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import { Container, ListContainer, Title, Toasty, ToastyContainer,Wrapper } from "./home.style";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const { state } = useLocation();
  const [message, setMessage] = useState(state?.message || "");

  useEffect(() => {
    message &&
      setTimeout(() => {
        setMessage("");
      }, 10000);
  }, []);

  return (
    <Container>
      <Wrapper>
      <Navbar />
      <Header />

      </Wrapper>
      <ListContainer>
        {message && (
          <ToastyContainer>
            <Toasty>{message}</Toasty>
          </ToastyContainer>
        )}
        <Featured />
        <Title>Browse by property type</Title>
        <PropertyList />
        <Title>Homes guests love</Title>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </ListContainer>
    </Container>
  );
};

export default Home;
