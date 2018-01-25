import PropTypes from 'prop-types'
import Link from 'next/link'

const style = `
  li {
    list-style: none;
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: blue;
    font-family: "Arial";
  }

  a:hover {
    opacity: 0.6;
  }
`
const PostLink = ({ post = {} }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{style}</style>
  </li>
)

PostLink.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostLink
