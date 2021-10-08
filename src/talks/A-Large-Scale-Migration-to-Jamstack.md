---
speakers:
  - name: Harrison Harnisch
    title: "Tech Lead, Staff Software Engineer—Twilio"
    ghUsername: hharnisc
title: "Twilio Console: A Large Scale Migration to Jamstack"
---



![{{title}}]({{picture}})

Twilio’s sustained growth over the last decade has led to several architectural iterations of the Twilio Console. As Harrison Harnisch, tech lead on the Twilio Console, explains in this talk, the newest iteration of the application is a Jamstack app, hosted on Netlify. It’s designed to scale as Twilio does, and enable faster development, better collaboration, and an improved customer experience. 

What’s the Twilio Console? The Twilio Console, in its first iteration, was a single page application that enabled customers to interact with the Twilio platform to build, configure,  and monitor different products. Initially there was only one team building it, and navigation was pretty simple. But as Twilio grew and offered more products, the Console became harder to manage. At the time they migrated to Jamstack, there were 30 products--each with their own team--operating out of the Twilio console, and sharing dev environments. Each team also needed to do their own admin, like setting up their own CI/CD pipelines and choosing which request libraries to use, rather than focusing on building business logic. This, of course, led to huge bottlenecks. 

Why did Twilio migrate to the Jamstack? In short, they were approaching scaling limits. Not only did Twilio’s sustained global growth mean serving more customers in more places, their internal team and products were growing, and they needed a better way to handle this internally. With 4.5M monthly pageviews, and customers in over 200 countries consuming over 480GB in monthly bandwidth, Twilio’s increasingly global presence meant they needed a global application architecture. 

The solution is a micro-frontend architecture that’s stitched together in the background, and they’re already seeing impressive results, including
Global improvements on core metrics like initial page load and time to first byte, since they’re using a global CDN baked into Netlify.
More time to focus on building business logic, and less time spent on administering the application
Increased development velocity. Prior to the migration, teams were bulk shipping once per week. With the Jamstack architecture, they’re seeing teams deploying 10-15x a day.