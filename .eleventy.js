module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('_includes/components')

  eleventyConfig.addShortcode('react', function() {
    return 'it worked!'
  })
}