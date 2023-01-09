![UIUC](cerg-app/public/vector-graphics/full-wordmark.svg)

# Contextual Engineering @ Illinois

Source code of the website for the [Contextual Engineering Research Group](https://contextual.engineering.illinois.edu/) at the [University of Illinois Urbana-Champaign](https://illinois.edu/): an assembly of university students and researchers who investigate and develop methods for sustainable engineering in diverse communities. Built with React, Next.js, Chakra UI, and haphazard Googling. This is a largely solo volunteer project. Contact qouyang3@illinois.edu for questions.

## Development

As of 1/8/2022, the website is under active development, where content (text and media) is temporarily hard-coded with a custom front-end. The eventual goal is to migrate to using WordPress as a [headless content management system (CMS)](https://www.contentful.com/r/knowledgebase/what-is-headless-cms/). This would allow the best of both worlds: a custom front-end/"theme" with content editing through WordPress's usual graphical interface. (And I wouldn't need to redeploy the app to fix a typo...)

`trunk` (an inaccurate nod to (its convention in Subversion)[https://svnbook.red-bean.com/en/1.8/svn.tour.importing.html#svn.tour.importing.layout]) houses the main development directory with hard-coded content. `sandbox` houses, well, a sandbox for developing a front-end that integrates with WordPress. Sourced from (the stock example from Next.js)[https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress], it pulls content from a testing site to help port the front-end in `trunk` to consume data from WordPress.