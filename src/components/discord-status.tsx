"use client";

import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { LucideActivity } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

interface DiscordData {
  active: boolean;
  status: "online" | "idle" | "dnd" | "offline";
  activity?: {
    name: string;
    type: number;
    state?: string;
    details?: string;
  };
}

const statusColors = {
  online: "#43B581",
  idle: "#FAA61A",
  dnd: "#F04747",
  offline: "#747F8D",
};

const fetchDiscordStatus = async (): Promise<DiscordData> => {
  const response = await fetch("/api/discord");
  if (!response.ok) {
    throw new Error("Failed to fetch Discord status");
  }
  return response.json();
};

export function DiscordStatus() {
  const { data, error, isLoading } = useQuery<DiscordData>({
    queryKey: ["discord-status"],
    queryFn: fetchDiscordStatus,
    refetchInterval: 30000, // Refresh every 30 seconds
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

  if (!data?.active) {
    return (
      <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
        <Link
          href="https://discordapp.com/users/304952308893220864"
          target="_blank"
          className="inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline"
        >
          <LucideActivity className="size-3" />
          Night Offline
        </Link>
      </p>
    );
  }

  return (
    <p
      className={cn(
        "max-w-md items-center text-pretty text-xs text-muted-foreground",
        data.status === "offline" && "text-muted-foreground",
        data.status === "online" && "text-green-500",
        data.status === "idle" && "text-yellow-500",
        data.status === "dnd" && "text-red-500",
      )}
    >
      <Link
        href="https://discordapp.com/users/304952308893220864"
        target="_blank"
        className="inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline"
      >
        <div className="relative">
          <LucideActivity className="animate size-3" />
          <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75"></span>
        </div>
        Discord {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
      </Link>
    </p>
  );
}
