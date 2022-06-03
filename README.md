# CERG @ Illinois Website

This repository will house the source code of the [UIUC Contextual Engineering Research Group website](https://contextual.engineering.illinois.edu/). It primarily uses React, (probably) [Frontity]([url](https://frontity.org/)), Next.js, and Chakra UI. Instead of hard-coded content, Frontity would enable Wordpress to serve as a content management system (CMS) by fetching data from it to feed into a React application. The project has two main workflows: designing the web application (`cerg-app`) and testing the anticipated integration of Frontity (`frontity-migration`).

As of 7/1/2022, most focus is towards **designing the UI** in `cerg-app` to aim for an initial deployment of late July 2022. This deployment would not use Frontity and instead (temporarily) have hard-coded content. Afterwards, there should be a migration towards using that framework.

This is a volunteer project. PRs are welcome, though note that little material may exist to be "workable".

### Current Staging Site (Static HTML Build)
https://cergtest1.web.illinois.edu/
