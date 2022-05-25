import React from 'react'
import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Viewmusaa from '././../secundaria/primeros/primeroa/Viewmusaa'


const NavbarPractica = () => {
  return (
   <>
   <Viewmusaa/>
   

    <div>
        
        <Navbar bg="light"  expand={false}>
  <Container fluid>
     
    <Navbar.Brand href="/practicas">
        
       PRACTICAS
        
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      
        
      
      
     
      <Offcanvas.Body closeButton>
    
      
        <Nav className="justify-content-end flex-grow-1 pe-3">
          
     
         
           
           
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
        
        <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Practicas</Offcanvas.Title>
      </Offcanvas.Header>
        <NavDropdown title="Opciones" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="registrarpractica">Registrar Practica</NavDropdown.Item>
           
            <NavDropdown.Item href="/verpracticas">
              Ver Practicas
            </NavDropdown.Item>
            
            
          </NavDropdown>
          </Nav> 
      </Offcanvas.Body> 
       
    </Navbar.Offcanvas> 
   
   
   
  </Container> 
  
</Navbar>

        </div>
        </>
  )
}

export default NavbarPractica