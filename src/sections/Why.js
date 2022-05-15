import styled from "styled-components";
import ServiceCart from "../components/servicesCard";
import { IoIosDesktop } from "react-icons/io";
import { BiMobileAlt } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { WhyHeaderAnimation } from "../utils/Animations";

const Why = () => {

    const [element, controls] = useScroll();

    return ( 
        <Section
            ref={element}  
            animate={controls}
            id="service"
        >
            <Div
                variants={WhyHeaderAnimation}
                transition={{ delay: 0.2, type: "tween" }}
            >
                <H1>Why HORN CODE ?</H1>
                <P>
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,
                    le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,
                    on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                </P>
            </Div>
            <DivCart>
                <ServiceCart Icone={<IoIosDesktop/>} Title={"Web developpement"}/>
                <ServiceCart Icone={<BiMobileAlt/>} Title={"Mobile App developpement "}/>
                <ServiceCart Icone={<AiOutlineApi/>} Title={"API developpement"}/>
                <ServiceCart Icone={<MdOutlineDesignServices/>} Title={"Web & Mobile App Design"}/>
            </DivCart>
        </Section>
     );
}


const Section = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media only screen and (max-width: 1199px) {
      flex-direction: column;
    }
    @media screen and (max-width: 1302px) {
        font-size: 20px;
    }
    @media screen and (max-width: 1000px) {
        font-size: 17px;
    }
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
    @media screen and (max-width: 360px) {
        font-size: 18px;
    }
`;

const Div =  styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const DivCart = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
        flex-wrap: nowrap;
        display: flexs;
        flex-direction: column;
        align-items: center;
        overflow-x: auto;
        width: 100%;
        height: 300px;
        ::-webkit-scrollbar {
            display: none;
        }
       
    }
    /* font-size: 25px; */
`
const H1 = styled.h1``
const P = styled.p`
    text-align: center;
    width: 80%;
`
export default Why;