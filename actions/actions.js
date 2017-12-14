export const closeNews = (url) => ({
	type: 'CLOSE',
	url
});
export const toggleBookmark = (url) => ({
	type: 'TOGGLE_BOOKMARK',
	url,
});

export const toggleSeen = (url) => ({
	type: 'TOGGLE_SEEN',
	url,
});

export const search = (text) => ({
	type: 'SEARCH',
	text,
});


export const resetNews = (newsFeed) => ({
	'type': 'RESET_NEWS',
	newsFeed,
});

export const toggleShowBookmarks = () => ({
	'type': 'TOGGLE_SHOW_BOOKMARKS',
});

export const toggleHideSeen = () => ({
	'type': 'TOGGLE_HIDE_SEEN',
});