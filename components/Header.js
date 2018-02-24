import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import stylesheet from 'styles/styles.scss' // eslint-disable-line
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap'
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
              <HeaderLink href="/lab1">Lab 1</HeaderLink>
              <HeaderLink href="/lab2">Lab 2</HeaderLink>
              <HeaderLink href="/lab3">Lab 3</HeaderLink>
              <HeaderLink href="/lab4">Lab 4</HeaderLink>
              <HeaderLink href="/lab4">Lab 5</HeaderLink>
              <HeaderLink href="/lab4">Lab 6</HeaderLink>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx global>{style}</style>
      </div>

    )
  }
}
