import styled from "styled-components";
import ImageOne from "../assets/happy-medical-staff-smiling-camera-practitioner-doctor-working-pc-while-medical-staff-nurses-are-talking-with-patients-glass-walls-healthcare-.jpg";

const HomePageThree = () => {
  return (
    <Container>
      <Wrapper>
        <img src={ImageOne} alt="" />
        <TextHold>
         <Holder>
            <p>Try our</p>
            <nav> Virtual health care</nav>
            <p>
              All Medic services are available in web and mobile app versions
              with fast services responses
            </p>
            <button>Start Chat</button>
            </Holder>
        </TextHold>
      </Wrapper>
    </Container>
  );
};

export default HomePageThree;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  img {
    width: 500px;
    height: 352px;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 5px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextHold = styled.div`
  background-color: #1ba5e5;
  height: 352px;
display: flex;
justify-content: center;
align-items: center;
  color: white;

  div {
    width: 80%;
    text-align: center;
   
  }
  nav {
    font-size: 40px;
  }
  button {
    height: 25px;
    width: 100px;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: 600;
    border: 1px solid #ddd;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Holder = styled.div`

`