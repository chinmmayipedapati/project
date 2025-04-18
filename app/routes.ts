export interface Route {
  path: string;
  file: string;
}

export const routes: Route[] = [
  { path: "/", file: "routes/home.tsx" },
  { path: "about", file: "routes/about.tsx" },
  { path: "team", file: "routes/team.tsx" },
  { path: "service", file: "routes/service.tsx" }
];
