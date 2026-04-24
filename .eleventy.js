module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  return {
    pathPrefix: "/ljqd/",
    dir: {
      input: "src",
      includes: "layouts",
      output: "_site"
    }
  }
}
