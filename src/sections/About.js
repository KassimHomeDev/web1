import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { AboutRigthAnimation, AboutLeftAnimation } from "../utils/Animations";
import ProcessAbout from "../assets/process.svg";


const About = () => {

  const [element, controls] = useScroll();
  return (
    // <Container>
      <Section
      ref={element}  
      animate={controls}
      id="about"
      >
        <Left
         
          variants={AboutLeftAnimation}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Title>
            <H1>ABOUT HORN CODE</H1>
            <Row1 className="row"></Row1>
          </Title>
          <Para>
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,
            le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,
            on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </Para>
        </Left>
        <Right
          variants={AboutRigthAnimation}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <RImage src={ProcessAbout}/>
        </Right>
      </Section>
  );
};
const Section = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: hidden;
  @media only screen and (max-width: 1199px) {
      flex-direction: column;
    }
`;
const Left = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px ;
  /* background: #efe8ff; */
  @media only screen and (max-width: 1199px) {
        width: 100%;
        margin-top: 30px;
    }
`;
const Right = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #efe8ff; */

  @media only screen and (max-width: 1199px) {
      width: 100%;
    }
`;
const RImage = styled.img`
    /* width: 350px; */
    width: 90%;
    
    float: left;
    @media only screen and (max-width: 1199px) {
      width: 50%;
    }

    /* height: 500px; */
`
const Row1 = styled.div`
  width: 80px;
  height: 5px;
  margin-top: -15px;
  background-color: var(--color2);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
`
const H1 = styled(motion.h1)`
  /* float: left; */
`
const Para = styled(motion.p)`
  font-size: 22px;
  @media only screen and (max-width: 1199px) {
      width: 80%;
    }
    @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`
const Title = styled(motion.div)`
  float: left;
  width: 100%;
  @media only screen and (max-width: 1199px) {
      width: 80%;
    }
`
export default About;
