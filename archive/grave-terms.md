---
search:
  exclude: true
---

# Grave Terminology

There are lots of concepts used to describe cemeteries, graves and related things. Following the [Graves Ontology Specification - 1.0](https://rdf.muninn-project.org/ontologies/graves.html) [:fontawesome-brands-github:](https://github.com/muninn/graves) we describe the concepts applicable to Toowong Cemetery. 

!!! warning "Work in progress" 

    This page is under construction and is being written to gain a better understanding of how we may use the Graves Ontology Specification to publish data.


There are four key concepts: 

- Cemetery / Archaeological dig sites - the primary places where graves are found
- Grave / Funerary Urn - a receptacle for human remains
- Human remains - full skeletons, partial remains, or ashes
- Monument - A physical feature commemorating something or someone.

## Cemetery / Archaeological digs

Although the Graves Ontology supports describing many types of places graves are found, a (`Shipwreck`, `Military Cemetery`, and a `Churchyard`), we will only use `Cemetery` and `Archaeological dig site`.

`Cemetery` and `Archaeological dig sites` have properties that describe them. The table below explains each property and the values we use for Toowong Cemetery and our Archaeological dig sites within the cemetery.

| Property      | Description                       | Cemetery | Archaeology dig site |
| :--           | :--                               | :--              | :--                   |
| [`id`][id]    | Local ID number for non linked open data processing. | `1` | A unique positive integer that has no meaning |
| [`siteName`][siteName]      | The name of the site              | `Toowong Cemetery` [^1] | `Archaeology at Toowong Cemetery yyyy` where `yyyy` is the year of the dig [^2]  |
| [`hasLocation`][hasLocation]   | Location in terms of longitude, latitude, or geonames or street address. | `-27.47424671, 152.98253008` [^3] | `lat,long` at the centroid of the dig site, or a polygon representing the extent of the dig [^4] |
| [`hasMap`][hasMap]        | A reference to an image of the cemetery map or computer readable coordinate system class | map image showing portions, sections and internal roads  | map image [^5] |
| [`startDate`][startDate]     |                                   | `18701007` [^6]| date the dig started |
| [`endDate`][endDate]       |                                   | `null`           | date the dig ended    |
| [`hasState`][hasState]      | The state of the object in terms of in construction, ruined, destroyed. | `Serviceable` | `null` [^7] |
| [`movedFrom`][movedFrom]     |                                   | `null` [^8]      | `null`                |
| [`movedTo`][movedTo]       |                                   |  `null` [^9]     | `null`                |
| [`denomination`][denomination]  | The religious denomination of the Cemetery |  `null` | `null`                |
| [`containsGrave`][containsGrave] |                                   |  tba[^10]        | `null` [^11]          |

Toowong Cemetery is equivalent to dbpedia entry for [Toowong Cemetery](https://dbpedia.org/describe/?url=http%3A%2F%2Fdbpedia.org%2Fresource%2FToowong_Cemetery&sid=4527) at `https://dbpedia.org/describe/?url=http%3A%2F%2Fdbpedia.org%2Fresource%2FToowong_Cemetery&sid=4527`


[^1]: Should we capture the time of change from, or the alias of, `Brisbane General Cemetery`. (See [#19](https://github.com/muninn/graves/issues/19) on GitHub.) 
[^2]: This is based on the name advertised on the [National Archaeology Week](https://archaeologyweek.org/events-list/archaeology-at-toowong-cemetery) site. Other formats may be needed for digs not associated with National Archaeology Week.
[^3]: From the **[Toowong Cemetery heritage listing](https://apps.des.qld.gov.au/heritage-register/results/?q=Toowong+Cemetery)** in the Queensland Heritage Register. Toowong Cemetery is also point feature 12420790 in Geonames.org. May change to a polygon if supported by an update to Specification.
[^4]: If the Ontology is updated to support locations other than point data, then describe a polygon that covers the extent of the dig. (See [#2](https://github.com/muninn/graves/issues/2) on GitHub.)

[^5]: Link to a map showing the area of the dig within Toowong Cemetery
[^6]: This is the date the cemetery became a *thing*. The land for the cemetery was first reserved in 1866 (no reference in Gazette or Hansard). The reserve of 250 acres 1 rood was [gazetted](../assets/documents/Queensland_Gov_Gazette_8_October_1870_v11_93.pdf) and the [Cemetery Trustees appointed](../assets/documents/Queensland_Gov_Gazette_8_October_1870_v11_93.pdf) 7 October 1870.
[^7]: The states defined do not seem to be applicable to Archaeology dig sites. Are more needed or do definitions need to be broadened? Would [Serviceable](https://rdf.muninn-project.org/ontologies/graves-en.html#term_Servicable) be an appropriate state to use? 
[^8]: Is this applicable to this Class? The description seems to imply that is only applicable to Graves.
[^9]: Is this applicable to this Class? The description seems to imply that is only applicable to Graves.
[^10]: If applicable, this would contain ~50000 entries!
[^11]: Should null values be entered or the property excluded? Is this handled differently, for example "missing data" vs "null data" (not applicable)

### Brisbane General Cemetery example

Brisbane General Cemetery is also known as Toowong Cemetery. No evidence has been found so far to indicate that this is a formal name change linked to an event. 

Key dates associated with the cemetery include: 

- 1866 - 200 acres was reserved for cemetery purposes. It could be argued that is when cemetery began as a *thing* and is the `startDate` for the cemetery.
- 7 October 1870 - The Cemetery Trustees were appointed. This date is related to the [Trust](https://spec.edmcouncil.org/fibo/ontology/BE/Trusts/Trusts/Trust) as a separate legal entity. It is not captured in the example below.
- 7 October 1870 - The reserved land is gazetted as the Brisbane General Cemetery. This will be used as the `startDate` for the cemetery.
- 3 January 1871 - First burial (this is not directly related to the cemetery. It is a date related to Remains being placed in Grave. It is not captured in the example below).
- 5 July 1875 - The Brisbane General Cemetery officially opening is an Event. 


``` xml linenums="1"
<graves:Cemetery rdf:about="Toowong Cemetery">
  <!-- need to determine which dublin core properties are useful to add -->
  <dc:source>https://stephen-gates.github.io/fotc/</dc:source> 
  <graves:id rdf:resource="1"/>
  <graves:siteName>Toowong Cemetery</graves:siteName>
  <!-- The resource probably should be https://dbpedia.org/sparql?query=define%20sql%3Adescribe-mode%20%22CBD%22%20%20DESCRIBE%20%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FToowong_Cemetery%3E&output=application%2Frdf%2Bxml -->
  <owl:sameAs rdf:resource="https://dbpedia.org/describe/?url=http%3A%2F%2Fdbpedia.org%2Fresource%2FToowong_Cemetery&sid=4527"/>
  <graves:hasLocation>
  <geo:Point rdf:about="Toowong Cemetery Center Point">
    <geo:lat>-27.47424671</geo:lat>
    <geo:long>152.98253008</geo:long>
  </geo:Point>
  <graves:hasLocation>
  <!-- Map of grave locations according to the Brisbane City Council Cemeteries Search website -->   
  <graves:hasMap rdf:resource="https://graves.brisbane.qld.gov.au/pdf/Facilities_cemeteries_Toowong.pdf"/>
  <graves:startDate>18701007</graves:startDate> 
  <graves:hasState>Serviceable</graves:hasState>
  <!-- Create a WKT on Geonames for Toowong Cemetery -->   
  <gn:locatedIn rdf:resource="Toowong"/>  
  <graves:denomination rdf:resource=""/>
</graves:Cemetery>
```
*<small>Code snippet has not been [validated](https://www.w3.org/RDF/Validator/).</small>*

### Archaeology dig site example

``` xml linenums="1"
<graves:Dig_site rdf:about="Archaeology at Toowong Cemetery 2019">
 <!-- need to determine which dublin core properties are useful to add -->
 <dc:source>https://stephen-gates.github.io/fotc/</dc:source> 
 <graves:id rdf:resource="14"/>
 <graves:siteName>Archaeology at Toowong Cemetery 2019</graves:siteName>
 <graves:hasLocation>
   <geo:Point rdf:about="Archaeology at Toowong Cemetery 2019 Center Point">
     <geo:lat>-27.4742465</geo:lat>
     <geo:long>152.982535</geo:long>
   </geo:Point>
 <graves:hasLocation>
 <!-- Map of dig site location within Toowong Cemetery according to the Friends of Toowong Cemetery website -->   
 <graves:hasMap rdf:resource="https://stephen-gates.github.io/fotc/assets/example-dig-site-map.png"/>
 <graves:startDate>20190515</graves:startDate> 
 <graves:endDate>20190517</graves:endDate> 
 <graves:hasState>Serviceable</graves:hasState>
 <!-- Create a WKT on Geonames for Toowong Cemetery -->   
 <gn:locatedIn rdf:resource="Toowong"/>  
</graves:Dig_site>
```
*<small>Code snippet has not been [validated](https://www.w3.org/RDF/Validator/).</small>*


## Grave 

A grave is a receptacle for the remains of human beings. A grave may be empty, a single grave, a war grave, or a mass grave. It is likely that for Toowong Cemetery we will only use: 

- `Grave` - A grave is a receptacle for the remains of human beings.
- `War Grave` - A grave of a soldier or person involved in a war. This can include non-combatants.
- `Funerary Urn` - A vessel to hold cremated ashes.

We will define criteria to determine when a grave should be defined as a `War Grave`

| Property                     | Description | Grave | 
| :--                          | :--         | :--                     | 
| [`id`][id]                   | Local ID number for non linked open data processing. | `pp-ss-gg` [^20] |
| [`hasLocation`][hasLocation] | Location in terms of longitude, latitude, or geonames or street address. | `lat,long` and / or `pp-ss-gg` | 
| [`startDate`][startDate]     |             | null [^21]              |
| [`endDate`][endDate]         |             |                         |
| [`hasState`][hasState]       |             |                         |
| [`movedFrom`][movedFrom]     |             |                         |
| [`movedTo`][movedTo]         |             |                         |
| [`containsRemains`][containsRemains] |             |                         |
| [`graveContainedIn`][graveContainedIn] |             |                         |

[^20]: portion-section-grave, or a unique id. How would we handle Urns? 
[^21]: This could be the date of the first burial instead of null. Apply if it provides value.


### Grave example

``` xml linenums="1"
<graves:Grave rdf:about="">
 <!-- need to determine which dublin core properties are useful to add -->
 <dc:source>https://graves.brisbane.qld.gov.au</dc:source> 
 <graves:id rdf:resource="7A-159A-2"/>
 <graves:hasLocation>
   <geo:Point rdf:about="Portion 7A Center Point. Precise grave location has not yet been captured. Refer to the Cemetery Map for a more precise location.">
    <geo:lat>-27.474246</geo:lat>
    <geo:long>152.98253</geo:long>
   </geo:Point>
 <graves:hasLocation>
 <graves:hasState>Serviceable</graves:hasState>
 <!-- need to add reference  -->
 <graves:containsRemains>...</graves:containsRemains>
 <!-- need to add reference  -->
 <graves:graveContainedIn>...</graves:graveContainedIn>
</graves:Grave>
```
*<small>Code snippet has not been [validated](https://www.w3.org/RDF/Validator/).</small>*

### Single-sided Columbarium wall with niches for ashes in a funerary urn  

Toowong Cemetery has at least three Columbarium walls that have multiple niches. Each niche can receive a funerary urn that contains ashes. A niche that contains a funerary urn is covered with a plaque. In this instance:

- The niche ==(or urn?)== is the grave
- The plaque is the monument 
- The ashes are the human remains 

``` xml linenums="1"
<graves:Columbarium rdf:about="#oneWall">
 <graves:hasPart>
  <graves:Monument  rdf:about="#oneNiche">
   <rdfs:label xml:lang="en">Niche 1</rdfs:label>
   <graves:containsGrave>
    <graves:FuneraryUrn rdf:about="#Johnurn">
     <rdfs:label xml:lang="en">John's Funerary Urn</rdfs:label>
     <graves:containsRemains>
       <graves:Ashes  rdf:about="#JohnAshes">
        <rdfs:label xml:lang="en">John's Ashes</rdfs:label>
        <graves:hisRemains>
         <foaf:Person rdf:about="#John">
          <foaf:name>John</foaf:name>
          <graves:hasCommemoration>
           <graves:Plaque rdf:about="#JohnPlaque">
            <rdfs:label xml:lang="en">Plaque over the niche with John's Ashes</rdfs:label>
            <graves:inscription>John Lives Forever With England</graves:inscription>
            <graves:isPartOf rdf:resource="#oneNiche"/>
           </graves:Plaque>
          </graves:hasCommemoration>
         </foaf:Person>
        </graves:hisRemains>
       </graves:Ashes>
      </graves:containsRemains>
     </graves:FuneraryUrn>  
    </graves:containsGrave>
   </graves:Monument>
 </graves:hasPart>
</graves:Columbarium>
```

## Human remains 

Human remains can be Skeletons, Partial remains, or Ashes. 

| Property    | Description | Remains | 
| :--         | :--         | :--                      | 
| [`id`][id]          | Local ID number for non linked open data processing. | tbc [^30] |
| [`isRemainsOf`][isRemainsOf] | Remains of this Person - A place holder for any information related to the identity of the remains. |  |
| [`movedFrom`][movedFrom] | Moved from - Use this to relate a grave or remains to its original instance elsewhere. Use this for disinterments, relocation, storage, etc... |  |
| [`movedTo`][movedTo] | Moved to - Use this to relate a grave or remains to its next instance elsewhere. Use this for disinterments, relocation, storage, etc... |  |
| [`startDate`][startDate] |  |  |
| [`endDate`][endDate] |  |  |
| [`remainsIn`][remainsIn]   | Remains are in Grave - |  |

[^30]: [marker id](../cemetery/find-a-grave.md/#markers), or a unique id. How would we handle Ashes? 


## Monument

A Monument is a physical feature commemorating something or someone. It can take many forms: 

- Plaque
- Statue
- Memorial
    - Tombstone (aka Headstone, Footstone, Gravestone)
    - Tumulnus (aka Burial Mound)
    - Sarcophagus
    - Cenotaph - an empty tomb or a monument erected in honour of a person or group of people whose remains are elsewhere. It can also be the initial tomb for a person who has since been reinterred elsewhere.

| Property          | Description                            | Monuments | 
| :--               | :--                                    | :--                        | 
| [`id`][id]                | Local ID number for non linked open data processing. |                          | 
| [`siteName`][siteName]           | The name of the site / monument.       |                          | 
| [`hasState`][hasState]  | Object is in a state - The state of the object in terms of in construction, ruined, destroyed.|  | 
| [`startDate`][startDate] |                                        |                          | 
| [`endDate`][endDate]  |                                        |                          | 
| [`hasLocation`][hasLocation]      | Location in terms of longitude, latitude or geonames or street address. |                          | 
| [`monument_title`][monument_title]    | The name of the monument; distinct from the inscription on it |                          | 
| [`inscription`][inscription]       | The inscription on the moment. Can be a string or point to another document. |                          | 
| [`epitaph`][epitaph]     | The short text honouring the deceased person or persons. |                          | 
| [`movedFrom`][movedFrom] | Use this to relate a grave or remains to its original instance elsewhere. Use this for disinterments, relocation, storage, etc... |                          | 
| [`movedTo`][movedTo]  | Use this to relate a grave or remains to its next instance elsewhere. Use this for disinterments, relocation, storage, etc... |                          | 
| [`isCommemorationOf`][isCommemorationOf] | Records any information as to the Person, Group, Event being commemorated or represented. |                          | 
| [`hasCommemoration`][hasCommemoration]   | Records a monument that commemorates or represents the Person, Group or Event. |                          | 
| [`hasMap`][hasMap] | Pointer to a instances or class that describes the map or grid reference system in use. Primarily meant for use with archeological digs and cemeteries, it is potentially useful for very large monuments. | `null` | 
| [`hasPart][hasPart`]           |             |                          | 
| [`isPartOf][isPartOf`]          |             |                          | 
| [`hasNorthFace`][hasNorthFace]      |             |                          | 
| [`isNorthFaceOf`][isNorthFaceOf]     |             |                          | 
| [`hasSouthFace`][hasSouthFace]      |             |                          | 
| [`isSouthFaceOf`][isSouthFaceOf]     |             |                          | 
| [hasWestFace][hasWestFace]       |             |                          | 
| [`isWestFaceOf`][isWestFaceOf]      |             |                          | 
| [`hasEastFace`][hasEastFace]       |             |                          | 
| [`isEastFaceOf`][isEastFaceOf]      |             |                          | 
| [`hasFrontFace`][hasFrontFace]      |             |                          | 
| [`isFrontFaceOf`][isFrontFaceOf]     |             |                          | 
| [`hasRearFace`][hasRearFace]       |             |                          | 
| [`isRearFaceOf`][isRearFaceOf]      |             |                          | 
| [`hasTopPart`][hasTopPart]        |             |                          | 
| [`isTopPartOf`][isTopPartOf]       |             |                          | 
| [`hasBottomPart`][hasBottomPart]     |             |                          | 
| [`isBottomPartOf`][isBottomPartOf]    |             |                          | 




## Test cases


### Simple Tombstone example

- one tombstone
- one human remains

### Headstone and Footstone example

- one Headstone and one Footstone 
- one human remains

### Two headstones on a family grave

- two headstones
- more than two human remains

### Tombstone Destroyed example

``` xml linenums="1"
<graves:Grave rdf:about="">
 <graves:id rdf:resource="5‑28‑1"/>
 <graves:hasState>Serviceable</graves:hasState>
 <graves:hasLocation>
  <geo:Point rdf:about="The precise grave location.">
   <geo:lat>-27.474164550367504</geo:lat>
   <geo:long>152.98545090054034</geo:long>
  </geo:Point>
 <graves:hasLocation>
 <!-- need to add reference to person's remains -->
 <graves:containsRemains>...</graves:containsRemains>
 <!-- need to add reference to Toowong Cemetery -->
 <graves:graveContainedIn>...</graves:graveContainedIn>
 <!-- how do you define next instance? --> 
</graves:Grave>
<graves:Grave rdf:about="">
 <graves:id rdf:resource="5‑28‑1"/>
 <graves:hasState>Serviceable</graves:hasState>
 <graves:hasLocation>
  <geo:Point rdf:about="The precise grave location.">
   <geo:lat>-27.474164550367504</geo:lat>
   <geo:long>152.98545090054034</geo:long>
  </geo:Point>
 <graves:hasLocation>
 <!-- need to add reference to person's remains -->
 <graves:containsRemains>...</graves:containsRemains>
 <!-- need to add reference to Toowong Cemetery -->
 <graves:graveContainedIn>...</graves:graveContainedIn>
</graves:Grave>
```


### Grave with a Headstone and Footstone

### Grave with multiple Markers and Tombstones

- Family buried in a plot consisting of one or more Graves
- Unclear who is buried in which grave
- Graves given a combined identifier 6-17-3/4

### Cemetery name change


### Pioneer Children

- Tombstones (and Human Remains?) moved from Graves in North Quay Cemetery site
- Graves reinstated (and Human Remains interred?) in Toowong Cemetery

### Archaeological Dig within Cemetery

- Dig within Toowong Cemetery
- Finds Tombstone from Paddington Cemetery
- No Human Remains

### Archaeological Dig at Lang Park

- human remains buried in grave in one of a number of adjacent cemeteries in the same area
- cemeteries cleared of headstones, some relocated, others removed and later destroyed
- An archaeological dig finds human remains but no tombstone
- Human remains re-interred at Toowong Cemetery under a new Monument to all those left behind in the orignial cemetery.

### Known person(s) in an unmarked grave

### Known person and unknown person in marked graves

### Destruction of tombstone and grave reused

- Tombstone demolished
- No removal of Human remains
- Reuse of grave for other Human remains
- New tombstone

### Destruction of tombstone and grave available

- Tombstone demolished
- No removal of Human remains
- Grave now serviceable
                    
### Tombstone repaired to commemorate an event

- tombstone damaged
- tombstone rebuilt, funded by, to commemorate an event


<-- cemetery property links -->

[id]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_id
[siteName]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_siteName
[hasLocation]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasLocation
[hasMap]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasMap
[startDate]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_startDate
[endDate]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_endDate
[hasState]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasState
[movedFrom]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_movedFrom
[movedTo]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_movedTo
[denomination]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_denomination
[containsGrave]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_containsGrave

<-- graves property links -->

[containsRemains]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_containsRemains
[graveContainedIn]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_graveContainedIn

<-- remains property links -->

[isRemainsOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isRemainsOf
[remainsIn]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_remainsIn

<-- monument property links -->

[monument_title]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_monument_title
[inscription]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_inscription
[epitaph]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_epitaph
[isCommemorationOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isCommemorationOf
[hasCommemoration]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasCommemoration
[hasPart]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasPart
[isPartOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isPartOf
[hasNorthFace]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasNorthFace
[isNorthFaceOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isNorthFaceOf
[hasSouthFace]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasSouthFace
[isSouthFaceOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isSouthFaceOf
[hasWestFace]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasWestFace
[isWestFaceOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isWestFaceOf
[hasEastFace]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasEastFace
[isEastFaceOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isEastFaceOf
[hasFrontFace]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasFrontFace
[isFrontFaceOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isFrontFaceOf
[hasRearFace]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasRearFace
[isRearFaceOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isRearFaceOf
[hasTopPart]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasTopPart
[isTopPartOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isTopPartOf
[hasBottomPart]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_hasBottomPart
[isBottomPartOf]: https://rdf.muninn-project.org/ontologies/graves-en.html#term_isBottomPartOf
