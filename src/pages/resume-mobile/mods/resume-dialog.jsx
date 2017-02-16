
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import classnames from 'classnames';

import Dialog from 'material-ui/Dialog';

class ResumeDialog extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {
      visible,
      title,
      content,
      actions
    });
  }

  componentWillMount() {
  }

  handleDialogClose() {
    this.setState({
      visible: false,
      title: '',
      content: '',
      actions: ''
    })
  }

  render() {
    const {
      visible,
      title,
      content,
      actions
    } = this.state;

    const classNames = classnames('resume-dialog', {
      [`${className}`]: className
    });

    const actions = [
      <RaisedButton
        label="取消"
        onTouchTap={this.handleDialogClose}
      />,
      <RaisedButton
        label="确定"
        primary={dialogAllow}
        disabled={!dialogAllow}
        onTouchTap={this.handleDialogConfirm}
      />
    ];

    return <Dialog
      className={`${classNames}`}
      title={title}
      actions={actions || actions}
      modal={false}
      open={visible}
      onRequestClose={this.handleDialogClose}
    >
      {content}
    </Dialog>
  }
}

BlueMarketingCalendar.defaultProps = {
  className: '',
  title: '',
  content: '',
  actions: '',
  ok: () => {},
  cancel: () => {},
  visible: false
};

BlueMarketingCalendar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.number,
  content: PropTypes.number,
  actions: PropTypes.array,
  ok: PropTypes.func,
  visible: PropTypes.Boolean,

};

export default ResumeDialog;
