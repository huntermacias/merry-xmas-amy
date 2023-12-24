
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Song {
  title: string;
  source: string;
}

const MusicPlayer = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const artists = ['Christmas', 'Rex Orange County', 'Feng Suave', 'John Legend', 'Daryl Hall & Jogn Oates'];
    const fetchPromises = artists.map((artist) => {
      const artistQuery = encodeURIComponent(artist);
      const apiUrl = `https://itunes.apple.com/search?term=${artistQuery}&entity=song&limit=20`;

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
  
    if (audioRef.current) {
      if (songSource) {
        audioRef.current.src = songSource;
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentSongIndex(songs.indexOf(song));
      } else {
        console.error('Song source is undefined for:', song.title);
      }
    } else {
      console.error('Audio element is not available.');
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
    <motion.div 
      className="music-player-container mx-auto p-6 rounded-xl shadow-lg bg-gradient-to-br from-dark-blue to-rich-purple text-white my-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-glowing-pink">
          Sweet Melodies for Amy 🎶💖
        </h2>
      </div>

      <div className="audio-player">
        <audio ref={audioRef} className="w-full rounded-md bg-light-purple text-purple-300">
          Your browser does not support the audio element.
        </audio>
      </div>

      <div className="songs-list max-h-80 overflow-y-auto mt-6">
        <ol className="list-none">
          {songs.map((song, index) => (
            <motion.li
              key={index}
              className={`song-item flex items-center justify-between py-3 px-6 rounded-lg mb-2 transition-all duration-300 ${currentSongIndex === index ? 'bg-purple-600 text-white' : 'bg-dark-purple text-purple-300'}`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="song-info flex items-center space-x-4">
                <div className="play-btn">
                  {currentSongIndex === index && isPlaying ? (
                    <button onClick={pauseSong} className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-full font-semibold">
                      Pause
                    </button>
                  ) : (
                    <button onClick={() => playSong(song)} className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full font-semibold">
                      Play
                    </button>
                  )}
                </div>
                <p className="song-title text-lg font-medium">
                  {song.title}
                </p>
              </div>
              {currentSongIndex === index && (
                <button onClick={skipSong} className="skip-btn text-white bg-green-500 hover:bg-green-600 py-1 px-3 rounded-full text-sm">
                  Skip
                </button>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
