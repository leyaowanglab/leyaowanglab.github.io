import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Leyao Wang Lab",
  description: "Leyao lab at SMART focuses on human microbiome and diseases.",
  appearance: false,
  ignoreDeadLinks: true,
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "Leyao Wang, Leyao Wang Lab, Shenzhen Medical Academy of Research and Translation, Impact of extreme weather events on the Infant Microbiome, Sources and assembly of nasal microbiome in early life on a global scale, The airway microbiome in lung infections and diseases",
      },
    ],
    //[
    //  "link",
    //  {
    //    rel: "icon",
    //    href: "/images/icon.png",
    //  },
    //],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
      },
    ],
  ],
  // Add canonical link to each page (https://vitepress.dev/reference/site-config#example-adding-a-canonical-url-link)
  // It's necessary to do this because we need to tell google that we're hosting from leyaowanglab.smart.org.cn and not from github.io
  transformPageData(pageData) {
    const canonicalUrl = `https://leyaowanglab.smart.org.cn/${pageData.relativePath}`
      .replace(/index\.md$/, "")
      .replace(/\.md$/, ".html");

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalUrl },
    ]);
  },
});
