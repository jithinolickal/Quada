# Flat Array to tree with hierarchy

Package Name : [quada](https://www.npmjs.com/package/quada)
Module Name : [quada/flatDataToTree](https://www.npmjs.com/package/quada)

## What makes quada. this unique

Most of the packages that creates a tree hierarchy need input data to be formated. ie, with a parent to child mapping in each row data.

This is where [quada/flatDataToTree](https://www.npmjs.com/package/quada) comes in.This package makes life easy by having input data as the raw data from your database (any input store). All you have to pass is an arry of heirarchy, which is used to group the data like you want.

## Installation

`npm i --save quada`

## Usage

### Import

```js
const quada = require("quada");

quada.flatDataToTree(param1, param2)
```

### Sample

```js
const your_keys = [
    "school"/* , "class", "division", "hour" */
  ];

  const your_raw_data = [
    {
        school: "s1",
        class: "c1",
        division: "d1",
        hour: "h1"
    },
    {
        school: "s1",
        class: "c2",
        division: "d1",
        hour: "h1"
    },
    {
        school: "s2",
        class: "c1",
        division: "d1",
        hour: "h1"
    },
]

quada.flatDataToTree(your_raw_data, your_keys))
```

Which results in the following array:

```js
{
  s1: [
    {
      school: "s1",
      class: "c1",
      division: "d1",
      hour: "h1",
    },
    {
      school: "s1",
      class: "c2",
      division: "d1",
      hour: "h1",
    },
  ],
  s2: [
    {
      school: "s2",
      class: "c1",
      division: "d1",
      hour: "h1",
    },
  ],
};
```

## TypeScript

This project includes types, just import the module as usual:

```ts
const quada = require("quada");

quada.flatDataToTree(param1, param2)
```