import * as React from 'react';
import styled from 'styled-components';
import { FaCommentAlt,FaHome, FaUserCircle, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container , Row , Col } from 'react-bootstrap';

export const Navigation = styled.div`
    background-color : #3a539b;
    display : flex;
    height : 45px;
    color : white;
    flex-direction : row;
    align-items : center;
    position : 'fixed';
    top: 0;
    left : 0;
`;

const Content = styled.div`
    margin : 0 auto;
    width : 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items : center;
`;

const Brand = styled.h5`
    color : 'white';
`;

const Menu = styled.div`
    color : 'white';
    display : flex ;
`;

const MenuItem = styled.div`
    color : 'white';
    padding : 0px 20px;
    display : flex;
    font-size : 18px;
    flex-direction : column;
    cursor : pointer;
`;



function Navbar(){
    return(
        <Navigation>
            <Container>
            <Row>
                <Col lg = {1}></Col>
                <Col lg = {10}>
                <Content>
            <Brand>TeenagersForum</Brand>
            <Menu>
                <MenuItem>
                  <Link to = '/Feed' style={{color : 'white'}}>
                  <FaHome/>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to = '/MyNetwork' style={{color : 'white'}}>
                  <FaUsers/>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to = '/Chats' style={{color : 'white'}}>
                  <FaCommentAlt/>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to = '/Profile' style={{color : 'white'}}>
                  <FaUserCircle/>
                  </Link>
                </MenuItem>
            </Menu>
            </Content>
                </Col>
                <Col lg = {1}></Col>
            </Row>
            
            </Container>
        </Navigation>
    )
}

export default Navbar;