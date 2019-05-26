import Rodal from 'rodal';
import React, { Component } from 'react';
import classnames from 'classnames';

import 'rodal/lib/rodal.css';
import styles from './styles.less';

class App extends Component {
  state = {
    visibleState: false,
  }

  hide = () => {
    this.setState({
      visibleState: false,
    });
  }

  render() {
    const { visibleState } = this.state;
    const {
      width,
      height,
      visible,
      children,
      onClose,
      theme,
    } = this.props;

    return (
      <div>
        <Rodal
          className={classnames(styles.rodal, styles[theme])}
          width={width}
          height={height}
          visible={visible || visibleState}
          onClose={this.props.onClose}
          animation="slideDown"
        >
          {children}
        </Rodal>
      </div>
    );
  }
}

export default App;
