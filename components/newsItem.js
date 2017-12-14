import React from 'react';

const NewsItem = ({newsItem, onClose, onBookmark, onSeen}) => (
	<article className="news-item">
        <div className="news-item__title">
        	<a href={newsItem.url} className="news-item__link" target="_blank" rel="noopener noreferrer" >{newsItem.title}</a>
        </div>
        <div className="news-item__body">{newsItem.abstract}<br />
        	<a className="news-item__tag">#{newsItem.tag}</a>
        </div>
        <div className="news-item__close" title="Close this article" onClick={() => onClose(newsItem.url)}></div>
        <a className={"news-item__bookmark " + (newsItem.bookmarked ? 'news-item__bookmark--active' : '')} 
            title="Bookmark it!" 
            onClick={() => onBookmark(newsItem.url)}>
        </a>
        <a className={"news-item__seen " + (newsItem.seen ? 'news-item__seen--active' : '')} 
            title="I have already seen that" 
            onClick={() => onSeen(newsItem.url)}>
        </a>
    </article>
);

export default NewsItem;