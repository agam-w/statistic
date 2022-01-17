import { SyntheticEvent } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/userAction';
import { RootState } from '../store/store';
import { UserState } from '../store/reducers/userReducer';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo } = userLogin;

  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logout());
    window.location.reload();
  };

  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>
          {userInfo ? userInfo.username : 'Statistic Dashboard'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {userInfo ? (
            <Nav className='ms-auto'>
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav className='ms-auto'>
              <Nav.Link href='/signup'>Sign Up</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
