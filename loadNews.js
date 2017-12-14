import { resetNews } from './actions/actions'

const API_KEY = '722bbc78da5c4d94b88f249b337adbd2';

function fetchNews(section) {
	return fetch ('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/' + section + '/1.json?api-key=' + API_KEY);
}

function loadNews(arg) {
	return function (dispatch) {
	     fetchNews(arg).then(response => response.json())
	     	.then((json) => {
	     		dispatch(resetNews(requestHandling(json)))
	     	}
	        // success => dispatch(resetNews(requestHandling(success))),
	        // error => dispatch(),
	    );
	};
}

function requestHandling(response){
	const responseArray = [];
	for (let i = 0; i < 10; i++) {
		responseArray[i] = {};
		responseArray[i].title = response.results[i].title;
		responseArray[i].abstract = response.results[i].abstract;
		responseArray[i].url = response.results[i].url;
		switch(response.results[i].section) {
			case 'World':
				responseArray[i].tag = "World";
				break;
			case 'Health':
				responseArray[i].tag = "Health";
				break;
			case 'Business Day':
				responseArray[i].tag = "BusinessDay";
				break;
			case 'Sports':
				responseArray[i].tag = "Sports";
				break;
			default:
				responseArray[i].tag = "Others";
		};
	};
	return responseArray;
};

export default loadNews;
