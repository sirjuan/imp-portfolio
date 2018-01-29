import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'
import content from '../markdown/lab1.md'
// import styles from './lab1.css'
// <style jsx>{styles}</style>
export default class Lab1 extends React.Component {
  render() {
    return (
      <Layout>
        <Markdown source={content} />
      </Layout>
    )
  }
}
