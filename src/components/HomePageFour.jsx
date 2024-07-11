import styled from "styled-components";
import ImageOne from "../assets/young-excited-handsome-dark-skinned-male-doctor-with-curly-hair-wearing-white-coat-with-stethoscope-pointing-up-with-index-fingers_141793-21585.avif";
import ImageTwo from "../assets/image-professional-doctor-asian-woman-physician-face-medical-mask-rubber-gloves-standing-with-arms-crossed-white-background_1258-83380.avif";
import ImageThree from "../assets/positive-confident-millennial-black-woman-doctor-white-coat-with-stethoscope-crossed-arms_116547-83481.jpg";
import ImageFour from "../assets/image-smiling-asian-doctor-dermatologist-shows-healthy-skin-posing-cute-camera-standing-medical-uniform-white-background_1258-83377 (1).avif";

const HomePageFour = () => {
  const Holder = [
    {
      Image: `${ImageOne}`,
      name: "Dr.Mark Stuant",
      post: "CSO",
      special: "Cancer Specialist(Oncologist)",
    },
    {
      Image: `${ImageTwo}`,
      name: "Dr.Catherine Clinton",
      post: "DS",
      special: "Dentor Specialist(Dentist)",
    },
    {
      Image: `${ImageThree}`,
      name: "Dr.Adam Louis",
      post: "CHS",
      special: "Child Health Specialist(Pediatician)",
    },
    {
      Image: `${ImageFour}`,
      name: "Dr.Mitchel Sharon",
      post: "HSD",
      special: "Heart Specialist(Cardiologist)",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <h1>
          Our <span style={{ color: " #1ba5e5" }}>specialist</span> doctors
        </h1>

        <CardHold>
          {Holder.map((data, i) => (
            <Card key={i}>
              <div>
                <img src={data.Image} alt="" />
              </div>
              <h3>{data.name}</h3>
              <h3>{data.post}</h3>
              <p>{data.special}</p>
            </Card>
          ))}
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default HomePageFour;
const Container = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  
  flex-direction: column;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const CardHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    @media (max-width: 500px) {
    width: 100%;
    
  }
  }
  
`;
const Card = styled.div`
  margin: 5px;
  height: 300px;
  width: 250px;
  font-size: 14px;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  h3 {
    margin: 0px;
    margin-left: 3px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    color: #1ba5e5;
    margin: 1px;
    margin-left: 3px;
  }
  
  @media (max-width: 500px) {
    width: 100%;
    
  }
`;
