import * as React from 'react';
import styled from 'styled-components';
import { FaCommentAlt,FaHome, FaUbuntu, FaUserCircle, FaUsers } from 'react-icons/fa';
import { MdOutlineDangerous } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container , Row , Col} from 'react-bootstrap';

export const Navigation = styled.div`
    background-color : #fff;
    display : flex;
    height : 50px;
    flex-direction : row;
    align-items : center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position : 'fixed'
`;

const Content = styled.div`
    margin : 0
    width : 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items : center;
`;

const Brand = styled.h6`
    color : 'black';
    font-size : 18px;
    font-weight : 600;
    line-height : 50px;
    padding-right : 20px;
`;

const Menu = styled.div`
    color : '#cecece';
    display : flex ;
    flex-direction : column;
`;

const MenuItem = styled.div`
    padding-left : 8px;
    display : flex;
    cursor : pointer;
    display : flex;
    flex-direction : row;
    color : '#95a5a6';
`;


const NavbarContainer = styled.div.attrs(props => ({
  }))`
    width : 200px;
    height : 100vh;
    background : #fff;
    display : flex;
    flex-direction : column;
    position : fixed;
    top : 0; 
    right : ${props => (props.isOpen ? "0" : "-200px")};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
`;



function NavbarMenu(props){
    return(
        <>
        <NavbarContainer isOpen = {props.isOpen}>
        <MdOutlineDangerous 
           style = {{ fontSize : '50px', padding : '10px 10px', cursor: 'pointer'}}
           onClick = {props.handleSidebar}   
        />
        <Menu>
                <MenuItem>
                  <Link to = '/Feed' style={{color : '#95a5a6'}}>
                  <FaHome  style = {{ fontSize : '28px'}}/>
                  </Link>
                  <p>Feed</p>
                </MenuItem>
                <MenuItem>
                  <Link to = '/MyNetwork' style={{color : '#95a5a6'}}>
                  <FaUsers/>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to = '/Chats' style={{color : '#95a5a6'}}>
                  <FaCommentAlt/>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <FaUserCircle style={{color : '#95a5a6'}}/>
                </MenuItem>
                </Menu>
        </NavbarContainer>
        </>
    )
}

function Navbar(){

    const [isOpen, setOpen] = React.useState(false);
    const handleSidebar = () => {
        if(isOpen){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
    }

    return(
        <>
        <Navigation>
            <Container>
            <Row>
                <Col lg = {1}/>
                <Col lg = {10} xs = {12}>
                <Content>
                <Brand>
                Ubuntu
                <span><FaUbuntu/></span>
                </Brand>
                <AiOutlineMenu 
                  onClick = {handleSidebar}
                  style = {{ fontSize : '26px', cursor : 'pointer'}}
                  />
                </Content>
                </Col>
                <Col lg = {1}/>
            </Row>
            </Container>
        </Navigation>
        <NavbarMenu isOpen = {isOpen} handleSidebar = {handleSidebar}/>
        </>
    )
}

export default Navbar;