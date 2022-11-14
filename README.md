# PHFIC Website
![Build Status](https://img.shields.io/github/workflow/status/phfic/phfic.github.io/deploy/main)
![GitHub Pages Status](https://img.shields.io/github/deployments/phfic/phfic.github.io/github-pages?color=blue&label=pages)
![Release Status](https://img.shields.io/badge/release-draft-red)

<https://phfic.github.io>

**This website is still a draft under active development.**

This is the (future) website codebase for the Public Health [FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources) Implementation Collaborative. We are a community of healthcare workers, scientists, engineers, and public policy makers bringing US healthcare interoperability standards to public health agencies. Feel free to look at our current [website](https://sites.mitre.org/phfic/) or email us at [phfic@mitre.org](mailto:phfic@mitre.org).

## Dependencies
 - [NodeJS](https://nodejs.org/en/) v18.x
 - [npm](https://github.com/npm/cli) v8.x (comes with nodejs)

Major library versions (handled by npm, but you should be aware)
 - NextJS v12
 - ReactJS v18.2
 - Bootstrap v5.2

## Developer Quickstart
 1. `git clone git@github.com:PHFIC/phfic.github.io.git`
 2. `cd phfic.github.io`
 3. `npm install`
 4. `npm run dev`
 5. Go to <http://localhost:3000/>

## Developer Guide
This is a ReactJS app that uses the NextJS framework to compile into a bundle of static HTML/CSS/JavaScript pages, that can then be rendered on GitHub Pages. File _pages/\_app.jsx_ is where it all starts.


#### Directory Structure
```
.
+--- README.md
+--- LICENSE
+--- components/         # custom defined React components
|
+--- cypress/            # files for Cypress testing
|    +--- support/       # helper code for testing/Cypress
|    +--- videos/        # Cypress end-to-end testing screen recordings
|    +--- screenshots/   # Cypress integration testing screenshots
|
+--- cypress.config.js   # Cypress configuration
+--- next.config.js      # NextJS configuration
+--- node_modules/       # folder for project javascript dependencies
|
+--- out/                # folder for compiled static-HTML and client-side code
|
|--- package.json        # master file for dependencies and npm scripts
|--- package-lock.json   # frozen master file, generated automatically
|
+--- pages/              # folder for webpages
|    +--- _app.jsx       # special NextJS file for webpage layout
|    +--- *.js(x)        # any other React component here will be rendered as its own webpage
|    +--- api/           # special NextJS folder for backend code - DO NOT USE
|
+--- public/             # folder for public assets
|
+--- style/              # folder for SCSS and CSS files
|    +--- index.scss     # master style sheet
|
+--- test/               # folder for test code
|    +--- integration/   # folder for integration AKA end-2-end tests
|       +--- *.cy.js(x)  # integration test file
|    +--- components/    # folder for unit AKA component tests
|
|--- test.sh             # bash test script ('npm test' runs this file)
|--- temp/               # folder for temp files, do not delete folder
```


#### Testing

**WARNING: CYPRESS DOES NOT SUPPORT NEXTJS V 13 FOR COMPONENT TESTING AS OF 11/10 BUT THEY ARE WORKING ON A PR THAT SHOULD BE IN NEXT UPDATE**

Run `npm run lint` to run eslint and sanity-check your code.

Run `npm run test` to run ~~unit and~~ integration tests.

Run `npm run cypress` to launch a (semi-)automatic testing tool gui.


#### NextJS Caveats
 - Any file in _pages/_ will automatically have its own endpoint. I.e: _pages/about.jsx_ will route `GET /about` to a React-rendered about page. NextJS uses its own routing distinct from React-Router.
 - Any JS files in _pages/api/_ will become nodejs files for a backend API. However since we are compiling this into a pure front-end app **don't use this feature.**
 - Define custom components in _components/_. Note [react-bootstrap](https://react-bootstrap.github.io/) already gives you dropdowns, cards, tooltips, modals, and many other common features. NextJS also provides Image and Link.
 - NextJS has a built in image optimizer that we **disabled** to allow it to compile into a pure front-end application.


#### More Documentation
 - [nextjs](https://nextjs.org/docs/getting-started) for config, file structure, devops
 - [react-bootstrap](https://react-bootstrap.github.io/) for some prebuilt JavaScript components
 - [react](https://reactjs.org/docs/getting-started.html) for building new components
 - [bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for css classes & styling
 - [mdn](https://developer.mozilla.org/en-US/) for low-level code and core web infrastructure
 - [cypress](https://docs.cypress.io/guides/getting-started/opening-the-app) for unit and integration testing


## Contributing
Anyone is open to leave issues or contribute in the spirit of open source. If you would like to participate please fork and use proper [Git practices](https://docs.github.com/en/get-started/quickstart/github-flow).


## License

Copyright 2022 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
```
http://www.apache.org/licenses/LICENSE-2.0
```
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

