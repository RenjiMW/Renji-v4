import { publish } from "gh-pages";

publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/renjimw/renji-v4.git",
    message: "Deploy 🚀",
  },
  () => {
    console.log("Deploy complete!");
  }
);
