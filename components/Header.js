import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import stylesheet from 'styles/styles.scss' // eslint-disable-line
// import 'jquery/dist/jquery'
// import 'bootstrap/dist/js/bootstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import HeaderLink from './HeaderLink'

const style = `
  .navbar-dark a:not([href]).navbar-brand {
    color: #fff;

  }
  .navbar-dark a:not([href]).navbar-brand:hover {
    cursor: pointer;
  }
`

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Head>
          <style
            dangerouslySetInnerHTML={// eslint-disable-line
              { __html: stylesheet }
            }
          />
        </Head>
        <Navbar color="dark" dark expand="md">
          <Link href="/">
            <NavbarBrand>Portfolio</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <HeaderLink href="/about">About</HeaderLink>
              <HeaderLink href="/posts">Posts</HeaderLink>
              <HeaderLink href="https://github.com/reactstrap/reactstrap">Github</HeaderLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx global>{style}</style>
      </div>

    )
  }
}
