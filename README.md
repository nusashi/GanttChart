# ガントチャート
# GAS運用の際の備忘録

## GAS開発環境構築
### 前提条件：
- Chrome
- GoogleAppsScriptGitHubアシスタント
- VisualStudioCode
### 手順：
1. Googleアカウントを取得
1. GoogleDriveなどでScriptを新規作成
1. Chrome拡張機能「GoogleAppsScriptGitHubアシスタント」を導入
1. 拡張機能からリポジトリを作成
1. Gitコマンドでローカルにクローン
1. VisualStudioCodeでリポジトリのファイルを確認
1. 「.gs」はそのままだとsyntaxが有効ではない。
1. VSCウィンドウ下の笑顔マークの一つ左をクリック言語設定を変更
1. 「.gs」の関連付けにJavaScriptを設定
### github連携：
1. ファイル名と同じ関数名を記述してはいけない。
1. 仮に記述した場合にはプッシュプルでエラーが起こる。

https://docs.google.com/spreadsheets/d/11INrYJOXQ0Ac2mnkEIzORdIS5LaZG84LVA_xHYxU5Tw/edit?usp=sharing


- 項目数の変動（最大10まで 使われていない項目については列を非表示）
- データの入力規則はプログラム側で制御
- プロジェクトの開始日と終了日を入力することで、ガントチャートカレンダー生成
- 入力不可領域をプログラム側で制御
- 進捗率を入力することでガントチャートの色分けが完了色に変化する。
- 優先度は最大１０段階まで設定可能。設定した優先度のセル色が項目の色として表示される。
- 項目事に開始日と終了日が設定できる。また開始日と終了日は１項目ごとに最大10個まで登録可能
