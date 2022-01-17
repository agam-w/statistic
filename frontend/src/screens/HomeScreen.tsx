import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { UserState } from '../store/reducers/userReducer';
import { LineChart } from '../components/LineChart';
import { PieChart } from '../components/PieChart';
import { BarChart } from '../components/BarChart';
import { Container, Row, Col } from 'react-bootstrap';
import { TableView } from '../components/TableView';

const HomeScreen = () => {
  const userLogin = useSelector<RootState, UserState>(state => state.userLogin);

  const { userInfo } = userLogin;
  const username = userInfo ? userInfo.username : null;

  return (
    <Container>
      <Row>
        <Col sm className='d-flex align-items-center justify-content-center'>
          <PieChart />
        </Col>
        <Col sm className='d-flex align-items-center justify-content-center'>
          <LineChart />
        </Col>
        <Col sm className=' d-flex align-items-center justify-content-center'>
          <BarChart />
        </Col>
      </Row>
      <Row>
        <TableView />
      </Row>
    </Container>
  );
};

export default HomeScreen;
