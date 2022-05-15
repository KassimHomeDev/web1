import styled from "styled-components";
import Testimonial from "../components/Testimonial";
import TestImg from "../assets/photo.png";
import { motion } from "framer-motion";
import { HeaderAnimation } from "../utils/Animations";

const Testimonials = () => {
  const text =
  "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,le texte définitif venant remplacer le faux-texte dès qu'il est prêt";

  return (
    <Contenair
      // variants={TestiCartAnimation}
      // transition={{ delay: 0.7 }}
    >
      <motion.div className="header"
        variants={HeaderAnimation}
        transition={{ delay: 0.2, type: "tween" }}
      >
        <Title>Testimonial</Title>
        <P>what our customers say</P>
      </motion.div>
      <TestimonialContenaire>
        <Testimonial
          imag={TestImg}
          message={text}
          name={"Kassim abdi"}
          fonction={"Developper"}
        />
        <Testimonial
          imag={TestImg}
          message={text}
          name={"Kassim abdi"}
          fonction={"Developper"}
        />
        <Testimonial
          imag={TestImg}
          message={text}
          name={"Kassim abdi"}
          fonction={"Developper"}
        />
        
      </TestimonialContenaire>
    </Contenair>
  );
};

const Contenair = styled(motion.div)`
  margin-top: 0px;
  height: 60vh;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const TestimonialContenaire = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Title = styled.h1`
  margin-top: 10px;
`;
const P = styled.p`
  margin-top: 0px;
  @media screen and (max-width: 360px) {
       font-size: 15px;
    }
`;

export default Testimonials;
