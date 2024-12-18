import GitHubCalendar from "react-github-calendar";

interface GitHubContributionsProps {
  username: string;
  theme?: {
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  return (
    <div className="flex w-full justify-center overflow-x-auto">
      <GitHubCalendar
        username={username}
        colorScheme="light"
        fontSize={12}
        blockSize={10}
        blockMargin={4}
      />
    </div>
  );
}
