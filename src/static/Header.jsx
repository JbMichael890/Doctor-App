import styled from "styled-components";
import { SiGooglemessages } from "react-icons/si";
import { IoMenuSharp } from "react-icons/io5";
import SideBar from "./SideBar";
import { useState } from "react";
const Header = () => {

  const [click, setClick] = useState(false)

  const handleClick = () =>{
    setClick(!click)
  }


  return (
    <div>
    <Container>
      <Wrapper>
        <h3>Medic.</h3>

        <Navigation>
          <nav>Home</nav>
          <nav>About Us</nav>
          <nav>Doctors</nav>
          <nav>Service</nav>
          <nav>Departments</nav>
          <nav>Others</nav>
        </Navigation>
        <Hold>
          <button>
            {" "}
            <SiGooglemessages style={{ margin: "0px 5px" }} />
            Contact Us
          </button>
        </Hold>
        <Sidenav onClick={handleClick}>
          {" "}
          <IoMenuSharp style={{fontSize:"25px"}}/>
        </Sidenav>
      </Wrapper>
    </Container>


<div>{click ? <SideBar/> : null}</div>

    </div>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #ddd; */

  width: 80%;
`;

const Navigation = styled.div`
  display: flex;
  nav {
    margin: 0px 10px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Hold = styled.div`
  button {
    cursor: pointer;
    height: 40px;
    width: 140px;
    color: lightblue;
    border: 2px solid lightblue;
    border-radius: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Sidenav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;
