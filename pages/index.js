import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'
import PostLink from '../components/PostLink'
import content from '../markdown/index.md'

const Index = () => (
  <Layout>
    <Markdown source={content} escapeHtml={false} />
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}
    </style>
  </Layout>
)

export default Index
