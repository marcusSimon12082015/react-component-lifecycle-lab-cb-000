import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount = () => {
    this.setState({this.state.tweets:this.props.newTweets});
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(){
    return(nextProps.newTweets.length > this.props.tweets.length)
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    this.setState({tweets:nextProps.newTweets})
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
