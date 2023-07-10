import SongBar from "./SongBar"



const RelatedSongs = ({ data, activeSong, isPlaying, handlePauseClick, handlePlayClick, artistId }) => {
	console.log(data, "checking sonf data in related songs here")
	return (
		<div className="flex flex-col">
			<h1 className="font-bold text-3xl text-white">
				Related Songs:
			</h1>
			<div className="mt-6 w-full flex flex-col">
				{data?.map((song, i) => (
					<SongBar
						key={`${song.key}-${artistId}`}
						song={song}
						i={i}
						artistId={artistId}
						isPlaying={isPlaying}
						activeSong={activeSong}
						handlePauseClick={handlePauseClick}
						handlePlayClick={handlePlayClick}
					/>
				))}

			</div>


		</div>

	)
}


export default RelatedSongs;
