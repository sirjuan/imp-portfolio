
import { Form, Label, Input, Card, CardImg, CardColumns, CardSubtitle, CardBody } from 'reactstrap'
import Layout from '../components/MyLayout'

const debounce = (func, wait, immediate) => {
  let timeout
  return (props) => {
    const later = () => {
      timeout = null
      if (!immediate) func(props)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func(props)
  }
}

export default class Lab6 extends React.Component {
  state = { images: [], input: '' }

  getPhotos = debounce((tag) => {
    fetch(`/flickr/${tag}`)
      .then(res => res.json())
      .then(({ items, title }) => this.setState({ title, images: items }))
      .catch(console.log) // eslint-disable-line no-console
  }, 300)

  handleChange = ({ target }) => {
    const { value } = target
    this.setState({ input: value })
    this.getPhotos(value)
  }

  render() {
    const { images = [], input } = this.state
    return (
      <Layout>
        <Form>
          <Label for="search">Search</Label>
          <Input type="text" name="search" onChange={this.handleChange} value={input} />
        </Form>
        <h1>{this.state.title}</h1>
        <CardColumns>
          { images.map(({ title, media }) => (
            <Card>
              <CardImg top width="100%" src={media.m} alt={title} />
              <CardBody>
                <CardSubtitle>{title}</CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
      </Layout>
    )
  }
}
