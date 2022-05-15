import styled from "styled-components";
// import LandingPage from "../components/landing";
import landimage from "../assets/landiamge.svg";
import NavBar from "../components/nav";
import "../globalstyles/globalstyles.css";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { introImgAnimation, introTextAnimation } from "../utils/Animations";
const Home = () => {
    const [element, controls] = useScroll();
    return ( 
        <Container>
        <Section 
            id="home"
            ref={element}  
            animate={controls}
            transition={{ delay: 0.2, type: "tween" }}
        >
            <MenuNav>
                <NavBar />
            </MenuNav>
            <Land>
                <Left className="left"
                    variants={introTextAnimation}
                    transition={{ delay: 0.1 }}
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
                    variants={introImgAnimation}
                    transition={{ delay: 0.1 }}
                    >
                <LImage src={landimage} className="image"/>
                </Right>
            </Land>
        </Section>
        </Container>
     );
}

const Container = styled.div`
    position: relative;
    /* background-color: #ffff; */
    background: #fd746c;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff9068, #fd746c);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff9068, #fd746c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;
const Land =styled(motion.div)`
    width: 100%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const MenuNav = styled.div`
    /* background: #ECF0F1; */
`;
const Section = styled(motion.section)`
    position: relative;
    /* background: #ECF0F1; */

`;



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
  @media only screen and (max-width:360px) {
        font-size: 12px;
        /* justify-content:center; */
    }
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
export default Home;