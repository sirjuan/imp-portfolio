import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import Header from './Header'

const Layout = props => (
  <div>
    <Header />
    <Container>
      {props.children}
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
