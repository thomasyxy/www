
import React, { PropTypes } from 'react';
import assign from 'object-assign';
import marked from 'marked';

import Paper from 'material-ui/Paper';

class ResumeView extends React.Component {
  constructor (props) {
    super(props);
    this.state = assign({}, props, {

    });

    this._renderResume = this._renderResume.bind(this);
  }

  componentWillMount() {
    // this.getInitData();window.print();
  }

  _renderResume(resume) {
    let html = marked(resume.text)
    return <Paper
      className="view-container markdown-body"
      style={{padding: 20}}
      zDepth={3}>
      <h1 className="view-title">{resume.title}</h1>
      <div className="view-content" dangerouslySetInnerHTML={{__html: html}}></div>
    </Paper>
  }

  render() {
    let {
      resume
    } = this.props;
    return (
      <div className="view-page">
        { resume ? this._renderResume(resume) : '' }
      </div>
    );
  }
}

export default ResumeView;
