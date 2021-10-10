import * as React from 'react';
import styled from 'styled-components';
import { FaCommentAlt,FaHome, FaUserCircle, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navigation = styled.div`
    background-color : #3a539b;
    display : flex;
    width : 100%;
    height : 45px;
    color : white;
    flex-direction : row;
    align-items : center;
    margin : 0 auto;
    justify-content : 'space-around'
`;

const Content = styled.div`
    margin : 0 auto;
    width : 960px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items : center;

    @media only screen and (max-width: 728px) {
        width : 400px;
        padding : 0 30px;
    }
`;

const Brand = styled.h3`
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
                  <FaCommentAlt/>
                </MenuItem>
                <MenuItem>
                  <Link to = '/Profile' style={{color : 'white'}}>
                  <FaUserCircle/>
                  </Link>
                </MenuItem>
            </Menu>
            </Content>
        </Navigation>
    )
}

export default Navbar;