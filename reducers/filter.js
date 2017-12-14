const filter = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_BOOKMARKS':
      return {
        ...state,
        bookmarked: !state.bookmarked,
      };
     case 'TOGGLE_HIDE_SEEN':
      return {
        ...state,
        hideSeen: !state.hideSeen,
      };
    default:
      return state;
  }
};

export default filter;