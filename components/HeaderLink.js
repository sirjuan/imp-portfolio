import PropTypes from 'prop-types'
import Link from 'next/link'
import { NavLink, NavItem } from 'reactstrap';

const HeaderLink = ({ children, href }) => {
  console.log(href)
  return (
  <NavItem>
    <Link href={href}>
      <a className="nav-link">{children}</a>
    </Link>
  </NavItem>
)}

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default HeaderLink
