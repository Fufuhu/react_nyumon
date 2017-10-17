# パッケージマネージャnpm

## パッケージの管理
```
$ npm init
```

package.jsonがが作成される。

```
$ npm install colors --save
```

colorsパッケージがイントールされ、
package.jsonに設定が追記される。

## 任意スクリプトの実行

package.json

```
{
  "name": "project_a",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "colors": "^1.1.2"
  },
  "devDependencies": {
    "colors": "^1.1.2"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "check": "node -v",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}
```

この部分の記述のおかげで、npm runで任意のコマンドを実行できる

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "check": "node -v",
    "start": "node index.js"
  },
```

```
npm run start => node index.js
```

```
npm run check => node -v
```