# alpine は 軽量の linux OS
FROM node:10.15.0-alpine

ENV APP_ROOT /app/

WORKDIR $APP_ROOT

# Install yarn and other dependencies via apk
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
RUN apk add --no-cache git

# package.jsonとpackage-lock.jsonを先にコピー。
# package*.jsonだけを先に個別コピーすることで、パッケージ変更時は`RUN npm install`が走るが
# それ以外のファイル変更時は同コマンドにはキャッシュ利用で飛ばされるため、ビルド時間を短縮できる。
COPY package*.json $APP_ROOT

#RUN npm install

# その他ファイルをコピー。
COPY . $APP_ROOT

# Port開放
EXPOSE 8080