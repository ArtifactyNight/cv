"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

const fetchSpotifyStatus = async (): Promise<SpotifyData> => {
  const response = await fetch("/api/spotify");
  if (!response.ok) {
    throw new Error("Failed to fetch Spotify status");
  }
  return response.json();
};

export function SpotifyNowPlaying() {
  const { data, error, isLoading } = useQuery<SpotifyData>({
    queryKey: ["spotify-now-playing"],
    queryFn: fetchSpotifyStatus,
    refetchInterval: 10000, // Refresh every 10 seconds
  });

  if (error) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex gap-1">
        <Skeleton className="size-3" />
        <Skeleton className="h-3 w-44" />
      </div>
    );
  }

  if (!data?.isPlaying) {
    return null;
  }

  return (
    <p className="max-w-md items-center text-pretty text-xs text-[#1DB954]">
      <Link
        href={
          data.songUrl ||
          "https://open.spotify.com/user/31666666666666666666666666666666"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline"
      >
        <FaSpotify className="size-3" />
        {data.title} - {data.artist}
      </Link>
    </p>
  );
}
