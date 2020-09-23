# Trigger EUI: Build fantastic UX for [Trigger](https://github.com/taniacomputer/Trigger) and [MBT](https://github.com/taniacomputer/MenuBarTrigger) with [EUI](https://github.com/elastic/eui)

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
    git clone https://github.com/elastic/trigger-eui.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd trigger-eui/

    # Install depdendencies.
    yarn

    # Optional: start a new git project
    rm -rf .git && git add . && git commit -m "Initial commit"

    # Start the dev server
    yarn dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

    Open the `trigger-eui` directory in your code editor of choice and edit the files under `src/pages/`. Save your changes and the browser will update in real time!


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

11. **`public/`**: Files that will never change can be put here. The EUI Theme Files are here!

12. **`src/`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”. `/src/pages` holds most of the magic you're worried about.

13. **`tsconfig.json`**: This file configures the [TypeScript](https://www.typescriptlang.org/) compiler

14. **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 🎓 Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). You probably want to being by following the [Getting Started Guide](https://nextjs.org/learn/basics/getting-started).

## Building and distributing my UX

Once you have the UX images you want, you'll need to build and distribute them. To help with this, we've included a pre-made build script and [Packages](http://s.sudre.free.fr/Software/Packages/about.html) file. To make your package, you'll need to do a few things:

1. **Download and install Packages!** 
You won't be able to edit the file or build it otherwise. Grab it from the link above and run the installer. Easy!

2. **Edit the Code Signing Certificate**
The default package file config is set to sign the generated installer .pkg files using Elastic's Code Signing Certificate. You don't have that, so you'll need to set it to use your own. Open `TriggerEuiResourceBin.pkgproj` and choose **Project > Set Certificate** from the Menu Bar. You can also just chose to remove the certificate entirely, but then your package won't be signed and it many not install on newer versions of macOS.

3. **Edit anything else you'd like**
By default, your trigger-eui files will be installed to `/usr/local/itops/srv/trigger-eui`. You can change this path if you prefer, this is just what we use at Elastic.

4. **Run the build script with the -v argument**
To build a package, just run `yarn build-pkg -v VERSION_NUMBER`. Node will build the site, export it, build an installer package, and put everything in the `builds` folder.

The `VERSION_NUMBER` is important! The number you put here will be used to name the package, AND be hidden in a file called `version` wherever your trigger-eui files are ultimately installed (e.g. `/usr/local/itops/srv/trigger-eui/version` if you use the defaults). When you run a script to display a Trigger message, you can programmatically check this file to ensure the trigger-eui files on a given Mac are at the minimum version to have the content you're trying to display.