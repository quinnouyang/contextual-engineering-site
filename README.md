![UIUC](cerg-app/public/vector-graphics/full-wordmark.svg)

# Contextual Engineering @ Illinois

This repository houses the source code of the [Contextual Engineering Research Group website](https://contextual.engineering.illinois.edu/) at the University of Illinois Urbana-Champaign. (Yeah, it's a mouthful.) It primarily uses the JS frameworks React, Next.js, Chakra UI, and (hopefully) [Frontity]([url](https://frontity.org/)). Currently, the site exists as a static HTML build on CPanel, rooted at `cerg-app`. After finishing the intial design, we'll plan to implement separate content management using Frontity, rooted at `frontity-migration`.

Instead of hard-coded content, Frontity enables WordPress to serve as a content management system (CMS) by fetching data from it to feed into a React application. (Our old site was a plain WordPress build.) Most development focus is towards **designing the UI** in `cerg-app`. This deployment does not use Frontity and instead (temporarily) uses hard-coded content. Afterwards, we'll attempt migrating towards using that framework.

This is a volunteer project. PRs and issue involvement are welcome, though you should contact me through qouyang3@illinois.edu first.
