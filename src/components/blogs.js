import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { WhyCartAnimation } from "../utils/Animations";

const Blogs = ({ image, title, subTitle}) => {
    return ( 
        <Container>
            <DIvImg
                variants={WhyCartAnimation}
                transition={{ delay: 0.5 }}
            >
                <Image src={image}/>
            </DIvImg>
            <DivText
                variants={WhyCartAnimation}
                transition={{ delay: 0.7 }}
            >
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <Btn>Read more<HiOutlineArrowNarrowRight /></Btn>
            </DivText>
            
        </Container>
     );
}

const Container = styled(motion.div)`
    width: 30%;
    position: relative;
    margin-left: 15px ;
    padding-bottom: 15px;
    background: var(--color1);
    border: none;
    border-radius: 20px;
    font-size: 20px;
    @media only screen and (max-width: 1199px) {

    }
    @media screen and (max-width: 1302px) {
        width: 40%;
    }
    @media screen and (max-width: 1000px) {
        width: 50%;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
    }
    @media screen and (max-width: 360px) {
        width: 90%;
        font-size: 16px;
    }
`
const DivText = styled(motion.div)`
    margin: 0px 5%;
`
const Image = styled.img`
    width: 100%;
    &:hover{
        transform: scale(1.2);
        transition: 0.7s ease-in-out;
    }
`
const DIvImg = styled(motion.div)`
    overflow-y: hidden;
    overflow-x: hidden;
`
const Title = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 21px;
    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`
const SubTitle = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`
const Btn = styled.button`
  color: var(--color2);
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  border: 0.1rem solid transparent;
  border-radius: 0.25rem;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in-out;
  background-color: #D0D3D4;
  &:hover {
    background-color: var(--color2);
    border: 0.1rem solid $buttonBlueColor;
    color: var(--color1);
  }
  svg {
    margin-left: 0.5rem;
    font-size: large;
  }
`
export default Blogs;