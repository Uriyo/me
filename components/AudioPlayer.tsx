"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  src: string
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)

    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
    setIsMuted(!isMuted)
  }

  const changePlaybackRate = () => {
    const audio = audioRef.current
    if (!audio) return

    const newRate = playbackRate === 2 ? 1 : playbackRate + 0.5
    audio.playbackRate = newRate
    setPlaybackRate(newRate)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleProgressChange = (event: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    const progress = progressBarRef.current
    if (!audio || !progress) return

    const rect = progress.getBoundingClientRect()
    const percent = (event.clientX - rect.left) / rect.width
    audio.currentTime = percent * audio.duration
  }

  return (
    <div className="border text-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
      <audio ref={audioRef} src={src} />
      <div className="flex items-center mb-4">
        <button
          onClick={togglePlayPause}
          className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        <button
          onClick={changePlaybackRate}
          className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 mr-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label={`Change playback speed, current speed ${playbackRate}x`}
        >
          <span className="ml-1 text-xs">{playbackRate}x</span>
        </button>
        <div className="flex-grow">
          <div
            ref={progressBarRef}
            className="bg-gray-600 h-2 rounded-full cursor-pointer"
            onClick={handleProgressChange}
          >
            <div
              className="bg-gray-400 h-2 rounded-full relative"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="absolute right-0 -top-1 w-4 h-4 bg-white rounded-full shadow-md transform translate-x-1/2"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

