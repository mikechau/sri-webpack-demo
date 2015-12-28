# sri-webpack-demo

```
npm install
npm run build
```

Uses [sri-stats-webpack-plugin](https://www.npmjs.com/package/sri-stats-webpack-plugin) and [sprockets-stats-webpack-plugin](https://www.npmjs.com/package/sprockets-stats-webpack-plugin), to produce an integrity key in the manifest output.

```js
// sprockets-manifest.json

{
  "assets": {
    "images/photo1.jpg": "photo1-4930dd4df78f215026f70c63ce65facc.jpg",
    "main.js": "main-cdd4a6b8ceb3f1767595.js",
    "main.css": "main-cdd4a6b8ceb3f1767595.css"
  },
  "files": {
    "photo1-4930dd4df78f215026f70c63ce65facc.jpg": {
      "logical_path": "images/photo1.jpg",
      "size": 219802,
      "digest": "4930dd4df78f215026f70c63ce65facc",
      "mtime": "2015-12-28T06:07:03.933Z"
    },
    "main-cdd4a6b8ceb3f1767595.js": {
      "integrity": "sha384-eDHTb6EmDQJXjPrAwGaqPTcQKLrWn2cyE2NRGDxxEdL6q6FXqMyowURGGtGH+FXT",
      "size": 140978,
      "digest": "574ac6a896587dd010a30294878a698f",
      "logical_path": "main.js",
      "mtime": "2015-12-28T06:07:03.933Z"
    },
    "main-cdd4a6b8ceb3f1767595.css": {
      "integrity": "sha384-iCCZxnhcfztwc4vpQU4xC5fLSZQuNK/V1lqQOIVNPa1uKvrcl3NDrW/6T6WWyrEc",
      "size": 23,
      "digest": "6e14769dbe0b859e5f46f302f562db4a",
      "logical_path": "main.css",
      "mtime": "2015-12-28T06:07:03.933Z"
    }
  },
  "hash": "cdd4a6b8ceb3f1767595",
  "publicPath": "/assets/"
}
```

