/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/mimetype")
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
  },
};