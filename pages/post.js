import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'
import styles from './post.css'

export default class Post extends React.Component {
  propTypes = {
    url: PropTypes.shape({
      query: PropTypes.shape({
        title: PropTypes.string,
      }),
    }).isRequired,
  }

  state = { content: '' }

  componentWillMount = async () => {
    const content = await import('../markdown/post.md')
    this.setState({ content })
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.url.query.title}</h1>
        <div className="markdown">
          <Markdown source={this.state.content} />
        </div>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
