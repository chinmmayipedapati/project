interface Route {
  path: string;
  file: string;
}

const routes: Route[] = [
  { path: "/", file: "routes/home.tsx" },
  { path: "about", file: "routes/about.tsx" },
  { path: "team", file: "routes/team.tsx" },
  { path: "service", file: "routes/service.tsx" }
];

export default routes;
