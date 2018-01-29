import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'

import styles from './post.css'

const Post = async (props) => {
  const content = await require('./markdown/post') // eslint-disable-line
  return (
    <Layout>
      <h1>{props.url.query.title}</h1>
      <div className="markdown">
        <Markdown source={content()} />
      </div>
      <style jsx>{styles}</style>
    </Layout>)
}

Post.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
}

export default Post
