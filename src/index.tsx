import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.less'

class Root extends React.Component {
  render() {
    return <div>123</div>;
  }
}

ReactDOM.render(<Root />, document.getElementById('appContainer'));
