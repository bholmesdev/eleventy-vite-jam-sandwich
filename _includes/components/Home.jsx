import React from 'react'
import Logo from './Logo'
import ImageCarousel from './ImageCarousel'

const About = () => (
  <article>
    <Logo />
    <h1>Hello Jamstack conf!</h1>
    <p>This demo will show you how to:</p>
    <ol>
      <li>Use Vite to bundle any component known to man</li>
      <li>Add 11ty to process static markup</li>
      <li>Bring shortcodes to partially hydrate pages with components</li>
    </ol>
    <ImageCarousel />
    <h2>Want to learn more?</h2>
    <ul>
      <li>
        <strong>
          <a href="https://jasonformat.com/islands-architecture/">
            Read up on islands architecture
          </a>
        </strong>
        <span>from Jason Miller's original blog post</span>
      </li>
      <li>
        <strong>
          <a href="">Read my full-length blog post</a>
        </strong>
        <span>
          on everything I've learned playing with bundlers, static site generator, and of course,
          Slinkity.
        </span>
      </li>
      <li>
        <strong>
          <a href="https://slinkity.dev/docs/">Try the Slinkity quick start guide,</a>
        </strong>
        <span>and consider contributing to the project!</span>
      </li>
    </ul>
    <footer>Made with ❤️ by Ben Holmes</footer>
  </article>
)

export default About
