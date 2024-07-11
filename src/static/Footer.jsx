import styled from "styled-components"

const Footer = () => {
  return (
<Container>
  <Wrapper>
  <TextHoldOne>
<h3>Medic.</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore laboriosam consequuntur deleniti, ullam optio eius nihil, ducimus ut, quo earum suscipit! Vitae voluptatem labore deserunt placeat, ipsum obcaecati a.</p>
 <HoldOne>
  <img src="" alt="" />
  <p>123 Design Street . Suite 456 cityville 7890.Designland</p>
 </HoldOne>
 <HoldTwo><img src="" alt="" />
 <p>info@medic.com</p></HoldTwo>
 <HoldThree>
  <img src="" alt="" />
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
    <input type="text"
    placeholder="Enter your email" />
    <button>Subscribe</button>
  </TextHoldFour>
  </Wrapper></Container>
  )
}

export default Footer
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
width: 80%;


`
const TextHoldOne = styled.div``
const TextHoldTwo = styled.div``
const TextHoldThree = styled.div``
const HoldOne = styled.div``
const HoldTwo = styled.div``
const HoldThree = styled.div``
const TextHoldFour = styled.div``
