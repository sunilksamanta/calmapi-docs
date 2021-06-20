---
sidebar_position: 3
---

# Generate CRUD Module

Super easy method to create CRUD Module which includes

- Controller, Model, Route, Service, DTO & Settings
- Automatic standard Routing path
- Operations: Get All, Get Single, Update Single, Delete Single

## Create your first Custom Module

Run the following inside your Project's root:

```shell
calmapi generate module yourModuleName
```

A new module is now available at `http://localhost:PORT/api/your-module-name`.

## Configure the Router path

CalmAPI automatically **creates a path** from module's name.

But you can explicitly define the router path by adding moduleRoute in **your-module-name.settings.js**

```javascript title="your-module-name/your-module-name.settings.js"
'use strict';
/**
 * If custom router url is required, export url as "moduleRoute"
 */
module.exports = {
    moduleRoute: 'your-custom-path'
};

```
Now your module is available at `http://localhost:PORT/api/your-custom-path`.

## Routes

Follow the Sample "[Post](/docs/guide/built-in-modules#post)" module's CRUD instruction [here](/docs/guide/built-in-modules#post).
