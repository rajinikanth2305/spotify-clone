
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
const ArtistDetails = () => {
	const { id: artistId } = useParams();
	const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId })


	const { activeSong, isPlaying } = useSelector((state) => state.player)
	console.log(artistData, "checkign artist data here")
	if (isFetchingArtistDetails) {
		return <Loader title="Loading Artist Details" />
	}
	if (error) {
		return <Error />
	}
	return (
		<div className="flex flex-col">
			<DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
			<RelatedSongs
				data={artistData?.data[0].views["top-songs"]?.data}
				isPlaying={isPlaying}
				activeSong={activeSong}
				artistId={artistId}

			/>
		</div>


	)
}

export default ArtistDetails;
