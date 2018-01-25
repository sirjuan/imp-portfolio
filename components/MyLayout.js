import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import Header from './Header'


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

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
