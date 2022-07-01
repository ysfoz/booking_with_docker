import { css } from "styled-components";

export const middle = (props) => {
  return css`
    @media only screen and (max-width: 1082px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 820px) {
      ${props}
    }
  `;
};
export const small = (props) => {
  return css`
    @media only screen and (max-width: 762px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 520px) {
      ${props}
    }
  `;
};

