import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Error,
  ButtonWrapper,
  Button,
  StyledLink,
} from "./register.style";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (values) => {
    dispatch({ type: "START" });
    try {
      const res = await axios.post("/auth/register", values);
      dispatch({ type: "REGISTER", payload: res?.data });
      navigate("/login");
    } catch (error) {
      dispatch({ type: "FAILURE" });
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("username is required")
        .min(3, "Username is too short - should be 3 chars minimum."),
      password: Yup.string()
        .required("No password provided.")
        .min(5, "Password is too short - should be 6 chars minimum."),
      email: Yup.string()
        .required("You did not type an Email")
        .email("Your Email is not correct"),
    }),
    onSubmit: (values) => {
      handleClick(values);
    },
  });

  return (
    <Container>
      <Wrapper>
        <Title>SIGN ON</Title>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            placeholder="username"
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <Error>{formik.errors.username}</Error>
          ) : null}
          <Input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
          <Input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error>{formik.errors.password}</Error>
          ) : null}
          <ButtonWrapper>
            <Button type="submit" disabled={loading}>
              Register
            </Button>
            <StyledLink to="/login">Already have an account!</StyledLink>
          </ButtonWrapper>
          {error && <Error>Something went wrong !!!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
