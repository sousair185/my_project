import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(92, 92, 92, 1) 22%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 30px;
  text-shadow: 2px 1px 5px black;
  display: none;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${(props) => (props.sidebar ? "0" : "-100%")};
    transition: 0.5s;
    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 3rem;
  transition: 0.3s;

  &.active {
    background-color: black;
  }
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
  margin-top: 1.5rem;
`;

export const SubTitle = styled.span`
  display: none;
`;
