interface Route {
  path: string;
  file: string;
}

const routes: Route[] = [
  { path: "/", file: "routes/home.tsx" },
  { path: "about", file: "routes/about.tsx" },
  { path: "team", file: "routes/team.tsx" },
  { path: "service", file: "routes/service.tsx" },
  { path: "contact", file: "contact/Contact.tsx" },
  { path: "blog", file: "blog/blog.tsx" },
  { path: "pricing", file: "pricing/pricing.tsx" },
  { path: "features", file: "features/features.tsx" },
];

export default routes;
