import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LiaAddressCard } from "react-icons/lia";


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <TextHoldOne>
          <h3>Medic.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Enim inventore laboriosam consequuntur deleniti,
            <br /> ullam optio eius nihil, placeat, ipsum obcaecati a.
          </p>
          <HoldOne>
          <LiaAddressCard/>
            <p>123 Design Street . Suite 456 cityville 7890.Designland</p>
          </HoldOne>
          <HoldTwo>
            <MdOutlineMarkEmailUnread/>
            <p>info@medic.com</p>
          </HoldTwo>
          <HoldThree>
            <BsTelephone/>
            <p>+123765</p>
          </HoldThree>
        </TextHoldOne>
        <TextHoldTwo>
          <h3>Useful Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>Doctors</p>
          <p>Blog</p>
          <p>About</p>
        </TextHoldTwo>
        <TextHoldThree>
          <h3>Useful Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>Doctors</p>
          <p>Blog</p>
          <p>About</p>
        </TextHoldThree>

        <TextHoldFour>
          <h3>News letter</h3>
          <p>Subscribe to our newsletter</p>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </TextHoldFour>
      </Wrapper>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #080816;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
  -ms-flex-align: center;

  color: white;
  margin: 20px 0px;
  flex-wrap: wrap;
  @media (max-width: 1110px) {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;
const TextHoldOne = styled.div`
  flex-direction: column;
  @media (max-width:765px) {
      text-align: center;
    }
`;
const TextHoldTwo = styled.div`
  
`;
const TextHoldThree = styled.div``;
const HoldOne = styled.div`
display:flex;
align-items: center;
p{
  margin-left: 10px;
}


`;
const HoldTwo = styled.div`
display:flex;
align-items: center;
p{
  margin-left: 10px;
}`;
const HoldThree = styled.div`
display:flex;
align-items: center;

p{
  margin-left: 10px;
}`;
const TextHoldFour = styled.div`

  input {
    height: 31px;
    border: 1px solid #ddd;
    outline: none;
    font-weight: 800;
    padding-left: 5px;
    @media (max-width:765px) {
      border-radius: 5px;
    }
    
  }
  button {
    height: 36px;
    background-color: lightblue;
    border: none;
    outline: none;
    font-weight: 800;
    color: white;
    
    background-color:#1ba5e5;
    

    @media (max-width: 768px) {
      margin-top: 5px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;
