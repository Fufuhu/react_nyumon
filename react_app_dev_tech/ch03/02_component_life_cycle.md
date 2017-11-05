# コンポーネントの生成とDOMへのマウント

|メソッド|内容|
|---|---|
|constructor(props)|オブジェクトを生成する|
|componentWithMount()|コンポーネントがDOMにマウントされる|
|render()|コンポーネントが描画される|
|componentDidMount()|コンポーネントがDOMにマウントされた直後|

# コンポーネントの更新

|メソッド|内容|
|---|---|
|componentWillReceiveProps(nextProps)|コンポーネントのプロパティが変更されたとき|
|shouldComponentUpdate(nextProps, nextState)|コンポーネントの外観を更新して良いかどうか判断するとき
|componentWillUpdate()|コンポーネントが更新される直前|
|render()|コンポーネントの描画|
|componentDidUpdate()|コンポーネントが更新された直後|

# DOMからのアンマウント

|メソッド|内容|
|---|---|
|componentWillUnmount()|コンポーネントがDOMからアンマウントされた直後|