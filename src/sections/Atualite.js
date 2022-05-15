import styled from "styled-components";
import Blogs from "../components/blogs";
import Image from "../assets/blogImage2.jpg";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { WhyHeaderAnimation, BlogCartAnimation } from "../utils/Animations";

const Atualite = () => {
  const [element, controls] = useScroll();

  const text =
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.";

  return (
    <Section ref={element} animate={controls} id="blog">
      <motion.div
        variants={WhyHeaderAnimation}
        transition={{ delay: 0.2, type: "tween" }}
        className="header"
      >
        <Title>Our Blogs</Title>
        <P>Read our Blog </P>
      </motion.div>

      <Blog
        variants={BlogCartAnimation}
        transition={{ delay: 0.3, type: "tween" }}
      >
        <Blogs title={"Hello world"} image={Image} subTitle={text} />
        <Blogs title={"Hello world"} image={Image} subTitle={text} />
        <Blogs title={"Hello world"} image={Image} subTitle={text} />
      </Blog>
    </Section>
  );
};

const Section = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;

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
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.h1`
  margin-top: 0px;
`;
const Blog = styled(motion.div)`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  /* background-color: red; */
  height: 500px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 600px) {
    height: 500px;
  }
  @media screen and (max-width: 360px) {
    height: 430px;
  }
`;
const P = styled.p`
  margin-top: 0px;
  text-align: center;
`;
export default Atualite;
