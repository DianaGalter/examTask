const news = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SEEN':
      if (state.url !== action.url) {
        return state;
      }
      return {
        ...state,
        seen: !state.seen,
      };
      case 'TOGGLE_BOOKMARK':
      if (state.url !== action.url) {
        return state;
      };
      return {
        ...state,
        bookmarked: !state.bookmarked,
      };
    default:
      return state;
  }
};

const newsFeed = (state = [], action) => {
  switch (action.type) {
    case 'RESET_NEWS':
      return action.newsFeed;
    case 'TOGGLE_SEEN':
      return state.map(n =>
        news(n, action)
      );
      case 'TOGGLE_BOOKMARK':
        return state.map(n => news(n, action));
      case 'CLOSE':
        let index;
        state.forEach(({url}, i) => {
          if(action.url === url) {
            index = i;
          }
        });
        const newState = state.slice();
        newState.splice(index, 1);
        return newState;
    default:
      return state;
  }
};

export default newsFeed;