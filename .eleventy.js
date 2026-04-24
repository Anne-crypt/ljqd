module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy("src/assets");
  return {
    pathPrefix: process.env.ELEVENTY_BASE || "/",
    dir: {
      input: "src",
      includes: "layouts",
      output: "_site"
    }
  }
}
