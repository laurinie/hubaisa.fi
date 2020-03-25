import React from 'react'
import Container from '../components/container'
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import base from './base.css';
class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        <Navigation/>
        {children}   
        <Footer/> 
      </Container>
    )
  }
}

export default Template
