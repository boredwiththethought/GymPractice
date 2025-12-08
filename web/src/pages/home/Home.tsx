import NavBar from '../../components/nav/NavBar'
import  Footer  from '../../components/footer/Footer'
import MainContent from './MainContent'
import Reserve from './Reserve'
import Header from './Header'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <MainContent/>
      <Reserve/>
      <Footer/>
    </>
  )
}

export default Home