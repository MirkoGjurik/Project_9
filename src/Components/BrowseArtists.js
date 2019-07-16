import React from 'react';

const BrowseArtists = (props) => {
  return (
    <div className="BrowseArtists" style={props.stil}>
		<p>{props.name}</p>
    </div>
  )
}

export default BrowseArtists;