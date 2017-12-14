import React, { Component } from 'react';
import { connect } from 'react-redux';
import './newsContainer.css';
import NewsItem from '../components/newsItem';
import loadNews from '../loadNews';
import { closeNews, toggleBookmark, toggleSeen } from '../actions/actions'

class NewsContainer extends Component {
  render() {
    return (
    	<div className="newsContainer">
    		{this.props.newsFeed.map(newsItem => (
    				<NewsItem 
              newsItem={newsItem} 
              key={newsItem.url} 
              onClose={this.props.onClose} 
              onBookmark={this.props.onBookmark}
              onSeen={this.props.onSeen}
            />
    			))}
    	</div>
    );
  }
};

function mapStateToProps(state) {
  let newsFeed = state.newsFeed;
  if (state.filter.bookmarked) {newsFeed = newsFeed.filter(news => news.bookmarked)}
  if (state.filter.hideSeen) {newsFeed = newsFeed.filter(news => !news.seen)}
  return {newsFeed};
};

function mapDispatchToProps(dispatch, {tag}) {
  dispatch(loadNews(tag || 'all-sections'));
  return {
    onClose: (url) => dispatch(closeNews(url)),
    onBookmark: (url) => dispatch(toggleBookmark(url)),
    onSeen: (url) => dispatch(toggleSeen(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);