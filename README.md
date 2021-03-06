# Friends of Toowong Cemetery website

A port of the Friend of Toowong Cemetery site - `https://fotc.org.au/`. View it at https://1871fotc.github.io/fotc/

## About

- This site is built using [Material for MkDocs Insiders](https://squidfunk.github.io/mkdocs-material/). 
- [Pages](https://github.com/1871fotc/fotc/tree/main/docs) are written in Markdown
- Snippets are used to modularise content
- Images are stored in [/assets](https://github.com/1871fotc/fotc/tree/main/docs/assets)
- Calendar Invites are stored in [/assets/Calendar](https://github.com/1871fotc/fotc/tree/main/docs/assets/calendar) and are made with https://ical.marudot.com. Use https://icalendar.org/rrule-tool.html to create first/last day of the week rules. 
- The Site is configured using [mkdoc.yml](https://github.com/1871fotc/fotc/blob/main/mkdocs.yml)
- Some customisations are made:
    - [stylesheet extras](https://github.com/1871fotc/fotc/tree/main/docs/stylesheets) 
    - [overrides](https://github.com/1871fotc/fotc/tree/main/overrides) for the banner and 404 page
    - [javascript](https://github.com/1871fotcs/fotc/tree/main/docs/javascripts) to sort tables
- Source images are store in /source-images. Some images are made with Sketch
- The website uses Google Forms to collect Site Feedback, Membership Applications, Story Contributions 
- Use https://www.deadlinkchecker.com/website-dead-link-checker.asp to check for broken links

## Contribute

To contribute you can:

- [Join the conversation](https://github.com/1871fotc/fotc/discussions) in the discussion forum
- [Share content](https://github.com/1871fotc/fotc/issues/new/choose) under an open license or contribute it to the public domain
- [Report an error](https://github.com/1871fotc/fotc/issues/new/choose), after checking that it's not [already reported](https://github.com/1871fotc/fotc/issues)
- [Make a suggestion](https://github.com/1871fotc/fotc/issues/new/choose)

## Contributors

Thanks to everyone for their contributions on [Github](https://github.com/1871fotc/fotc/graphs/contributors) and in the [discussion forum](https://github.com/1871fotc/fotc/discussions).

## Development

Run locally `$ mkdocs serve` to preview your site before publishing

Build `$ mkdocs build` creates html files locally in \site

Deploy occurs when there is a commit to the main branch which triggers a [workflow](https://github.com/1871fotc/fotc/blob/main/.github/workflows/ci.yml)

Keep things up-to-date:

`pip3  install --upgrade git+https://{GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git`
