import styled from "styled-components";
import landimage from "../assets/landiamge.svg";
import { motion } from "framer-motion";
import { introImgAnimation, introTextAnimation } from "../utils/Animations";
import { useScroll } from "../components/useScroll";
const LandingPage = () => {
    
    const [element, controls] = useScroll();
    

    return ( 
        <Contenair >
            <Left className="left"
                // variants={introTextAnimation}
                // transition={{ delay: 0.1 }}
            >
                <SmallDiv className="top">
                    <Row1 className="row"></Row1>
                    <SmalText>Djiboutian developer</SmalText>
                </SmallDiv>
                <SmallDiv>
                    <BigText>we are modern and creative</BigText>
                </SmallDiv>
                <SmallDiv>
                <MiddleText>choose our templates and attract your customers</MiddleText>
                </SmallDiv>
            </Left>
            <Right 
                // variants={introImgAnimation}
                // transition={{ delay: 0.1 }}
                >
               <LImage src={landimage} className="image"/>
            </Right>
        </Contenair>
     );
}

const Contenair = styled(motion.div)`
    /* width: 80%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* @media only screen and (max-width: 769px) {
    width: 100%;
  } */
    

`
const Left = styled(motion.div)`
    width: 50%;
    /* display: flex;
    flex-direction: column; */
    /* margin-left: 10px; */
    @media only screen and (max-width: 1199px) {
        width: 100%;
        /* min-width: 320px; */
        /* min-width: 280px; */
    }
`
const Right = styled(motion.div)`
    width: 50%;
    @media only screen and (max-width: 1199px) {
        display: none;
    }
`
const SmallDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    @media only screen and (max-width: 2274px) {
        font-size: 20px;
  }
    @media only screen and (max-width: 1885px) {
        font-size: 17px;
  }
    @media only screen and (max-width: 1666px) {
        font-size: 15px;
  }
    @media only screen and (max-width: 1440px) {
        font-size: 13px;
  }
    @media only screen and (max-width: 1306px) {
        font-size: 10px;
  }
  @media only screen and (max-width: 1199px) {
        /* font-size: 13px; */
        font-size: 20px;
    }
  /* @media only screen and (max-width: 914px) {
        font-size: 10px;
    } */
  @media only screen and (max-width: 713px) {
        font-size: 15px;
    }
  /* @media only screen and (max-width:320px) {
        font-size: 8px;
        justify-content:center;
    } */
`
const Row1 = styled.div`
  width: 120px;
  height: 5px;
  background-color: var(--color1);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width:320px) {
        /* width: 150px */
    }
    
`
const SmalText = styled.p`
    color: var(--color1);
    margin-left: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media only screen and (max-width:320px) {
        margin-left: 0px;
    }
`
const BigText = styled.h1`
    /* font-family: 'Abril Fatface', cursive; */
    font-family: 'Raleway', sans-serif;
    font-size: 3em;
    color: var(--color1);;
    letter-spacing: 3px;
    font-weight: 700;
    margin-top: 15px;
    text-transform: uppercase;
`
const MiddleText = styled.h3`
    font-size: 1.5em;
    color: var(--color1);
    letter-spacing: 3px;
    font-weight: 600;
    margin-top: 5px;
    text-transform: uppercase;
`
const LImage = styled.img`
    width: 100%;
    float: left;
    /* height: 500px; */
`
export default LandingPage;