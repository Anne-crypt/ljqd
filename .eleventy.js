module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy("src/assets/images");
eleventyConfig.addPassthroughCopy("src/assets/css");
eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");
  return {
    pathPrefix: "/ljqd/",
    dir: {
      input: "src",
      includes: "layouts",
      output: "_site"
    }
  }
}
