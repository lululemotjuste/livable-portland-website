import fs from "fs";
import matter from "gray-matter";

function readFile(path: fs.PathLike): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    fs.readFile(path, (err, contents) => {
      if (err) reject(err)
      else resolve(contents)
    });
  });
}

export async function get({ params }) {
    const { slug } = params;
    const file = `${__dirname}/content/issues/${slug}.md`;
    const obj = matter(await readFile(file));

    return {
        body: obj,
    };
}
