import styled from "styled-components";
import immgOne from "../assets/young-man-being-ill-hospital-bed_23-2149017262.avif";
import imageTwo from "../assets/man-woman-talking-ill-patient-about-treatment-medicine-hospital-ward-team-healthcare-specialists-doing-consultation-with-young-adult-using-ta.avif"
import imageThree from "../assets/single.avif"


const HomePageFive = () => {
  const patient = [
    {
      text: "Doctor Ryan is the best doctor i have worked with sofar",
      image: `${immgOne}`,
      name: "Mr.Rowland",
      PhoneNum: "+95 5143 516",
    },
    {
      text: "Doctor Ryan is the best doctor i have worked with sofar",
      image:`${imageTwo}`,
      name: "Madam.Patient",
      PhoneNum:  "+90 2226 137",
    },
    {
      text: "Doctor Ryan is the best doctor i have worked with sofar",
      image:`${imageThree}`,
      name: "Mrs.Christiana ",
      PhoneNum: "+89 6738 020",
    },
  ];
  
  return (
    <Container>
      <Wrapper>
        <h1>
          What our patients <span style={{ color: "#1ba5e5" }}>says</span> about
          us
        </h1>
        <Holder>
          {patient.map((data, index) => (
            <Card key={index}>
              <p>{data.text}</p>
              <main>
                {" "}
                <div>
                  <img src={data.image} alt="" />
                </div>
                <nav>
                  {" "}
                  <h3>{data.name}</h3>
                  <span>{data.PhoneNum}</span>
                </nav>
              </main>
            </Card>
          ))}
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default HomePageFive;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  flex-direction: column;
  width: 80%;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 15px;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 20px;
  p{
    font-weight: 500;
  }
  h3{
    margin: 0px;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 22px;
    margin-top: 10px;
    margin-right: 10px;
  }
`;
const Card = styled.div`
  margin: 0px 10px;

  background-color: #ddd;
  height: 300px;
  width: 250px;
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span{
    color: #1ba5e5;
  }
  @media (max-width: 500px) {
    main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  }
  /* div{
    display: flex;
    flex-direction: column;
  } */

  @media (max-width: 768px) {
    text-align: center;
    margin: 10px;
    width: 100%;
  }
`;
