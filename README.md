<p align="center">
  <img src="src/images/logo_elastic.png" width="60"  alt="Elastic Logo"/>
</p>

<h1 align="center">
  Trigger EUI: Build fantastic UX for [Trigger](https://github.com/taniacomputer/Trigger) and [MBT](https://github.com/taniacomputer/MenuBarTrigger) with [EUI](https://github.com/elastic/eui).

## What's this about?

Standard Mac IT frameworks often leave much to be desired when you need to interact with end users. Tools like [Notifier](https://github.com/dataJAR/Notifier) provide a way to do push notifictions, but rich notifications or interactive UX tends to require unsavory mixes of Apple Script or depricated tools like CocoaDialog.

Thankfully, [Tania's](https://github.com/taniacomputer) fantastic Trigger family of applications provides a simple and flexible way to interact with end users via HTML and the Shell. But while Trigger apps make it easy to _display_ a UX, you have to build one first, and that can be a daunting challenge.

Trigger-EUI helps bridge this gap by combing the powerful, well documented, and accessible [Elastic UI framework](https://eui.elastic.co/#/) with a [Static Site Generator](https://github.com/vercel/next.js). Mac Admins can quickly build beautiful UIs, display them with Trigger, and bask in the warm glow of a job well done.


## 🚀 Quick start

1.  **Install yarn**

    This starter expects to use [yarn](https://yarnpkg.com/) to manage
    dependencies, so go install it.

1.  **Copy the Next.js starter**

    Clone the repository:

    ```sh
    git clone https://github.com/elastic/next-eui-starter.git my-eui-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-eui-starter/

    # Install depdendencies.
    yarn

    # Optional: start a new git project
    rm -rf .git && git add . && git commit -m "Initial commit"

    # Start the dev server
    yarn dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

    Open the `my-eui-starter` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

1. **Deploy your site to GitHub pages**

    When you're ready to deploy and share your site, you can use the provided `yarn build-docs` script to do so. The first time you do this, you need to do some preparation:

    1. Modify the `pathPrefix` option in `next.config.js` to reflect the name of your GitHub repo
    1. Commit the above change
    2. Create the GitHub pages branch: `git branch gh-pages`

    Then whenever you want to update your site:

    1. Commit any pending changes
    1. Run `yarn build-docs`
    1. Publish the `master` and `gh-pages` branches by pushing them to GitHub: `git push origin master gh-pages`
    1. Edit your repository settings to ensure your repository is configured so that the `gh-pages` branch is used for serving the site. (You only need to do this once, but you that you have to push the branch before you can change this setting)
    1. Access your site at https://your-username.github.io/repo-name

---

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── .eslintrc.js
    ├── .gitignore
    ├── .next/
    ├── .prettierrc
    ├── LICENSE
    ├── README.md
    ├── docs/
    ├── next.config.js
    ├── node_modules/
    ├── package.json
    ├── public/
    ├── src/
    ├── tsconfig.json
    └── yarn.lock

1.  **`.eslintrc.js`**: This file configures [ESLint](https://eslint.org/), which will check the code for potential problems and style issues. It also integrates with Prettier for formatting.

2.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

3.  **`.next`**: The `next` command line tool uses this for various purposes. You should never need to touch it, but you can delete it without causing any problems.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`LICENSE`**: Gatsby is licensed under the MIT license.

6.  **`README.md`**: A text file containing useful reference information about your project.

7.  **`docs/`**: When you build your project so that it can be shared, this is where the final result is generated.

8.  **`next.config.js`**: This file customizes the Next.js build process so that it can work with EUI.

9.  **`node_modules/`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

11. **`public/`**: Files that will never change can be put here. This starter project automatically puts EUI theme files here during the build

12. **`src/`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

13. **`tsconfig.json`**: This file configures the [TypeScript](https://www.typescriptlang.org/) compiler

14. **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 🎓 Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). You probably want to being by following the [Getting Started Guide](https://nextjs.org/learn/basics/getting-started).

## Other features

* Bundle analysis - run `yarn analyze` and two windows will open in your browser, showing how big your server and client bundles are, and where that data is coming from. You can use this information to work out where you're sending too much data to the client, and speed up your pages.
