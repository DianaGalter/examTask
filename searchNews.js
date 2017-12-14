import { resetNews } from './actions/actions'

const API_KEY = '722bbc78da5c4d94b88f249b337adbd2';

function fetchNews(query) {
	return fetch ('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&api-key=' + API_KEY);
}

function searchNews(arg) {
	return function (dispatch) {
	     fetchNews(arg).then(response => response.json())
	     	.then((json) => {
	     		dispatch(resetNews(requestHandling(json)))
	     		//what's about invalid request?
	     	}
	    );
	};
}

function requestHandling(response){
	const responseArray = [];
	for (let i = 0; i < 10; i++) {
		responseArray[i] = {};
		responseArray[i].title = response.response.docs[i].headline.main;
		responseArray[i].abstract = response.response.docs[i].snippet;
		responseArray[i].url = response.response.docs[i].web_url;
		if(response.response.docs[i].section_name) {
			responseArray[i].tag = response.response.docs[i].section_name;
		} else {
			responseArray[i].tag = 'Others';
		}
	};
	return responseArray;
};

export default searchNews;
