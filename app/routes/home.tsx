import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to NuiTech" },
    { name: "description", content: "Explore the future of technology with NuiTech." },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
    </div>
  );
}