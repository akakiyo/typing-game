# タイピングゲーム（実践）
### 使用したツール
UIトレース、改善UIの設計 => Figama
テスト => jest、React-Testing-Library

### トレースしたタイピングゲーム
https://www.figma.com/proto/0qtJEqjBWnhnga4nTEULHp/lesson?node-id=127%3A21&viewport=237%2C140%2C0.17328889667987823&scaling=contain

### UIを改善したタイピングゲーム
https://www.figma.com/proto/FbbQUPMsVlYrhank4UYD5x/repair?node-id=1%3A19&viewport=377%2C5%2C0.5038036108016968&scaling=min-zoom

### 画面遷移図
![画面遷移図](https://user-images.githubusercontent.com/49551044/103965682-9cf7c480-51a1-11eb-94d9-19b54627a6a1.png)

### ディレクトリ構造
```
src
├── components
│   ├── App.jsx
│   ├── Header  : サイトのヘッダーを作成
│   │   ├── Header.jsx
│   │   └── index.js
│   └── index.js
├── index.js
└── routes
    └── Main : サイトのBody部分
        ├── Board : 画面遷移、入力値、問題、ゲーム情報を管理
        │   ├── Board.jsx
        │   ├── Board.test.js
        │   ├── Result　：ゲームの結果画面
        │   │   ├── Result.jsx
        │   │   ├── Result.test.js
        │   │   └── index.js
        │   ├── Second  :ゲーム画面
        │   │   ├── Second.jsx
        │   │   ├── Second.test.js
        │   │   └── index.js
        │   ├── Top :トップ画面
        │   │   ├── Top.jsx
        │   │   ├── Top.test.js
        │   │   └── index.js
        │   ├── index.js
        │   └── utils
        │       ├── checkKey.js : ゲームの終了条件判定をする関数
        │       └── getQuestion.js  :　ランダムに問題を返す関数
        ├── Main.jsx 
        └── index.js
```
### コンポーネント詳細
#### Board.jsx 
- 状況によってTop,Second,Result画面の遷移の管理
- ユーザの入力されたキー情報の管理
- Result画面で表示する経過時間、正しく打ったキーの数、平均キータイプ数、ミスタイプ数、正解率の情報を管理
#### Top.jsx 
- サイトに訪れた際、初めに表示する画面
- ボタン(プレイする)が押されたらSecondに画面遷移
#### Second.jsx
- ゲーム画面
- 問題、正解数、問題数を表示
- ボタン(タイトルに戻る）が押された場合Top、10回正解したらResultに遷移
#### Second.jsx
- 結果画面
- 経過時間、正しく打ったキーの数、平均キータイプ数、ミスタイプ数、正解率の情報を表示
- ボタン(タイトルに戻る)を押すとTopに遷移


