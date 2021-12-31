---
search:
  boost: 2  
---

# Terminology

There are lots of words used to describe cemeteries, graves and related concepts. Following the [Graves Ontology Specification - 1.0](https://rdf.muninn-project.org/ontologies/graves.html) we describe the concepts applicable to Toowong Cemetery. 

!!! warning "Work in progress" 

    This page is under construction and is being written to gain a better understanding of how we may use the [Graves Ontology Specification - 1.0](https://rdf.muninn-project.org/ontologies/graves.html) to publish data

There are four key concepts: 

- `Cemetery` / `Archaeological dig sites` - the primary places where graves are found)
- `Grave` - a receptacle for human remains
- `Human remains` - full skeletons, partial remains, or ashes
- `Monument` - A physical feature commemorating something or someone.

## Cemetery / Archaeological digs

Although the Graves Ontology supports describing many types of places graves are found (`Shipwrecks`, `Military Cemeteries`, and `Churchyards`), we will only use `Cemetery` and `Archaeological dig sites`.

`Cemetery` and `Archaeological dig sites` can have the following properties. The table below explain these and describe the values we use for Toowong Cemetery and our Archaeological dig sites.

| Property | Description | Toowong Cemetery | Archaeology Dig sites |
| :--      | :--         | :--     | :-- |
| id | Local ID number for non linked open data processing. |   |  |
| siteName | The name of the site  | `Toowong Cemetery` [^1] | `Archaeology at Toowong Cemetery yyyy` where `yyyy` is the year of the dig [^2]  |
| hasLocation | Location in terms of longitude, latitude, or geonames or street address. | `-27.47424671, 152.98253008` | `lat,long` at the centroid of the dig site |
| hasMap | A reference to an image of the cemetery map or computer readable coordinate system class | map image showing portions, sections and internal roads  | map image [^7] |
| startDate | {++The date the site started++} | `1871-01-03` or `1875-07-05` [^3]| date the dig started |
| endDate | {++The date the site ended++}  | `null` | date the dig ended |
| hasState  | The {++current++} state of the object in terms of in construction, ruined, destroyed. | `Servicable` | `Servicable` or `Abandoned` |
| movedFrom | is this applicable to this Class? | `null` [^4] | `null` |
| movedTo | is this applicable to this Class? |  `null` [^5] | `null` |
| denomination | The religious denomination of the Cemetery  |  `null` | `null` |
| containsGrave |  |  tba[^6] | `null` |

[^1]: Should we capture the time of change from, or the alias of, `Brisbane General Cemetery`.
[^2]: This is based on the name advertised on the [National Archaeology Week](https://archaeologyweek.org/events-list/archaeology-at-toowong-cemetery) site.
[^3]: Should this be date of the first burial, or the date of the official opening, or another date? 
[^4]: Is this applicable to this Class? The description seems to imply that is only applicable to Graves.
[^5]: Is this applicable to this Class? The description seems to imply that is only applicable to Graves.
[^6]: If applicable, this would contain ~50000 entries!
[^7]: Link to a map showing the area of the dig within Toowong Cemetery

## Grave 

A grave is a receptacle for the remains of human beings. A grave may be empty, a single grave, a war grave, or a mass grave. It is likely that for Toowong Cemetery we will only use: 

- `Grave` - "A grave is a receptacle for the remains of human beings."
- `War Grave` - "A grave of a soldier or person involved in a war. This can include non-combatants".

We will define criteria to determine when a grave should be defined as a `War Grave`

| Property         | Description | Toowong Cemetery Graves | 
| :--              | :--         | :--                     | 
| id               | Local ID number for non linked open data processing. | `pp-ss-gg` [^10] |
| hasLocation      | Location in terms of longitude, latitude, or geonames or street address. | `lat,long` and / or `pp-ss-gg` | 
| startDate        |             | null [^11]              |
| endDate          |             |                         |
| hasState         |             |                         |
| movedFrom        |             |                         |
| movedTo          |             |                         |
| containsRemains  |             |                         |
| graveContainedIn |             |                         |

[^10]: portion-section-grave, or a unique id? 
[^11]: This could be the date of the first burial instead of null. Apply if it provides value.

### Human remains 

Human remains 
|- Skeletons
|- Partial remains
|- Ashes 


## Tombstone

Tombstone (aka Headstone, Gravestone)

Cenotaph - A cenotaph is an empty tomb or a monument erected in honour of a person or group of people whose remains are elsewhere. It can also be the initial tomb for a person who has since been reinterred elsewhere.

Monument - A physical feature commemorating something or someone.

Monument

- Plaque
- Statue
- Memorial
    - Tombstone (aka Headstone, Gravestone)
    - Tumulnus (aka Burial Mound)
    - Sarcophagus



## Test cases

### Grave with a Headstone and Footstone

### Grave with multiple Markers

### Cemetery name change


### Pioneer Children

- Tombstones (and Human Remains?) moved from Graves in North Quay Cemetery site
- Graves reinstated (and Human Remains interred?) in Toowong Cemetery

### Archaeological Dig within Cemetery

- Dig within Toowong Cemetery
- Finds Tombstone from Paddington Cemetery
- No Human Remains

### Archaeological Dig at Lang Park

- Archaeological Dig in Lang Park finds Human Remains
- Human Remains moved to Toowong Cemetery and interred under new Monument

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
- Grave now servicable

### Tombstone repaired to commemorate an event

- tombstone damaged
- tombstone rebuilt, funded by, to commemorate an event

### Monument planned

- human remains placed in grave
- temporary tombstone built 
- Monument planned but unbuilt
