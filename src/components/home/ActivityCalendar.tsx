import type { ThemeInput } from "react-activity-calendar";
import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

const theme: ThemeInput = {
  light: ["#e9ece4", "#d6dbd0", "#b9c0b0", "#95a08d", "#727d69"],
  dark: ["#252920", "#3a4535", "#4f6049", "#647a5c", "#7d9473"],
};

function resolveColorScheme(): "light" | "dark" {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark") return "dark";
  if (attr === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

interface Props {
  username: string;
}

export default function HomeActivityCalendar({ username }: Props) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setColorScheme(resolveColorScheme());

    function handleThemeChange() {
      setColorScheme(resolveColorScheme());
    }

    window.addEventListener("cv:theme-change", handleThemeChange);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", handleThemeChange);

    return () => {
      window.removeEventListener("cv:theme-change", handleThemeChange);
      mq.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <GitHubCalendar
      username={username}
      theme={theme}
      colorScheme={colorScheme}
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
