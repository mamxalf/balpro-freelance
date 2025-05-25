"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Disc } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const songTitle = "A Million Dreams";
  const songArtist = "Hugh Jackman, Michelle Williams & Ziv Zaifman";
  useEffect(() => {
    // Initialize audio
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/music/music.mp3");
      audioRef.current.volume = 1;
      audioRef.current.loop = true;

      // Attempt to autoplay
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 cursor-pointer overflow-hidden group flex items-center h-16"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            layout
            animate={{
              width: isPlaying ? 'auto' : '4rem',
              transition: { duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }
            }}
          >
            {/* CD Player Design */}
            <div className="relative w-16 h-16 flex items-center justify-center p-1 flex-shrink-0">
              {/* Rotating CD */}
              <motion.div
                className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center"
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                style={{ transformOrigin: "center center" }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(120,120,120,0.5)_70%)]" />
                  </div>
                </div>
                {/* CD Center Hole */}
                <div className="w-3 h-3 rounded-full bg-white z-10" />
                {/* CD Track Markers */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600/20" />
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-600/20" />
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gray-600/30 rotate-45 origin-left" />
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gray-600/30 -rotate-45 origin-left" />
                </div>
              </motion.div>

              {/* Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                {isPlaying ? (
                  <Pause className="h-6 w-6 text-white" />
                ) : (
                  <Play className="h-6 w-6 text-white" />
                )}
              </div>
            </div>
            <AnimatePresence>
              {isPlaying && (
                <motion.div 
                  className="px-4 flex flex-col justify-center overflow-hidden min-w-0 max-w-[200px]"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    opacity: { duration: 0.3 },
                    width: { duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }
                  }}
                >
                  <p className="text-sm font-semibold text-gray-800 truncate m-0 leading-tight">{songTitle}</p>
                  <p className="text-xs text-gray-500 truncate m-0 mt-0.5 leading-tight">{songArtist}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
