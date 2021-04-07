// import { Link } from 'gatsby'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap'
import { Flex, Box, Heading, jsx } from 'theme-ui'


const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <h2 className="opgov">The Open Discussion Project</h2>
                            </Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to='/manual'>
                            <Nav.Link className="subitem0"> Manual </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/opDis'>
                            <Nav.Link className="subitem0">OpDis</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </header>
    )
}

export default Header
