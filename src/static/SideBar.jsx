import styled from "styled-components";
import { SiGooglemessages } from "react-icons/si";
const SideBar = () => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default SideBar;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  height: 80vh;
  width: 250px;
  background-color: lightcyan;
`;
const Navigation = styled.div`
nav {
    margin: 0px 30px;
    font-weight: 500;
  }
`
const Hold = styled.div`
  button {
    cursor: pointer;
    height: 40px;
    width: 140px;
    color: lightblue;
    border: 2px solid lightblue;
    border-radius: 20px;
  }
`