# [Leyao Wang Lab Website](https://leyaowanglab.smart.org.cn/)

This repository contains the code the Leyao Wang Lab's [public website](https://leyaowanglab.smart.org.cn/). The website is based on a custom [VitePress](https://vitepress.dev/guide/what-is-vitepress) theme and the source code from the [Jesse Bloom Lab](https://github.com/jbloomlab/jbloomlab.github.io). We are very appericated to their open source works.

Contributions to the website are made by writing markdown documents and editing YAML and JSON configuration files.

## Installation

Contributions to the lab website are made through [GitHub](https://github.com/leyaowanglab/leyaowanglab.github.io) using pull requests.

Clone the `git` repository locally to edit the site:

```bash
git clone https://github.com/leyaowanglab/leyaowanglab.github.io
cd leyaowanglab.github.io
```

You'll need to install Javascript and its relevant packages to preview the site as you make changes. You're going to need two pieces of software to do this: `Node.js` and `npm`. 

`Node.js` is an environment that allows you to run Javascript code on your computer. `npm` is a package manager that contains the Javascript libraries necessary to create the website. The instructions for installing `Node` and `npm` depend on your operating system and personal preference.

### Without `conda`

Follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install `Node` without a package manager.

### With `conda`

If you have `conda` on your operating system, you can use it to install `node` and `npm`.

```bash
conda env create -f environment.yml
conda activate leyaowanglab.github.io
```

### Install `npm` packages and view page

Regardless of how you installed `Node` and `npm`, verify that the installation worked by running:

```bash
node -v
npm -v
```

If this is the first time you're contributing to the website, you'll need to tell `npm` to install all of the packages in the `package.json` file. To do this, run the following command from within the repository:

```bash
npm install
```

## Developing

While you're editing the content of the website, it's important to see a live preview of your changes. You can do this by booting up a local "development" server to open the local version of the lab website on your browser. To do this, simply run:

```bash
npm run dev
```

Now, there will be a local version of the website running at `http://localhost:5173` (or some other URL printed to the console). Visit this URL in your browser to see a preview of the site.

## Contributing

The general file structure of this website is as follows:

```bash
.
├── README.md
├── people/ # <-------------- team members
├── papers/ # <-------------- papers
├── posts/ # <-------------- news posts
├── projects/ # <-------------- projects and software
├── index.md
├── public/assets/ # <-------------- images (note that paths to this directory are simply /assets/)
├── .vitepress # <-------------- source code
├── tailwind.config.mjs
├── postcss.config.mjs
├── package.json
└── package-lock.json
```

Any file ending `*.md` is converted to a page on the site. The main markdown content lives in the `people`, `papers`, `posts`, and `projects` directories. A page on the website is added for each `.md` file in these directories and a 'landing' page for each is updated accordingly. On each `*.md` page, there is `YAML` frontmatter that configures how the page is rendered and the content of that page.

### Adding Team Members

To add a team member, navigate to the `people` directory. Within the `people` directory, make a new `.md` file with the name of the person you're adding. At the top of the page, add `YAML` with the following fields:

```yaml
---
layout: person # <-------------- Determines the layout
name: "Leyao Wang" # <-------------- Your preferred name
image: "/assets/people/leyao-wang.jpeg" # <-------------- The path to an image of you (a link also works)
title: "Principal Investigator" # <-------------- Your title. Please be as consistent as possible
category: "Staff" # <-------------- One of [Graduate Students, Postdocs, or Staff]
links: # <-------------- Links to your socials. Icons should be one of [github, linkedin, orcid, twitter, bluesky, email, scholar, or website]
  - link: "https://github.com/leyaowanglab"
    icon: "github"
  - link: "leyaowang@smart.org.cn"
    icon: "email"
---
```

It's **key** that you add `layout: person` to the top of the page. This ensures that the markdown file is parsed as a team member page. The other fields are explained above.

Below this `YAML` frontmatter, add a short description of yourself using standard markdown syntax. This description appears when you click on a team member.

**Note**: please ensure that images for each team member (i.e. `image: "/assets/people/leyao-wang.jpeg"`) have a **square aspect ratio** to avoid issues with distortion. Also, images shouldn't be larger than 200KB, otherwise they're slow to load on the website.

#### Adding Alumni

Add Alumni by editing [`/people/alumni.js`](/people/alumni.js). There is a javascript object in the file (basically `JSON` if you're familiar with it). Add an entry to this object:

```js
export const alumni = [
  {
    name: "Someone",
    title: "Graduate Student",
    program: "SMART",
    start: "2022",
    end: "2025",
    currentPosition: "Research Scientist at SMART",
  },
  {
    name: "Someone",
    title: "Postdoc",
    start: "2018",
    end: "2023",
    currentPosition:
      "<a href='https://westlake.edu.cn/'>Assistant Professor</a> at the Westlake University",
  }
]
```

`currentPosition` is parsed as HTML so you can add hyperlinks to current positions.

### Adding Blog Posts

To add a blog post, you create a `*.md` file in the `posts/` directory. At the top of the page, add the following `YAML`:

```yaml
---
layout: post
title: Example markdown styles
date: 2024-04-17
author: Leyao Wang 
---
```

The fields are self-explanatory; their values are visible on the Blog section of the website. Underneath this `YAML` frontmatter, add a short description followed by a `---`. This short description will appear as an excerpt on the Blog section of the website below the post.

```md
---
layout: post
title: Example markdown styles
---

Here's a short excerpt to appear as a description of the post in the blog index.
---
```

The content of the blog post is written using standard markdown syntax.

### Adding Papers

To add a paper to the website, add a `*.md` file to the `papers/` directory. The file should be named based on the year of the paper and author's last name (like `2021_hola.md`).
This information isn't used by the website, but it's nice for consistency.

Add the following `YAML` to the top of the document:

```yaml
---
layout: paper
title: "Prenatal exposure to Hurricane Maria is associated with an altered infant nasal microbiome"
date: "2022-08-01"
authors: 
    - "Sandra Lee"
    - "Ai Zhang"
    - "Nicolas Rosario Matos"
    - "Leyao Wang"
journal: "J Allergy Clin Immunol Glob"
doi: "10.1016/j.jacig.2022.05.001"
link: "https://www.jaci-global.org/article/S2772-8293(22)00035-2/fulltext"
image: "/assets/papers/lee_2022.jpg"
keywords:
    - "Extreme weather"
    - "Infant"
    - "Nasal microbiome"
selected: true # <------- OPTIONAL, this will add the paper to a list of selected paper
---
```

Most fields are self-explanatory. The `keywords` field is automatically parsed by the website, allowing you to quickly filter all of our papers for the ones relevant to you. Please reference this for existing keywords that pertain to your paper. Select a representative image from your paper and add it to the `/public/assets/papers` directory using the same base name as for the markdown file.

There is an optional key called `selected:` that if added and set to `true` will add the paper to a list of selected paper at the top of the page.

### Adding Software/Projects

To add software to the website, add a `*.md` file in `projects/`. Add the following `YAML` to the top of the page:

```yaml
---
layout: project
name: "test"
link: https://test.github.io/v0/
github: https://github.com/test/test.github.io
documentation: https://test.github.io/test-docs/
---
```

Underneath this, add a short markdown description of the software followed by a `---`. This excerpt appears as a description in the Software section of the website.

```md
---
layout: project
...
---

An interactive web tool for visualizing site-level data on a protein structure with the capability of handling complex scenarios like multiple epitopes.

---
```

### Editing Research

Edit the research aims that appear on the Research Page ([.vitepress/theme/Research.vue](.vitepress/theme/Home.vue)) using markdown file [research/research-aims.md](/research/research-aims.md). These research aims will automatically populate the Research Page.

### Editing the home page and section home pages

While the individual posts can be edited by just editing the Markdown, to edit the homepage and the top text for each section (*Blog*, *Team*, *Papers*, *Software*) you will need to edit the corresponding `*.vue` file at [.vitepress/theme](.vitepress/theme) (eg, [.vitepress/theme/Home.vue](.vitepress/theme/Home.vue) for the home page).

## Deployment

The Leyao Wang Lab website is a static [VitePress](https://vitepress.dev/) website with a [fully custom theme and layout](https://vitepress.dev/guide/custom-theme) built using [Vue.js](https://vuejs.org/) for Javascript code and [Tailwind](https://tailwindcss.com/) for CSS styles. The website is hosted with the [Github Pages](https://docs.github.com/en/pages/) based on the content of `gh-pages` branch of [source](https://github.com/leyaowanglab/leyaowanglab.github.io), and accessed from a custom domain ([leyaowanglab.smart.org.cn](https://leyaowanglab.smart.org.cn/)).

Github Pages watches for **pushes** and **pull requests** to the `main` branch of this GitHub repository. These events trigger Github Pages to build the website by running `npm run build` and serve the contents of the resulting `.dist/` directory as the website's source.
