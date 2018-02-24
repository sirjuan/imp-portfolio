import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'
import content from '../markdown/lab5.md'
import CodePen from '../components/CodePen'
// import styles from './lab1.css'
// <style jsx>{styles}</style>

const Lab5 = () => (
  <Layout>
    <CodePen />
    <Markdown source={content} escapeHtml={false} />
  </Layout>
)

export default Lab5
