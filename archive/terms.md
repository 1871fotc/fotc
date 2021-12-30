---
search:
  boost: 2  
---

# Headstones

The headstones in Toowong Cemetery come in many different **[shapes](shapes.md)**, contain **[mysterious signs](signs.md)**, and display *[symbols](symbols.md)** that represent different beliefs and values.  

## Terms

There are lots of words used to describe cemeteries, graves and related objects. 

We use four concepts to identify graves: 

- Cemetery / Archaeological digs (primary places where graves are found)
- Grave (a receptacle for human remains)
- Human remains (full skeletons, partial remains, ashes)
- Tombstone ()

### Dead People Place

Dead People Place 
|- Cemetery
   |- Military Cemetery
   |- Churchyard
|- Dig site
|- Shipwreck



Has properties: 

graves:hasState
graves:hasMap
graves:siteName
graves:id
graves:movedFrom
graves:movedTo
graves:endDate
graves:startDate
graves:hasLocation
graves:denomination
graves:containsGrave

### Container of human remains 

Container of human remains 

Human Remains 
|- Grave 
    |- Empty grave
    |- Mass grave - True if the grave contains more than the remains of one person. This limit is arbitrary and needs debate.
    |- War grave - A grave of a soldier or person involved in a war. This can include non-combatants.




Has properties: 

graves:hasState
graves:id
graves:movedFrom
graves:movedTo
graves:endDate
graves:startDate
graves:containsRemains
graves:graveContainedIn

### Human remains 

Human remains 
|- Skeletons
|- Partial remains
|- Ashes


### Tombstone

Tombstone (aka Headstone, Gravestone)

Cenotaph - A cenotaph is an empty tomb or a monument erected in honour of a person or group of people whose remains are elsewhere. It can also be the initial tomb for a person who has since been reinterred elsewhere.

Monument - A physical feature commemorating something or someone.

Monument

|- Plaque
|- Statue
|- Memorial
  |- Tombstone (aka Headstone, Gravestone)
  |- Tumulnus (aka Burial Mound)
  |- Sarcophagus



## Test cases

### Grave with a Headstone and Footstone

### Grave with multiple Markers


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
