module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");
  return {
    pathPrefix: "/ljqd/",
    dir: {
      input: "src",
      includes: "layouts",
      output: "_site"
    }
  }
}
