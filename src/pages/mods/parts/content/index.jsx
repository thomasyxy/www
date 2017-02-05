import React from 'react';
import Loading from 'fit-loading';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

require('./index.scss');

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.loadContentData = this.loadContentData.bind(this);
    this.state = {
      curPage: 1,
      loading: true
    }
  }

  componentWillMount() {
    const {
      curPage
    } = this.state;
    this.loadContentData(curPage);
  }

  loadContentData(page) {
    const {
      getData
    } = this.props;
    getData({
      page: page
    }, () => {
      this.setState({
        loading: false
      })
    })
  }

  _renderList(list) {
    return (
      <div className="content">
        {
          list && list.length > 0 ? list.map((item, index) =>
            this._renderItem(item, index)
          ) : ''
        }
      </div>
    )
  }

  _renderItem(item, index) {
    return <div className={`content-item content-item${index}`} key={index}>
      <Card>
        <CardMedia
          overlay={<CardTitle title={item.title} subtitle={item.subtitle} />}
        >
          <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
        </CardMedia>
        <CardText>
          {item.content}
        </CardText>
      </Card>
    </div>
  }

  render() {
    const {
      loading
    } = this.state;

    const {
      list
    } = this.props;

    return (
      <div className="content-container">
        { loading ? <Loading className="content-loading"/> : this._renderList(list) }
      </div>
    );
  }
}
