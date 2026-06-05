import { GitHubCalendar } from "react-github-calendar";
import type { ThemeInput } from "react-activity-calendar";

const theme: ThemeInput = {
  light: ["#e9ece4", "#d6dbd0", "#b9c0b0", "#95a08d", "#727d69"],
};

interface Props {
  username: string;
}

export default function HomeActivityCalendar({ username }: Props) {
  return (
    <GitHubCalendar
      username={username}
      theme={theme}
      colorScheme="light"
      blockSize={11}
      blockRadius={2}
      blockMargin={3}
      fontSize={12}
      showWeekdayLabels={false}
      labels={{
        totalCount: "{{count}} contributions in {{year}}",
      }}
    />
  );
}
