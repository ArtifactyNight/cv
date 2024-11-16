import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="group relative flex flex-col overflow-hidden border border-border p-3 transition-all duration-300">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <Link
                href={link}
                target="_blank"
                className="inline-flex items-center gap-2"
              >
                <span className="hover:underline">{title}</span>
                <span className="size-1 rounded-full bg-green-500" />
                <span className="-translate-x-2 text-xs text-green-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  Public
                </span>
              </Link>
            ) : (
              <div className="inline-flex items-center gap-2">
                <span>{title}</span>
                <span className="size-1 rounded-full bg-red-500" />
                <span className="-translate-x-2 text-xs text-red-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  Private
                </span>
              </div>
            )}
          </CardTitle>
          <div className="hidden text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {link && (
        <div className="absolute right-2 top-2 rounded-md p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href={link}
            target="_blank"
            className="transition hover:bg-muted"
          >
            <LucideSquareArrowOutUpRight className="size-3.5 text-muted-foreground" />
          </Link>
        </div>
      )}
    </Card>
  );
}
