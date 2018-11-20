# 概要

HowToRedux 用のテンプレートです。  
React / Redux を動かす最低限のセットアップのみ行なっています。

# 開発手順

## node_modules のインストール

yarn をインストールしていない場合、先に`npm install -g yarn`を実行してください。

```
yarn install
```

## 開発サーバの起動

```
yarn start
```

# スクリプト一覧

packsge.json 内に記述してある script の説明は以下の通りです。

| コマンド |          説明          |
| :------: | :--------------------: |
|  start   |    開発サーバの起動    |
| release  | プロダクション用ビルド |
|  reset   |  node_modules の削除   |
