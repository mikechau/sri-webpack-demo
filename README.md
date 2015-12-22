# sri-webpack-demo

```
npm install
npm run build
```

Uses [sri-webpack-plugin](https://www.npmjs.com/package/@mikechau/sri-webpack-plugin) and a modified version of [manifest-revision-webpack-plugin](https://github.com/mikechau/manifest-revision-webpack-plugin), to produce an integrity key in the manifest output.

```
# sprockets-manifest.json

{
  "assets": {
    "images/photo1.jpg": "photo1-4930dd4df78f215026f70c63ce65facc.jpg",
    "main.js": "main-459130c16ce3c68b595e.js"
  },
  "publicPath": "/assets/",
  "files": {
    "photo1-4930dd4df78f215026f70c63ce65facc.jpg": {
      "logical_path": "images/photo1.jpg"
    },
    "main-459130c16ce3c68b595e.js": {
      "logical_path": "main.js",
      "integrity": "sha384-Lgg9yFvipJWo8BEZOJhBN2wCPtr/RVl9EWeXFHUzQKtUduAyATSIl79NJbfzZT8p"
    }
  }
}
```

