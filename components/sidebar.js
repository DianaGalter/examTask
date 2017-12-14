import React from 'react';
import { toggleShowBookmarks, toggleHideSeen } from '../actions/actions';
import searchNews from '../searchNews';
import { connect } from 'react-redux';
//{"menu__item " + (newsFeed.filter.bookmarked ? 'menu__item--active' : '')} 
const SideBar = ({ newsFeed, onFilterBookmarked, onFilterSeen, onSearch }) => {
  let input;
  return <div className="side-bar">
          <ul className="menu">
              <li className="menu__item"
              onClick={() => onFilterBookmarked()}>
                  <a className="menu-tags" title="Show me my faves">Bookmarks</a>

              </li>
              <li className="menu__item" onClick={() => onFilterSeen()}>
                  <a className="menu-tags" title="Hide what I marked as viewed">Hide/show viewed</a>
              </li>
              <li className="menu__item menu__item--cursor" >
                  <form className="search" onSubmit={(e) => {
                        e.preventDefault();
                        if (!input.value.trim()) return;
                        onSearch(input.value);
                        input.value ='';
                      }}  >
                      <input className="search__input" placeholder="Search" ref={node => input = node}/>
                      <span role="img" aria-label="Magnifier" className="search__icon">🔍</span>
                  </form>
              </li>
          </ul>
      </div>
  };

function mapStateToProps(state) {
  console.log(state);
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    onFilterBookmarked: () => dispatch(toggleShowBookmarks()),
    onFilterSeen: () => dispatch(toggleHideSeen()),
    onSearch: (query) => dispatch(searchNews(query)),
  };
};

  export default connect(mapStateToProps, mapDispatchToProps)(SideBar);