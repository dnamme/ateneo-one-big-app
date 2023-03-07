import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import * as Auth from './../../context/Auth'

import './Home.css'

import NotificationCard from '../../components/notification-card';
import Timetable from '../../components/timetable'
import Card from '../../components/class-card';

function HomePage() {
  const user = useContext(Auth.Context)
  if (!user) return <Navigate to="/login" />

  return (
    <>
      <h1>Home Page</h1>
      <NotificationCard text="Hello there!" />
    </>
  )
}

export default HomePage