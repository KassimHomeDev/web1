import styled from "styled-components";
import { motion } from "framer-motion";
import { TestiCartAnimation } from "../utils/Animations";

const Testimonial = ({ imag, message, name, fonction }) => {
  return (
    <Div
      variants={TestiCartAnimation}
      transition={{ delay: 0.7 }}
    >
      <ImgDiv>
        <Img src={imag} />
      </ImgDiv>
      <Span>❝</Span>
      <MessageContenaire>
        <Message>{message}</Message>
        <Contact>
          {/* <DivIn> */}
          <Name>{name}</Name>
          <Fonction>{fonction}</Fonction>
          {/* </DivIn> */}
        </Contact>
      </MessageContenaire>
    </Div>
  );
};

const Div = styled(motion.div)`
    position: relative;
    background-color: #efe8ff;
    padding: 5px;
    width: 30%;
    height: 270px;
    margin-left: 10px;
    border-radius: 20px;
    overflow: hidden;
    @media screen and (max-width: 1302px) {
        width: 40%;
    }
    @media screen and (max-width: 1000px) {
        width: 50%;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
        /* font-size: 10px; */
    }
    @media screen and (max-width: 399px) {
        width: 100%;
        /* font-size: 10px; */
    }
    @media screen and (max-width: 360px) {
       font-size: 12px;
       width: 90%;
       height: 200px;
    }

`;
const MessageContenaire = styled.div`
  position: relative;
  margin: 0 2%;
`;
const Span = styled.span`
  font-size: 60px;
  position: absolute;
  top: 0px;
  @media screen and (max-width: 360px) {
      font-size: 40px;
    }
`;
const ImgDiv = styled.div`
  position: relative;
  /* width: 15%; */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  /* margin-top: 10px; */
  margin: 1% 2%;
  @media screen and (max-width: 360px) {
    width: 80px;
    height: 80px;
    }
`;
const Img = styled.img`
  width: 100%;
  margin-top: 20px;
  transform: scale(1.7);
`;
const Message = styled.p`
  height: 95px;
  color: var(--color2);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-bottom: 0px;
  @media screen and (max-width: 360px) {
      height: 70px;
    }
  
  
`;

const Contact = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--color5);
`;
const Name = styled.strong`
  float: right;
  font-size: larger;
  font-weight: bold;
  @media screen and (max-width: 360px) {
       font-size: 13px;
  }
`;
const Fonction = styled.p`
  float: right;
  margin: 0px;
  font-size: medium;
  @media screen and (max-width: 360px) {
       font-size: 12px;
  }
`;
export default Testimonial;
