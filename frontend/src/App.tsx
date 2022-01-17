import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import PrivateRoute from './components/PrivateRoute';
import { RootState } from './store/store';
import { UserState } from './store/reducers/userReducer';
import { useSelector } from 'react-redux';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo } = userLogin;

  useEffect(() => {});

  return (
    <Router>
      <Header />
      <main>
        <Container>
          <PrivateRoute
            isSignedIn={userInfo ? true : false}
            path='/'
            exact
            component={HomeScreen}
          />
          <Route path='/signup' component={SignupScreen} />
          <Route path='/login' component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
