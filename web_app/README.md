# web_app


## コンテナをビルド

```
docker-compose build
```

## コンテナを起動

```docker-compose up -d
```
## コンテナにアクセス
```
  docker-compose run --rm -p 8080:8080 web /bin/sh
```



## Project setup
```
npm install
```

### webアプリを起動
```
npm run serve
```


## コンテナを停止
```
docker-compose stop
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
