import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'

import content from './markdown/post' // eslint-disable-line
import styles from './post.css'

const Post = props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Markdown source={content()} />
    </div>
    <style jsx>{styles}</style>
  </Layout>
)

Post.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
}

export default Post
