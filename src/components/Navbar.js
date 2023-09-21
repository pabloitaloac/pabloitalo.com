import React, { useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import sun from '../Assets/sun.svg'
import  {useTheme} from "./themetype";
import { useNavigate } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import ReactFlagsSelect from "react-flags-select";
import { loading } from "./Loading/Loading";

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb': {
        backgroundColor: 'rgba(0, 43, 177)',
      },    
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'white',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'rgba(241, 255, 51)',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        'black',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },




  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: 'rgba(215, 225, 255)',
    borderRadius: 20 / 2,
  },
}));





function NavBar() {
  const {nightMode,toggleTheme,datatoShow, toggletranslation}=useTheme()
  useEffect(() => {
    loading()
  }, []); 

  const width = window.screen.width
  const navigate = useNavigate()
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [selected, setSelected] = useState(localStorage.getItem('country')||'US');


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true); 
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      id="navbar"
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{backgroundColor:!nightMode&&'black', zIndex:'99999999'}}
    >
      <Container>


        <Navbar.Brand  className="d-flex" onClick={()=>{loading();window.scrollTo(0, 0);navigate('/')}}>
          <img src={logo}  
          alt="brand" 
          style={{maxWidth: "120px", cursor:'pointer'}}
          />


        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home" style={{display:'flex', alignItems:'center', justifyContent:'right',  }}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => {loading();updateExpanded(false)}}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {datatoShow.navbar1}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {loading();updateExpanded(false)}}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {datatoShow.navbar2}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => {loading();updateExpanded(false)}}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {datatoShow.navbar3}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {loading();updateExpanded(false)}}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {datatoShow.navbar4}
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn" style={{display:'flex'}}>
              <Button
                href="https://github.com/pabloitaloac"
                target="_blank"
                className="fork-btn-inner"
                
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            <Nav.Item style={{display:'flex',marginTop:width<700&&'10px'}}>
            <ReactFlagsSelect
              countries={["US", "BR", ]}
              customLabels={{"US": "English","BR": "Português", "ES":"Español", "JP": "日本人"}} 
              selected={selected}
              onSelect={(code) => {loading();setSelected(code); toggletranslation(code);  }}
              className="menu-flags"
              selectButtonClassName="menu-flags-button"

              />;
            </Nav.Item>
            <Nav.Item style={{display:'flex',marginTop:width<700&&'10px'}}>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} checked={nightMode} onClick={()=>{loading();toggleTheme()}}  />}
                style={{margin:'auto'}}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
