import { createContentLoader } from "vitepress";
import order from "../../people/order.json";

// 未列入 order.json 的成员排在最后，彼此之间保持文件名字典序
const UNLISTED = Number.MAX_SAFE_INTEGER;

// 去掉 name 字段里的括号后缀，例如 "Leyao Wang (PhD,MPH)" -> "Leyao Wang"
const bare = (name) => String(name ?? "").replace(/\s*\(.*\)\s*$/, "").trim();

export default createContentLoader("people/*.md", {
  transform: (raw) => {
    const people = raw.map(({ url, frontmatter, subtext }) => ({
      name: frontmatter.name,
      image: frontmatter.image,
      title: frontmatter.title,
      category: frontmatter.category,
      desc: frontmatter.desc,
      links: frontmatter.links,
      socials: frontmatter.socials,
      url,
    }));

    // 为每个人找到它在 order.json 中的位置：优先精确匹配，
    // 否则退回"去掉括号后缀"后的匹配。这样 order.json 里写 "Leyao Wang"
    // 也能命中 name 为 "Leyao Wang (PhD,MPH)" 的成员。
    const indexOf = new Map();
    order.forEach((n, i) => indexOf.set(bare(n), i));

    const position = (name) => {
      const b = bare(name);
      if (indexOf.has(name)) return indexOf.get(name);
      if (indexOf.has(b)) return indexOf.get(b);
      return UNLISTED;
    };

    const unlisted = people.filter((p) => position(p.name) === UNLISTED).map((p) => p.name);
    if (unlisted.length) {
      console.warn(
        `[people] 以下成员未列入 people/order.json，将排在最后：${unlisted.join("、")}`,
      );
    }

    const known = new Set(people.map((p) => bare(p.name)));
    const missing = order.filter((name) => !known.has(bare(name)));
    if (missing.length) {
      console.warn(
        `[people] people/order.json 中的名字没有对应成员：${missing.join("、")}`,
      );
    }

    return people.sort((a, b) => position(a.name) - position(b.name));
  },
});
