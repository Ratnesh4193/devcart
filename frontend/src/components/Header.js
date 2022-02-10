import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
	return (
		<>
			<Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>MernShop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Container>
							<Nav className='ml-auto'>
								<LinkContainer to='/cart'>
									<Nav.Link>
										<i className='fa fa-shopping-cart'></i>CART
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/login'>
									<Nav.Link href='#link'>
										<i className='fa fa-user'></i>SIGN IN
									</Nav.Link>
								</LinkContainer>
							</Nav>
						</Container>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
