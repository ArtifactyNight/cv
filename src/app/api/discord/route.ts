import { NextResponse } from "next/server";

const DISCORD_ID = process.env.DISCORD_ID;
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

async function getDiscordStatus() {
  const response = await fetch(
    `https://discord.com/api/v10/users/${DISCORD_ID}`,
    {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Discord status");
  }

  return response.json();
}

export async function GET() {
  try {
    const data = await getDiscordStatus();

    return NextResponse.json({
      active: true,
      status: data.status || "offline",
      activity: data.activities?.[0] || null,
    });
  } catch (error) {
    console.error("Error fetching Discord status:", error);
    return NextResponse.json({
      active: false,
      status: "offline",
    });
  }
}
