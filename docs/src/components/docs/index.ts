import { dyn } from "@/hooks/dyn";

export const QuickStart = dyn(() => import("./getting-started/QuickStart"));
export const UsageDocs = dyn(() => import("./getting-started/Usage"));
