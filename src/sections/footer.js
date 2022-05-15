import styled from "styled-components";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../assets/HornCodeLogo.svg";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { motion } from "framer-motion";
import { FadOutAnimation, OpacityAnimation } from "../utils/Animations";

const Footer = () => {
  return (
    <FooterDiv>
      <TopDiv>
        <LogoDiv>
          <LogoImg src={Logo} 
            variants={FadOutAnimation}
            transition={{ delay: 0.4, type: "tween" }}
          />
        </LogoDiv>
        <ContactDiv>
            <h3>Get in Touch</h3>
            <Contact className="touch-section">
              <IconDivContact 
              className="icon"
              variants={FadOutAnimation}
              transition={{ delay: 0.61, type: "tween" }}
              
              >
                <MdEmail />
              </IconDivContact>
              <div className="detail">
                <motion.div className="detail-name"
                  variants={FadOutAnimation}
                transition={{ delay: 0.62, type: "tween" }}
                >Email</motion.div>
                <div className="detail-content">
                  <motion.a href="#"
                    variants={FadOutAnimation}
                    transition={{ delay: 0.62, type: "tween" }}
                  >horncode@gmail.com</motion.a>
                </div>
              </div>
            </Contact>
            <Contact className="touch-section">
              <IconDivContact className="icon"
                variants={FadOutAnimation}
                transition={{ delay: 0.62, type: "tween" }}
              >
                <FaPhoneAlt />
              </IconDivContact>
              <div className="detail">
                <motion.div className="detail-name"
                  variants={FadOutAnimation}
                  transition={{ delay: 0.62, type: "tween" }}
                >Phone</motion.div>
                <div className="detail-content">
                  <motion.a href="#"
                    variants={FadOutAnimation}
                    transition={{ delay: 0.62, type: "tween" }}
                  >+253 77168971</motion.a>
                </div>
              </div>
            </Contact>
            <Contact className="touch-section">
              <IconDivContact className="icon"
              variants={FadOutAnimation}
              transition={{ delay: 0.63, type: "tween" }}
              >
                <ImLocation />
              </IconDivContact>
              <div className="detail">
                <motion.div className="detail-name"
                  variants={FadOutAnimation}
                transition={{ delay: 0.62, type: "tween" }}
                >Location</motion.div>
                <div className="detail-content">
                  <motion.a href="#"
                    variants={FadOutAnimation}
                    transition={{ delay: 0.62, type: "tween" }}
                  > Djibouti, Djibouti-Ville</motion.a>
                </div>
              </div>
            </Contact>
        </ContactDiv>
      </TopDiv>
      <BottomDiv>
          <CopyRight>
             <motion.p
              variants={FadOutAnimation}
              transition={{ delay: 0.7, type: "tween" }}
             >Copyright c 2021. All Rights Reserved.</motion.p>
          </CopyRight>
        <Icons>
          <IconDiv className="icon"
            variants={FadOutAnimation}
                transition={{ delay: 0.62, type: "tween" }}
          >
            <a href="#">
              <FaFacebookF />
            </a>
          </IconDiv>
          <IconDiv className="icon"
            variants={FadOutAnimation}
                transition={{ delay: 0.62, type: "tween" }}
          >
            <a href="#">
              <AiFillInstagram />
            </a>
          </IconDiv>
          <IconDiv className="icon"
            variants={FadOutAnimation}
            transition={{ delay: 0.72, type: "tween" }}
          >
            <a href="#">
              <AiFillLinkedin />
            </a>
          </IconDiv>
          <IconDiv className="icon"
            variants={FadOutAnimation}
                transition={{ delay: 0.62, type: "tween" }}
          >
            <a href="#">
              {" "}
              <FaTwitter />
            </a>
          </IconDiv>
        </Icons>
      </BottomDiv>
    </FooterDiv>
  );
};

const FooterDiv = styled.footer`
  margin: 0 5%;
  height: 40vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* border: 1px solid yellow; */
  
`;
const TopDiv = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--color1);
  @media only screen and (max-width: 1199px) {
      /* flex-direction: column; */
    }
    @media screen and (max-width: 1302px) {
      width: 80%;
    }
    @media screen and (max-width: 1000px) {
      font-size: 15px;
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      font-size: 15px;
      width: 100%;
    }
    @media screen and (max-width: 360px) {
       font-size: 10px;
    }
  /* background-color: blueviolet; */
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ContactDiv = styled(motion.div)``
const LogoImg = styled(motion.img)`
  height: 100px;
  @media only screen and (max-width: 1199px) {
      /* flex-direction: column; */
    }
    @media screen and (max-width: 1302px) {
        /* font-size: 20px; */
    }
    @media screen and (max-width: 1000px) {
        /* font-size: 17px; */
    }
    @media screen and (max-width: 600px) {
      height: 60px;
    }
    @media screen and (max-width: 360px) {
      height: 50px;
    }
`
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  a{
    text-decoration: none;
    color: var(--color1);
  }
  .detail-content{
    word-break: break-all;
  }
`
const BottomDiv = styled.div`
  height: 30%;
  width: 100%;
  border-top: 2px solid var(--color1);
  bottom: 0;
  top: 0;
  color: var(--color1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const IconDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #2c2c31;
    border-radius: 0.3rem;
    margin-left: 0.3rem;
    transition: 0.5s ease-in-out;
    svg {
        font-size: 1.2rem;
        color: white;
    }
    &:hover {
        background-color: white;
        svg {
          color: #2c2c31;
        }
    }
    @media screen and (max-width: 360px) {
      height: 2rem;
      width: 2rem;
    }
`;
const IconDivContact = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #2c2c31;
    border-radius: 0.3rem;
    margin-right: 0.3rem;
    transition: 0.5s ease-in-out;
    svg {
        font-size: 1.2rem;
        color: white;
    }
    @media screen and (max-width: 360px) {
      height: 2rem;
      width: 2rem;
    }
`;
const CopyRight = styled.div`

@media screen and (max-width: 360px) {
      font-size: 13px;
    }
`;
export default Footer;
