# Friends of Toowong Cemetery website

An unofficial port of the Friend of Toowong Cemetery site - `www.fotc.org.au`. View it at https://stephen-gates.github.io/fotc/

## About

- This site is built using [Material for MkDocs Insiders](https://squidfunk.github.io/mkdocs-material-insiders/). 
- [Pages](https://github.com/Stephen-Gates/fotc/tree/main/docs) are written in Markdown
- Snippets are used to modularise content
- Images are stored in [/assets](https://github.com/Stephen-Gates/fotc/tree/main/docs/assets)
- Calendar Invites are stored in [/assets/Calendar](https://github.com/Stephen-Gates/fotc/tree/main/docs/assets/calendar)
- The Site is configured using [mkdoc.yml](https://github.com/Stephen-Gates/fotc/blob/main/mkdocs.yml)
- Some customisations are made:
    - [stylesheet extras](https://github.com/Stephen-Gates/fotc/tree/main/docs/stylesheets) 
    - [overrides](https://github.com/Stephen-Gates/fotc/tree/main/overrides) are used
    - [javascript](https://github.com/Stephen-Gates/fotc/tree/main/docs/javascripts)
- Source images are store in /source-images. Some images are made with Sketch   
- The website uses Google Forms are used to collect Site Feedback, Membership Applications, Biography Contributions 

## Contribute

To contribute you can:

- [Join the conversation](https://github.com/Stephen-Gates/fotc/discussions) in the discussion forum
- [Share content](https://github.com/Stephen-Gates/fotc/issues/new/choose) under a open license or contribute it to the public domain
- [Report an error](https://github.com/Stephen-Gates/report-gallery/issues), after checking that it's not [already reported][issues]
- [Make a suggestion](https://github.com/Stephen-Gates/fotc/issues/new/choose)


## Contributors

Thanks to everyone for their contributions on [Github][github-contributors] and in the [discussion forum][forum].


## Development

Run locally `$ mkdocs serve` to preview your site before publishing

Build `$ mkdocs build` creates html files in \site

Deploy occurs when their is a commit to the main branch which triggers a [workflow](https://github.com/Stephen-Gates/fotc/blob/main/.github/workflows/ci.yml)

Keep things up-to-date:

`pip3  install --upgrade  git+https://{GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git`
