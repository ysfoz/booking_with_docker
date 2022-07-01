import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import {
  Container,
  Wrapper,
  Button,
  Logo,
  ButtonContainer,
  StyledLink,
  Profile,
  Name,
  Logout,
} from "./navbar.style";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  
  return (
    <Container>
      <Wrapper>
        <StyledLink to={"/"}>
          <Logo>Booking.com</Logo>
        </StyledLink>
        {user ? (
          <>
            <Profile onClick={() => setOpen((prev) => !prev)}>
              <Name>{user?.username[0]}</Name>
              {open && <Logout onClick={logout}>Logout</Logout>}
            </Profile>
          </>
        ) : (
          <ButtonContainer>
            <Button onClick={() => navigate("/register")}>Register</Button>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </ButtonContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
