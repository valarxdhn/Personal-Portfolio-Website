export default function sitemap() {
  const baseUrl = "https://dhanush-portfolio.vercel.app";

  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/dynamic-train-eta",
    "/projects/voltcharge",
    "/projects/campusloop",
    "/experience",
    "/skills",
    "/achievements",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/projects") ? 0.8 : 0.7,
  }));
}
