import styled from "styled-components";
import Image from "../assets/medium-shot-smiley-doctor-with-stethoscope_23-2149844586.avif";
const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <TextHold>
          <h1>
            <span>
              We Ensure <br /> the Best{" "}
            </span>
            Health
            <span>
              {" "}
              <nav>services for you.</nav>
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            nihil, praesentium suscipit aliquam tempore nobis odit ipsum, amet
            deserunt accusantium dignissimos corrupti excepturi cupiditate
            magnam, blanditiis nesciunt sed. Vitae, consequuntur.
          </p>
          <button>Get Appointment</button>
        </TextHold>
        <ImageHold>
          <img src={Image} alt="" />
        </ImageHold>
      </Wrapper>
    </Container>
  );
};

export default HomePage;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background-color: #eee;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    justify-content: center;
  }
`;
const TextHold = styled.div`
  width: 500px;
  @media (max-width: 500px) {
    width: 90%;
  }
  p {
    font-weight: 500;
    font-size: 15px;
  
  
  }
  button {
    height: 30px;
    width: 150px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    @media (max-width: 768px) {
      /* width: 90%; */
      margin: 30px 0px;
    }
  }

  h1{
    font-size: 40px;
  }

  span {
    color: lightblue;
  }
`;
const ImageHold = styled.div`
  img {
    width: 500px;
    object-fit: cover;

    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
