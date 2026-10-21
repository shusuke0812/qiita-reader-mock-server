# モックサーバーの起動・停止

Docker Desktopを起動し、`qiita_reader_mock`のルートで実行してください。

## 起動

```bash
docker compose up -d --build
```

- Mac： http://qiita-mock.localhost/api/items
- Android Emulator： http://10.0.2.2/api/items

## 停止

```bash
docker compose down
```
