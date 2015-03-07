// Libs
import React from 'react';

// Actions
import WatchlistActions from '../actions/WatchlistActions';

// Components
import SearchResults from './SearchResults';

const SearchResultsContainer = React.createClass({

	render() {
		return (
			<SearchResults movies={this.props.movies} results={this.props.results} onItemClick={this.onItemClick} />
		);
	},

	onItemClick(result) {
		WatchlistActions.watchlistAdd({
			movie: result,
			user: this.props.user
		});
	}
});

export default SearchResultsContainer;
