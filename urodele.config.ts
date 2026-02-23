export const config = {
  github: {
    login: "TheIndexedPath",
    repo: "urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Urodele",
    brand: "Urodele",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© TheIndexedPath",
    copyrightUrl: "https://github.com/TheIndexedPath",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
