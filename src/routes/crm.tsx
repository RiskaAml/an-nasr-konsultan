import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CrmProvider } from "@/lib/crm-store";

export const Route = createFileRoute("/crm")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "CRM Internal — CV. AN NASR KONSULTAN" },
      {
        name: "description",
        content: "Area internal CV. AN NASR KONSULTAN untuk pengelolaan lead, klien, dan proyek.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <CrmProvider>
      <Outlet />
    </CrmProvider>
  ),
});