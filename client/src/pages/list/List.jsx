import { useContext } from "react";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { Container, Wrapper } from "./list.style";
import SearchBox from "../../components/searchBox/SearchBox";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { LoadingSpinner } from "../../components/spinner/spinner.style";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
  const { city, min, max } = useContext(SearchContext);

  const { data, loading } = useFetch(
    `/hotel?city=${city}&min=${min || 0}&max=${max || 999}`
  );

  return (
    <>
      <Navbar />
      <Header list />

      <Container>
        <SearchBox />
        <Wrapper>
          {loading ? (
            <LoadingSpinner
              style={{ position: "fixed", left: "calc(60%)", top: "calc(50%)" }}
            />
          ) : (
            data.map((item, index) => {
              return <SearchItem key={index} item={item} />;
            })
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default List;
