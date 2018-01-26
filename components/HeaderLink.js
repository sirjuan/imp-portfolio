import PropTypes from 'prop-types'
import Link from 'next/link'
import { NavLink, NavItem } from 'reactstrap'

const HeaderLink = ({ children, href }) => (
  <NavItem>
    <Link href={href}>
      <NavLink>{children}</NavLink>
    </Link>
  </NavItem>
)

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default HeaderLink
