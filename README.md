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

## Developer Quickstart
 1. `git clone git@github.com:PHFIC/phfic.github.io.git`
 2. `cd phfic.github.io`
 3. `npm install`
 4. `npm run dev`
 5. Go to <http://localhost:3000/>

## Developer Guide
This is a ReactJS app that uses the NextJS framework to compile into a bundle of static HTML/CSS/JavaScript pages, that can then be rendered on GitHub Pages. File _pages/\_app.jsx_ is where it all starts.

#### NextJS File Structure & Caveats
 - Any file in _pages/_ will automatically have its own endpoint. I.e: _pages/about.jsx_ will route `GET /about` to a React-rendered about page. NextJS uses its own routing distinct from React-Router.
 - Any JS files in _pages/api/_ will become nodejs files for a backend API. However since we are compiling this into a pure front-end app **don't use this feature.**
 - Define custom components in _components/_. Note [react-bootstrap](https://react-bootstrap.github.io/) already gives you dropdowns, cards, tooltips, modals, and many other common features. NextJS also provides Image and Link.
 - NextJS has a built in image optimizer that we **disabled** to allow it to compile into a pure front-end application.

#### Testing
Run `npm run lint` to run eslint and sanity-check your code.

Run `npm run test-unit` to run component tests with [jest](https://jestjs.io/docs/getting-started).

Run `npm run test-chrome` to launch an automated end-to-end integration test. This uses the [nightwatch](https://nightwatchjs.org/guide/overview/what-is-nightwatch.html) framework to mimic human-using-browser interaction we program into the _tests/integration/_ folder. A test summary will be saved in your local _tests\_output/_ folder.

Run `npm run test` to run **both** unit and integration tests.


#### More Documentation
 - [nextjs](https://nextjs.org/docs/getting-started) for config, file structure, devops
 - [react-bootstrap](https://react-bootstrap.github.io/) for some prebuilt JavaScript components
 - [react](https://reactjs.org/docs/getting-started.html) for building new components
 - [bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for css classes & styling
 - [mdn](https://developer.mozilla.org/en-US/) for low-level code and core web infrastructure
 - [nightwatch](https://nightwatchjs.org/guide/overview/what-is-nightwatch.html) for end-to-end integration testing
 - [jest](https://jestjs.io/docs/getting-started) for unit testing


## Contributing
Anyone is open to leave issues or contribute in the spirit of open source. If you would like to participate please fork and use proper [Git practices](https://docs.github.com/en/get-started/quickstart/github-flow).


## License

Copyright 2022 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
```
http://www.apache.org/licenses/LICENSE-2.0
```
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

