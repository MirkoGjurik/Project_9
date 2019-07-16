import React from 'react';

const Albums = (props) => {
  return (
    <div className="Albums">
		{props.albumi.map((album,i) => {
			const albumsImg = {
				backgroundImage: `url('/images/albums/${album.cover}.jpg')`
			}
			return(
				<div className="albumi" style={albumsImg} key={i}></div>
			)
		})}
    </div>
  )
}

export default Albums;