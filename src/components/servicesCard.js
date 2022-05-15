import styled from "styled-components";
import { motion } from "framer-motion";
import { WhyCartAnimation } from "../utils/Animations";


const ServiceCart = ({Icone, Title}) => {
    return ( 
        <Div
            variants={WhyCartAnimation}
            transition={{ delay: 0.7 }}
        >
            <Icon >{Icone}</Icon>
            <H3>{Title}</H3>
        </Div>
     );
}
 
const Div =  styled(motion.div)`
    background:#FDFEFE;
    border: none;
    border-radius: 10px;
    margin: 10px;
    width: 25%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
        width: 80%;
        height: 200px;
        margin-bottom: 5px;
    }
`
const Icon =  styled.div`
    svg{
        font-size: 3rem;
        fill: var(--color2);
    }
`
const H3 =  styled.h3`
    text-align: center;
`
export default ServiceCart;