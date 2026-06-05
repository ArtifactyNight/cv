import { format } from "date-fns";
import { th } from "date-fns/locale";

/** designerdada-style: 17.Apr.2026 */
export function formatWritingDate(date: Date): string {
  return format(date, "dd MMM yyyy", { locale: th });
}

/** e.g. Apr 17, 2026 */
export function formatDisplayDate(date: Date): string {
  return format(date, "MMM d, yyyy", { locale: th });
}
