
import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
	const [songs, setSongs] = useState<Song[]>([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

	interface Song {
	  title: string;
	  source: string;
	}
	
	useEffect(() => {
        const artists = ['Christmas', 'Rex Orange County', 'Feng Suave', 'John Legend'];
        const fetchPromises = artists.map((artist) => {
            const artistQuery = encodeURIComponent(artist);
            const apiUrl = `https://itunes.apple.com/search?term=${artistQuery}&entity=song&limit=10`;

            return fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    const songData: Song[] = data.results.map((result: { trackName: string; previewUrl: string; }) => ({
                        title: result.trackName,
                        source: result.previewUrl,
                    }));
                    return songData;
                })
                .catch((error) => {
                    console.error(`Error fetching songs for ${artist}:`, error);
                    return [];
                });
        });

        Promise.all(fetchPromises)
            .then((results) => {
                const allSongs = results.flat();
                setSongs(allSongs);
            })
            .catch((error) => console.error('Error fetching songs:', error));
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('ended', () => {
                const nextIndex = (currentSongIndex + 1) % songs.length;
                playSong(songs[nextIndex]);
            });
        }
    }, [currentSongIndex, songs]);

    const playSong = (song: Song) => {
        setCurrentSong(song);
        const songSource = song.source || '';
        if (songSource && audioRef.current) {
            audioRef.current.src = songSource;
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentSongIndex(songs.indexOf(song));
        } else {
            console.error('Song source is undefined:', song);
        }
    };

    const pauseSong = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setIsPlaying(false);
    };

    const skipSong = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        playSong(songs[nextIndex]);
    };

	return (
	  <div className="container-sm bg-black p-4 rounded-lg shadow-md text-white my-4">
		  <div className="mb-4 text-center">
			<h2 className="text-xl font-sans font-semibold text-gray-400">
			  Some Sweet Melodies to Keep You Company
			</h2>
			<h2 className="text-xl font-shadcn font-semibold text-gray-400">
			  While You Browse with Love <span role="img" aria-label="heart">🎶❤️</span>
			</h2>
		  </div>

		<div className="mb-4">
		  <audio ref={audioRef} controls className="w-full">
			Your browser does not support the audio element.
		  </audio>
		</div>
		<div
		  className="max-h-80 overflow-y-auto border-b border-blue-200/30"
		  style={{
			borderBottomWidth: "1px",
		  }}
		>
		  <ol className="list-decimal pl-4">
			{songs.map((song, index) => (
			  <li
				key={index}
				className={`flex items-center space-x-4 py-2 ${
				  currentSongIndex === index
					? 'bg-pink-600 text-white rounded-lg shadow-lg' // Highlighted style
					: 'bg-black text-gray-300' // Default style
				}`}
			  >
				{currentSongIndex === index && isPlaying ? ( // Only show "Now Playing" when a song is playing
				  <div>
					<button
					  onClick={pauseSong}
					  className={`font-semibold focus:outline-none ${
						currentSongIndex === index
						  ? 'text-white bg-blue-600 hover:bg-blue-700'
						  : 'text-blue-500 hover:text-blue-600 bg-gray-900 hover:bg-gray-800'
					  } py-2 px-4 rounded-lg`}
					>
					  Pause
					</button>
				  </div>
				) : (
				  <div>
					<button
					  onClick={() => playSong(song)}
					  className={`font-semibold focus:outline-none ${
						currentSongIndex === index
						  ? 'text-white bg-blue-600 hover:bg-blue-700'
						  : 'text-blue-500 hover:text-blue-600 bg-gray-900 hover:bg-gray-800'
					  } py-2 px-4 rounded-lg`}
					>
					  {currentSongIndex === index ? 'Now Playing' : 'Play'}
					</button>
				  </div>
				)}
				<div className="flex-1">
				  <p className="font-medium">
					{currentSongIndex === index ? (
					  <span className="text-white">{song.title}</span>
					) : (
					  song.title
					)}
				  </p>
				</div>
			  </li>
			))}
		  </ol>
		</div>
		{currentSong && (
		  <div className="mt-4">
			<button
			  onClick={skipSong}
			  className="bg-green-600/80 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
			>
			  Skip to Next
			</button>
		  </div>
		)}
	  </div>
	);

};

export default MusicPlayer;
