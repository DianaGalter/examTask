import { combineReducers } from 'redux';
import newsFeed from './news';
import filter from './filter';

const newsApp = combineReducers({
 	newsFeed,
 	filter,
});

export default newsApp;