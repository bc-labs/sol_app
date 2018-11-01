# ベースイメージを指定
# 今回は LTS の 8.12.0 にする
# alpine は 軽量の linux OS
FROM node:8.12.0-alpine

# node.js の環境変数を定義する
# 本番環境では production
ENV NODE_ENV=development

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install -g express-generator@4.16.0

# ディレクトリを移動する
WORKDIR /app

# ポート3000番を開放する
EXPOSE 3000
