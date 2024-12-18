import GitHubCalendar from "react-github-calendar";

interface GitHubContributionsProps {
  username: string;
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  return (
    <div className="flex w-full justify-center overflow-x-auto">
      <GitHubCalendar
        username={username}
        colorScheme="light"
        fontSize={12}
        blockSize={10.5}
        blockMargin={4}
      />
    </div>
  );
}
