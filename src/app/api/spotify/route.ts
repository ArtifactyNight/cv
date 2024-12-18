import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export async function GET() {
  try {
    const access_token = await getAccessToken();

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false });
    }

    const data = await response.json();

    if (!data.is_playing) {
      return NextResponse.json({ isPlaying: false });
    }

    const songData = {
      isPlaying: true,
      title: data.item.name,
      artist: data.item.artists.map((artist: any) => artist.name).join(", "),
      albumImageUrl: data.item.album.images[0].url,
      songUrl: data.item.external_urls.spotify,
    };

    return NextResponse.json(songData);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return NextResponse.json({ isPlaying: false });
  }
}
