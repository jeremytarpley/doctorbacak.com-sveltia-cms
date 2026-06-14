const markdownIt = require("markdown-it");

const md = markdownIt({ html: true, breaks: true, linkify: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("markdownify", (str) => md.render(str ?? ""));

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("patients/paperwork");
  eleventyConfig.addPassthroughCopy("admin");

  // Ignore old HTML pages that are replaced by content/pages/*.md
  eleventyConfig.ignores.add("index.html");
  eleventyConfig.ignores.add("about/index.html");
  eleventyConfig.ignores.add("about/team.html");
  eleventyConfig.ignores.add("about/insurance.html");
  eleventyConfig.ignores.add("about/services.html");
  eleventyConfig.ignores.add("contact/index.html");
  eleventyConfig.ignores.add("patients/index.html");

  return {
    dir: {
      input: ".",
      layouts: "_layouts",
      includes: "_includes",
      output: "_site",
    },
  };
};
