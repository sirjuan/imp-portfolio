import Markdown from 'react-markdown'
import Layout from '../components/MyLayout'
// import styles from './lab1.css'
// <style jsx>{styles}</style>
export default class Lab1 extends React.Component {
  state = { content: '' }

  componentWillMount = async () => {
    const content = await import('./markdown/lab1')
    this.setState({ content: content.default() })
  }

  render() {
    return (
      <Layout>
        <Markdown source={this.state.content} />
      </Layout>
    )
  }
}
