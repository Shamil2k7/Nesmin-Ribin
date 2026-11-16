'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.warn('Playback error or interaction needed:', err);
      });
    }
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Hidden Audio Element with user's official uploaded MP3 */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/aaj-sajeya.mp3" type="audio/mpeg" />
        <source src="/audio/aaj-sajeya.m4a" type="audio/mp4" />
      </audio>

      {/* Luxury Song Control Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause song: Aaj Sajeya' : 'Play song: Aaj Sajeya'}
        title={isPlaying ? 'Pause: Aaj Sajeya' : 'Play Song: Aaj Sajeya'}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 shadow-xs cursor-pointer text-xs select-none ${
          isPlaying
            ? 'bg-[#FAF7F2] border-[#A58B61] text-[#55432F] ring-1 ring-[#A58B61]/40'
            : 'bg-[#FCFAF6] border-[#A58B61]/40 text-[#887B6B] hover:text-[#55432F] hover:border-[#A58B61]'
        }`}
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5 text-[#A58B61] fill-[#A58B61]" />
            <span
              className="text-[11px] tracking-wider font-medium text-[#55432F] italic"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Aaj Sajeya
            </span>
            {/* Animated Equalizer Bars */}
            <span className="flex items-end gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 bg-[#A58B61] h-2.5 animate-bounce" style={{ animationDuration: '600ms' }} />
              <span className="w-0.5 bg-[#A58B61] h-3.5 animate-bounce" style={{ animationDuration: '400ms', animationDelay: '150ms' }} />
              <span className="w-0.5 bg-[#A58B61] h-2 animate-bounce" style={{ animationDuration: '700ms', animationDelay: '300ms' }} />
            </span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 text-[#A58B61] fill-[#A58B61]" />
            <span
              className="text-[11px] tracking-wider font-medium text-[#887B6B] italic hover:text-[#55432F]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Aaj Sajeya
            </span>
            <Music className="w-3 h-3 text-[#A58B61]/70" />
          </>
        )}
      </button>
    </div>
  );
}
