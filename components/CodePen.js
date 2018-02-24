import React from 'react'
import PropTypes from 'prop-types'

const isBrowser = typeof window === 'object'
const hasScript = () => !!window.__CPEmbed // eslint-disable-line no-underscore-dangle

const injectScript = () => {
  const script = document.createElement('script')

  script.async = true
  script.type = 'text/javascript'
  script.src = '//production-assets.codepen.io/assets/embed/ei.js'

  document.head.appendChild(script)
}

export default class CodePen extends React.Component {
  static propTypes = {
    delay: PropTypes.number,
  }

  static defaultProps = {
    delay: 1000,
  }

  componentDidMount() {
    if (!isBrowser) return

    this.timer = hasScript()
      ? setTimeout(window.__CPEmbed, this.props.delay) // eslint-disable-line no-underscore-dangle
      : setTimeout(injectScript, this.props.delay)
  }

  componentWillUnmount() { clearTimeout(this.timer) }

  timer = null

  render() {
    return null
  }
}

CodePen.defaultProps = {
  delay: 1000,
}

CodePen.propTypes = {
  delay: PropTypes.number,
}
