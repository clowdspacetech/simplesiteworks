import { redirect } from "next/navigation";

/** Legacy route — mobile apps moved to /apps (hidden from main funnel) */
export default function MobileAppsRedirect() {
  redirect("/apps");
}
