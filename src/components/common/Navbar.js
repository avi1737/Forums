import * as React from 'react';
import styled from 'styled-components';
import { FaCommentAlt,FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { MdOutlineDangerous } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container , Row , Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../../actions/auth';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

export const Navigation = styled.div`
    background-color : #fff;
    display : flex;
    height : 60px;
    flex-direction : row;
    align-items : center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position : sticky;
    top : 0;
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

const Menu = styled.ul`
   list-style : none;
   width : 100%;
`;


const MenuItem = styled.li`
    margin : 10px 0px;
    cursor : pointer;
    color : '#95a5a6';
    font-size : '18px';
    text-decoration : none;
    display : flex;
    justify-content: space-between;
    align-items : center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 3px 0px;
    padding : 0px 20px;
`;


const NavbarContainer = styled.div.attrs(props => ({
  }))`
    width : 250px;
    height : 100vh;
    background : #fff;
    display : flex;
    flex-direction : column;
    position : fixed;
    top : 0; 
    right : ${props => (props.isOpen ? "0" : "-250px")};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;

`;



function NavbarMenu(props){

    const dispatch = useDispatch();
    const history = useHistory();


    const handleSignout = () => {
        dispatch(clearAuth());
        toast.info('You are logged out!');
        history.push(`${process.env.PUBLIC_URL}/Login`);
    }

    return(
        <>
        <NavbarContainer isOpen = {props.isOpen}>
        <MdOutlineDangerous 
           style = {{ fontSize : '50px', padding : '10px 10px', cursor: 'pointer'}}
           onClick = {props.handleSidebar}   
        />
        <Menu>
                <MenuItem>
                  <div>
                    <FaHome/>
                  </div>
                  <div>
                    <Link 
                     to = '/Feed' 
                     style={{color : '#000', textDecoration: 'none',fontSize: '16px', fontWeight: 'bold'}}
                     >
                     Feeds
                    </Link>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div>
                  <FaUsers/>
                  </div>
                  <div>
                  <Link to = '/MyNetwork' style={{color : '#000',textDecoration: 'none',fontSize: '16px', fontWeight: 'bold'}}>
                  My Network
                  </Link>
                  </div>
                </MenuItem>


                <MenuItem>
                  <div>
                  <FaCommentAlt/>
                  </div>
                  <div>
                  <Link to = '/Chats' style={{color : '#000',textDecoration: 'none',fontSize: '16px',fontWeight: 'bold'}}>
                  
                  Chats
                  </Link>
                  </div>
                </MenuItem>


                <MenuItem>
                  <FaSignOutAlt/>
                  <span style={{fontWeight: 'bold'}} onClick = {handleSignout}>Logout</span>
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
                Bumble
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