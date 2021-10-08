---
speakers:
  - name: Daniel Kim
    title: Senior Developer Advocate—New Relic
  - name: Aisha Blake
    title: Senior Developer Relations Engineer—New Relic
picture: /assets/images/Optimizing-Gatsby-Build-Performance-with-Observability.webp
title: Optimizing Gatsby Build Performance with Observability
---



![{{title}}]({{picture}})

Using Gatsby to deliver large websites can massively speed up end users’ experiences. But as Gatsby projects scale, development teams can be slowed down by long build times. The team at New Relic was experiencing just that. Their massive, open sourced documentation site containing over 8,000 markdown files and over 100 plugins started to push 2 hour build times (uncached). They needed to find a way to reduce their Gatsby build times to make updating their site easier for developers. And in order to do that, they needed to introduce observability into their Gatsby builds. 

In this talk, Aisha Blake and Daniel Kim of New Relic explain how their team built a plugin that provides instant observability into the entire Gatsby build process, exporting vital telemetry data from within the belly of the beast. With events, metrics, logs, and traces, New Relic is now able to contextualize and identify performance issues within our plugins, 3rd party APIs, and other parts of their website.

In this talk, they explain what exactly happens during the Gatsby Build process, and how they leveraged observability for better, faster build times and find bottlenecks in the development process.
