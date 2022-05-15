import GlobalStyle from "./globalstyles/globalStyles";
import About from "./sections/About";
import Atualite from "./sections/Atualite";
import Footer from "./sections/footer";
import Home from "./sections/Home";
import Why from "./sections/Why";
import { motion } from "framer-motion";
import styled from "styled-components";
import Testimonial from "./sections/Testimonials";
import { useScroll } from "./components/useScroll";


function App() {
  
  const [element, controls] = useScroll();

  return (
    <DIVAPP className="App" initial="hidden" animate="show">
      <GlobalStyle />
      <Home id="home"/>
      <Div>
        <About />
        <Why />
        <Atualite />
      </Div>
      <DivGlabalTF>
          <DivFT
            ref={element}  
            animate={controls}
            id="testimonials"
          >
            <TestiDiv>
              <Testimonial />
            </TestiDiv>
            <FooteriDiv>
              <Footer/>
            </FooteriDiv>
          </DivFT>
      </DivGlabalTF>
      
    </DIVAPP>
  );
}

const DIVAPP = styled(motion.div)`
  overflow: hidden;
`
const Div = styled.div`
  background: #efe8ff;
  margin-bottom: 0px;
`;
const DivGlabalTF = styled.div`
`;
const DivFT = styled(motion.section)`
  background: var(--color2);
  margin: 0 0;
`;
const TestiDiv = styled.div`
  background: var(--color1);
    
`
const FooteriDiv = styled.div`
    background: var(--color2);
`

export default App;
