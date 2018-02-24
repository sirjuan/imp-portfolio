import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'
import content from '../markdown/lab2.md'
import CodePen from '../components/CodePen'

const Lab2 = () => (
  <Layout>
    <CodePen />
    <Markdown className="markdown" source={content} escapeHtml={false} />
  </Layout>
)

export default Lab2
