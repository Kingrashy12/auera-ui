import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";

export const fetchContent = async (slug: string, folder: string) => {
  const filePath = path.join(
    process.cwd(),
    `src/content/${folder}`,
    `${slug}.mdx`
  );

  try {
    const mdxText = fs.readFileSync(filePath, "utf8");
    const mdxSource = await serialize(mdxText, { parseFrontmatter: true });

    return { mdxSource };
  } catch (error) {
    console.error("Error reading or processing the MDX file:", error);
    return {
      notFound: true,
    };
  }
};
