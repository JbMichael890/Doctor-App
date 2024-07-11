import styled from "styled-components";
import { FaUserDoctor } from "react-icons/fa6";

const HomePageTwo = () => {
  const cardInfo = [
    {
      icon: <FaUserDoctor />,
      title: "Dr Williams",
      content:"No man is a good doctor who has never been sick himself." ,
    },
    {
      icon: <FaUserDoctor />,
      title: "Dr Ryan",
      content:"A good laugh & a long sleep are the best cures in the doctor's book.",
    },
    {
      icon: <FaUserDoctor />,
      title: "Dr James",
      content: "Wherever the art of medicine is loved, there is also a love of humanity.",
    },
    {
      icon: <FaUserDoctor />,
      title: "Dr Brown",
      content:"Only a life lived for others is a life.",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <h1>Easy <span>steps</span> for your care</h1>

        <Holder>
          {cardInfo.map((data, i) => (
            <Card key={i}>
              <div>{data.icon}</div>
              <h3>{data.title}</h3>
              <p style={{fontWeight:"500"}}>{data.content}</p>
            </Card>
          ))}
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default HomePageTwo;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;
  /* min-height: 100vh; */
`;
const Wrapper = styled.div`
  
 display: flex;
 flex-direction: column;
 align-items: center;
  width: 80%;
  h1{
    @media (max-width: 768px) {
      font-size: 30px;
      text-align: center;
      width: 80%;
    }
  }
  
  span{
    color: #0000FF;
  }
  
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
`;
const Card = styled.div`
  border: 1px solid #ddd;
  margin: 0px 8px;
  background-color: #eee;
  height: 250px;
  width: 250px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  
  div{
    color:#0000FF;
  }
  @media (max-width: 768px) {
    margin: 10px
    }
`;
