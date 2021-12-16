---
hide:
  - navigation
search:
  exclude: true  
---

#  Data

**[We publish our data with an open licence](legal.md) to help others discover and share the history and stories of Toowong Cemetery.**

## Data Formats 

Data on this site is published:

- on pages as HTML tables
- as a [Tabular Data Package](https://specs.frictionlessdata.io/tabular-data-package/) following the [Frictionless Data](https://frictionlessdata.io) specification. This is a .ZIP file that includes: 

    - a Comma Separated Value (CSV) file representation of the table displayed on the pages
    - a JSON [Table Schema](https://specs.frictionlessdata.io/table-schema/) file describing the structure of the data 
    - a [Markdown](https://commonmark.org/help/) Provenance file

We are experimenting with publishing data as Linked Data available and providing it:

- as an RDF or JSON-LD data dump 
- via a [GraphQL](https://graphql.org) API

## Data Schema

In the JSON Table Schema published with each CSV file, we describe the structure and valid values of the data.

For the Linked Data we are considering using the [Graves Ontology Specification - 1.0](https://rdf.muninn-project.org/ontologies/graves.html)

Data objects we create are: 

- Biographies
- Headstones (images, inscriptions, status)
- Walks (a route from grave to grave, linked to people, headstones and biographies)

Where practical, we link to authoritative data sources, rather than duplicate data. We want to link our data to:

- People
    - Biography
    - Birth
    - Death
    - Marriage
    - Relationships to other Data objects
    - Image

- Organisations
    - Name
    - Founded
    - Disbanded
    - Successor / Predecessor
    
- Events

- Geographic Locations (latitude, longitude, GDA2020 or Global datum)
    - Cemetery (polygon)
    - Portions (polygon)
    - Sections (polygon)
    - Graves (point)
    - Cemetery Roads (polygon)
    - Cemetery Building Outlines (polygon)
    - Features of Interest (polygon or point)
    - Signs (point)
    - Waterways (polygon)
    - Bridges and Culverts (polygon)
    - Trees (especially weed trees and those destroying graves) (point)
    
- Sources
    - References to resources to justify the accuracy of the data
    
## Data Visualisations

Visualisations we are considering include: 

- [Maps of walks](https://vega.github.io/vega-lite/examples/geo_line.html)
- [Grave locations](https://vega.github.io/vega-lite/examples/geo_layer.html)
- [A individual's, family's or group of related people's timeline](https://bl.ocks.org/jakevdp/1643ebb6853e76c32e47a969f415f3ea)


## Data Publishing tools

We use [Data Curator](https://www.qcif.edu.au/news/data-curator-now-in-app-stores/) to package the data into a Tabular Data Package on GitHub. 

We are exploring tools to convert CSV data (the master) into Markdown tables for inclusion in this website:

- [OpenRefine](https://openrefine.org)  
- An [Atom package](https://github.com/takezoe/atom-csv-markdown) 

We have not decided on a Linked Data toolset yet.

We are considering [Vega-Lite](https://vega.github.io/vega-lite/) to specify our own visualisations. These may be represented as static images on the website as the data does not change often but we are also exploring [tools for embedding vega-lite visualizations](https://vega.github.io/vega-lite/ecosystem.html#tools-for-embedding-vega-lite-visualizations)

## Data Consumers

Our end goal for publishing and linking our data is to enable others discover and share new stories about Toowong Cemetery.

We may encourage this by participating in hackathons (such as [GovHack](https://govhack.org)), experiments and other innovation events.
