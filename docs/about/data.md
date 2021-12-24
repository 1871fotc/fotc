#  Data

**[We publish our data with an open licence](legal.md) to help others discover and share the history and stories of Toowong Cemetery.**

## Data Formats 

Data on this site is published:

- on pages as HTML tables
- as a Comma Separated Value (.CSV) file 
- as a [Tabular Data Package](https://specs.frictionlessdata.io/tabular-data-package/) following the [Frictionless Data](https://frictionlessdata.io) specification. This is a .ZIP file that includes: 

    - a Comma Separated Value (CSV) file representation of the table displayed on the pages
    - a JSON [Table Schema](https://specs.frictionlessdata.io/table-schema/) file describing the structure of the data 
    - a [Markdown](https://commonmark.org/help/) Provenance file

We plan to experiment with publishing data as Linked Open Data and provide it:

- as an RDF or JSON-LD data dump 
- via a [GraphQL](https://graphql.org) API

## Data Schema

For Comma Separated Value files, a schema is provided in the Tabular Data Package.

For Linked Data we are considering using the [Graves Ontology Specification - 1.0](https://rdf.muninn-project.org/ontologies/graves.html) ([GitHub](https://github.com/muninn/graves)). Data about graves could be linked to data about:

- People - [FOAF Vocabulary Specification](http://xmlns.com/foaf/spec/)
    - [Organisation](https://www.w3.org/TR/vocab-org/) 
        - [Military Ontology](http://rdf.muninn-project.org/ontologies/military.html) ([Github](https://github.com/muninn/military))
- [Biography](https://vocab.org/bio/) ([GitHub](https://github.com/iand/vocab-bio))
- News - [rNews](http://dev.iptc.org/rNews) but [perhaps another standard is more appropriate](http://dev.iptc.org/rNews-and-other-standards)
- [Geographic locations](https://www.w3.org/2003/01/geo/)
- [Geographic names](http://www.geonames.org/ontology/documentation.html)

## Data Owners

Data objects Friends of Toowong Cemetery create include: 

- Biographies
- Headstones (images, inscriptions, status)
- Walks (a route from grave to grave, linked to people, headstones, and biographies)

Where practical, we link to authoritative data sources, rather than duplicate data. We will encourage other data owners to publish their data as linked open data, or share it with an open licence. 

Data we would like to link to includes: 

- Geographic Locations (latitude, longitude, WGS84 datum)
    - Owned by Brisbane City Council (at least in part)
        - Cemetery boundary (polygon)
        - Portion boundaries (polygon)
        - Section boundaries (polygon)
        - Graves (point) - capture graves listed in walks as a minimum
        - Cemetery Road encasements (polygon)
        - Surrounding Road encasements (polygon)
        - Cemetery Building outlines (polygon)
        - Features of Interest (polygon or point) - Symbology display, honour board
        - Information Signs (point) - grave-side, walks, general information
        - Waterways (polygon) - label Langsville Creek. Consider showing old dam.
        - Bridges and Culverts (polygon)
        - Contours (polygon) - these will help create a mobility map
    - Not currently captured    
        - Trees (especially weed trees and those destroying graves) (point)
        
and data from: 
        
- State Library Queensland
- State Archives
- Trove
- and more

## Data Publishing 

We strive to follow the W3C [Data on the Web Best Practices](https://www.w3.org/TR/dwbp/).

We use [Data Curator](https://www.qcif.edu.au/news/data-curator-now-in-app-stores/) to package our data into a Tabular Data Package. 

We are exploring tools to convert CSV data (the master) into Markdown tables for inclusion in this website:

- [OpenRefine](https://openrefine.org)  
- An [Atom package](https://github.com/takezoe/atom-csv-markdown) 

We have not decided on a Linked Data publishing toolset yet, but are aware of: 

- [Swirrl](https://www.swirrl.com)
- [Ontotext](https://www.ontotext.com)
- [OntoRefine](https://graphdb.ontotext.com/documentation/free/loading-data-using-ontorefine.html)

When we work things out, we'll look to follow the W3C [Best Practices for Publishing Linked Data](https://www.w3.org/TR/ld-bp/)

## Data Visualisation

Static Visualisations we are considering include: 

- [Maps of walks](https://vega.github.io/vega-lite/examples/geo_line.html)
- [Grave locations](https://vega.github.io/vega-lite/examples/geo_layer.html)
- [A individual's, family's or group of related people's timeline](https://bl.ocks.org/jakevdp/1643ebb6853e76c32e47a969f415f3ea)

We are considering [Vega-Lite](https://vega.github.io/vega-lite/) to specify our own visualisations. These may be represented as static images on the website as the data does not change often but we are also exploring [tools for embedding vega-lite visualizations](https://vega.github.io/vega-lite/ecosystem.html#tools-for-embedding-vega-lite-visualizations).

Dynamic visualisations we are considering include:

- A relationship explorer, traversing links from Person to Biography, Grave, Organisation, etc. 


## Data Consumers

Our end goal for publishing and linking our data is to enable others to discover and share new stories about Toowong Cemetery.

We may encourage this by participating in hack-a-thons (such as [GovHack](https://govhack.org)), experiments with other organisations. 

We're inspired by the works of others, including:

- [Visualising linked data from 'A biographical record of Queensland women', 1939](https://www.slq.qld.gov.au/blog/visualising-linked-data-biographical-record-queensland-women-1939). Our initial inspiration for exploring linked data.
- [Loud Numbers](https://anchor.fm/loudnumbers/episodes/The-End-of-the-Road-e131bnl). What would Toowong Cemetery sound like? 
