import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  width: 100%;
  font-family: ${({ theme }) => theme.mono};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
export const UpperDiv = styled.div`
  background-color: ${({ theme }) => theme.dark};
  position: relative;
  h2 {
    font-size: 32px;
    width: 90%;
    text-align: center;
    color: ${({ theme }) => theme.white};
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 40px;
    @media (min-width: 375px) {
      width: 70%;
    }
    @media (min-width: ${({ theme }) => theme.mobile}) {
      font-size: 48px;
    }
  }
  @media (min-width: ${({ theme }) => theme.large}) {
    display: flex;
    h2 {
      text-align: left;
      width: 40%;
    }
  }
  @media (min-width: 1839px) {
    padding: 24px 0;
  }
`;
export const Images = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  img {
    margin: 0 5px;
    height: 40px;
  }
  @media (min-width: ${({ theme }) => theme.large}) {
    margin: auto 10%;
  }
`;

export const CirclesDiv = styled.div`
  position: absolute;
  top: 169px;
  right: -20%;
  @media (min-width: ${({ theme }) => theme.large}) {
    right: -10%;
    top: 28px;
  }
`;

export const BottomDiv = styled.div`
  background-color: #333a44;
  text-align: center;
  nav {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    ul {
      list-style-type: none;
      li {
        margin: 15px auto;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    nav {
      flex-direction: row;
      justify-content: space-around;
      ul {
        display: flex;

        li {
          margin: 0 10px;
        }
      }
    }
  }
`;
export const LinkStyledLogo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.white};
`;
export const LinkStyled = styled(LinkStyledLogo)`
  font-size: 1rem;
  color: ${({ theme }) => theme.grey};
  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
`;
export const Icons = styled.div`
  margin-top: 60px;
  i {
    margin: 0 10px;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
  }
`;
