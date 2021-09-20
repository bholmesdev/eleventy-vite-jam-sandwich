module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')

  eleventyConfig.addShortcode('react', function() {
    return 'it worked!'
  })
}