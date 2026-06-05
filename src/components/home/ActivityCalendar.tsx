import type { ThemeInput } from "react-activity-calendar";
import { GitHubCalendar } from "react-github-calendar";

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
      blockSize={9}
      blockRadius={2}
      blockMargin={3}
      fontSize={12}
      showWeekdayLabels={false}
      showColorLegend={false}
      showMonthLabels={false}
      showTotalCount={false}
      labels={{
        totalCount: "อัพเดตไป {{count}} ครั้งในปี {{year}}",
        months: [
          "ม.ค.",
          "ก.พ.",
          "มี.ค.",
          "เม.ย.",
          "พ.ค.",
          "มิ.ย.",
          "ก.ค.",
          "ส.ค.",
          "ก.ย.",
          "ต.ค.",
          "พ.ย.",
          "ธ.ค.",
        ],
        legend: {
          less: "น้อยกว่า",
          more: "มากกว่า",
        },
      }}
    />
  );
}
