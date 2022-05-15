import styled from "styled-components";
import { Menu } from "./menu";
import Logo from "../assets/HornCodeLogo.svg";
import { motion } from "framer-motion";
import { navbarAnimation } from "../utils/Animations";
import { useState } from "react";


const NavBar = () => {

  const [navbar, setNavbar] = useState(false);
  const [menuOption, setMenuOption] = useState(false);
  

  const Navigation = ()=>{
    return(
      <List id="menu" >
      {Menu.map((val) => {
        return (
          <Lister 
          className={navbar ? "yes" : ""} 
          onClick={handleClick}
          >
            <TitleStyle 
              href={val.link} key={val.id}>
              {val.title}
            </TitleStyle>
          </Lister>
        );
      })}
    </List>
    )
  }
  const handleClick = (e) => {
    const target = e.target.getAttribute('href');
    // const location = document.querySelector(target).offsetTop;
  }
  const openHandler = ()=>{
    setMenuOption(!menuOption)
}

  return (
    <Container
    // variants={!menuOption ? navbarAnimation :""}
    // transition={{ delay: 0.1 }}
    >
      <LogoContent
        variants={navbarAnimation}
        transition={{ delay: 0.2}}
      >
        <ImageLogo src={Logo} />
      </LogoContent>
      <MenuList id="menuhumbercontrller">
        <List id="menu"
          variants={navbarAnimation}
          transition={{ delay: 0.4}}
        >
          {Menu.map((val) => {
            return (
              <Lister 
              className={navbar ? "yes" : ""} 
              onClick={handleClick}
              >
                <TitleStyle href={val.link} key={val.id}>
                  {val.title}
                </TitleStyle>
              </Lister>
            );
          })}
        </List>
      </MenuList>
        <IconoOpen 
        onClick={openHandler} 
        id={!menuOption ? "open" : ""}
        variants={navbarAnimation}
        transition={{ delay: 0.3}}>
          <IconBuild />
          <IconBuild />
          <IconBuild />
        </IconoOpen>
        
      <MenuHumber id={menuOption ? "active" : ""}>
      <IconoClose id={menuOption ? "close" : ""} onClick={openHandler}>
          <IconBuildx />
          <IconBuildx />
          <IconBuildx />
        </IconoClose>
        <div className="navigate">
          <Navigation  />
        </div>
      </MenuHumber>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center;
`;
const LogoContent = styled(motion.div)`
  margin: 5px 0px 5px 0px;
  width: 100px;
  height: auto;

`;
const MenuList = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const ImageLogo = styled.img`
  max-height: 100px;
  @media screen and (max-width: 600px) {
      width: 95px;  
  }
  @media screen and (max-width: 360px) {
      width: 90px;
    }
  
`;
const List = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: row;
`;
const Lister = styled.li`
  color: ${(props) => (props.className === "yes" ? "#2C3E50 " : "")};
`;
const TitleStyle = styled(motion.a)`
  display: block;
  padding: 1em 1em;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  color:  var(--color1);
  /* color: #fff; */
  /* background: ${(props) => (props.id === "selected" ? "#3498DB" : "")}; */
  &:hover {
    color: var(--color2);;
  }
`;



// HenuHumber

const  MenuHumber = styled.div`
  width: 50%;
  height: 100vh;
  position: fixed;
  background:#5D6D7E;
  right: 0;
  top: 0px;
  z-index: 100;
  display: none;

  .navigate{
    margin-top: 100px;
  }
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    a{
      color:  var(--color1);
      float: left;
      font-weight: bold;
    }
  }
  
  
  @media only screen and (max-width: 1024px) {
    display: ${props => props.id === "active" ? "block" : "none"};
  }
`
// icon build

const IconoOpen = styled(motion.div)` 
  display: none;
  @media only screen and (max-width: 1024px) {
    display: ${props => props.id === "open" ? "block" : "none"};
    z-index: 101;
  }
`;
const IconoClose = styled.div` 
  display: none;
  z-index: 101;
  @media only screen and (max-width: 1024px) {
    display: ${props => props.id === "close" ? "block" : "none"};
    float: right;
    margin-top: 20px;
    margin-right: 27px;
  }
`;
const IconBuild = styled.div`
  width: 40px;
  height: 7px;
  background-color: #1b2631;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 5px;
  }
`;
const IconBuildx = styled.div`
  width: 30px;
  height: 5px;
  background-color: var(--color1);
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  &:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  &:nth-child(2) {
    opacity: 0;
  }
`;
export default NavBar;
