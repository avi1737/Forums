import * as React from 'react';
import styled from 'styled-components';
import { BsBell } from 'react-icons/bs';
import { IoIosPeople, IoIosSettings } from 'react-icons/io'
import { BsChatSquareDots } from 'react-icons/bs'

import { Link } from 'react-router-dom';
import { Container , Row , Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../../actions/auth';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

import { GrEdit, GrHomeRounded } from 'react-icons/gr';
import { FiLogOut } from 'react-icons/fi';
import { ProfileImage } from '../home/Post';

export const Navigation = styled.div`
    background-color : #fff;
    display : flex;
    height : 55px;
    flex-direction : row;
    align-items : center;
    box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
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

const CreatorProfile = styled.div`
    width : 30px;
    height : 30px;
    position : relative;
    cursor : pointer;
`;

const Brand = styled.h4`
    color : 'dodgerblue';
    font-size : 18px;
    font-weight : 600;
    width : 50%;
`;

const DropdownMenu = styled.div`
   width : 120px;
   height : auto;
   min-height : 100px;
   background : white;
   position : absolute;
   top : 50px;
   left : -70px;
   border-radius : 4px;
   padding : 8px;
   box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;

   @media only screen and (max-width: 728px) {
    left : -90px;
  }
`;

const DropdownUL = styled.div`
   list-style : none;
   
`;

const DropdownLI = styled.li`
   width : 100%;
   font-size : 14px;
   padding : 4px 0px;
   display : flex;
   justify-content : space-around;
   align-items : center;
   background-color : #e8ecf1;
   border-radius : 4px;
   margin : 4px 0;
`;



// for the new navbar

const MenuContainer = styled.div`
    display : flex;
    align-items : center;
    flex : 1fr 1fr 1fr 1fr 1fr;
    width : 50%;
`;

const Menu = styled.div`
    width : 100%;
    font-size : 22px;
`;



function Navbar(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [isOpen , setOpen] = React.useState(false);

    function handleOpenMenu(){
      if(isOpen){
        setOpen(false);
      }
      else{
        setOpen(true);
      }
    }

    const handleSignout = () => {
        dispatch(clearAuth());
        toast.info('You are logged out!');
        history.push(`${process.env.PUBLIC_URL}/Login`);
    }

    return(
        <>
        <Navigation>
            <Container>
            <Row>
                <Col lg = {1}/>
                 <Col lg = {10}>
                  <Content>
                   <div>
                    <Brand>
                      okCupid
                    </Brand>
                   </div> 
                   
                   <MenuContainer>
                     
                     <Menu>
                       <Link to = '/Feed'> 
                        <GrHomeRounded/>
                       </Link>
                     </Menu>
                     

                     <Menu>
                       <Link to = "/Notification">
                       <BsBell/>
                       </Link>
                     </Menu>

                     <Menu>
                       <Link to = '/MyNetwork'>
                       <IoIosPeople/>
                       </Link>
                     </Menu>

                     <Menu>
                       <Link to = '/Chats'>
                       <BsChatSquareDots/>
                       </Link>
                     </Menu>

                     <Menu>
                        <CreatorProfile onClick = {handleOpenMenu}>
                        <ProfileImage 
                        url = "http://res.cloudinary.com/dh9al6qks/image/upload/v1634477233/gjmp1ktataouy3w7psir.jpg" />
                        {
                          isOpen &&
                         <DropdownMenu>
                           <DropdownUL>

                             <Link to = '/Profile' style = {{ textDecoration : 'none' , color : 'black'}}>
                             <DropdownLI>
                               <GrEdit/>
                               Profile
                             </DropdownLI>
                             </Link>

                             <Link to = '/Settings' style = {{ textDecoration : 'none' , color : 'black'}}>
                             <DropdownLI>
                               <IoIosSettings/>
                               Settings
                               </DropdownLI>
                             </Link>

                             <DropdownLI onClick = {handleSignout}>
                               <FiLogOut/>
                               Log out
                             </DropdownLI>

                           </DropdownUL>
                         </DropdownMenu>
                         }
                       </CreatorProfile>
                     </Menu>

                   </MenuContainer>

                  </Content>
                 </Col>
                <Col lg = {1}/>
            </Row>
            </Container>
        </Navigation>
        </>
    )
}

//{/* <NavbarMenu isOpen = {isOpen} handleSidebar = {handleSidebar}/> */}

export default Navbar;