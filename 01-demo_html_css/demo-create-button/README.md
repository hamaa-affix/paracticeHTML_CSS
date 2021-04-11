## ブロック要素とインライン要素

### ブロック要素
- div　などなど
- ブロック要素は改行される
- 上下に配置される
- 横幅、縦幅は指定することができ(width, heigth)。
- ブロック要素を中央揃えするときはmargin: 0 auto;を加えることでインライン要素は中央揃えになる。



### インライン要素
- <span> <img>などなど
- 要素は横並びにになる
- 左右に配置される
- 横幅、縦幅を指定することができない(width, heigth)
- インライン要素を中央揃えするときは親要素にtext-align: center;をしてするとこのインライン要素は中央揃えになる。

### インライン ブロック要素
- インライン要素にブロック要素の振る舞いをたせせることができる
  - display: block; で可能
  - 逆も然り。ブロック→インライも可能
- 中間のインラインブロックもある。 **display: inline-block;** で可能
  - 高さ,横幅は反映されるが基本的には横並びになる


## SASSについて
- cssを記述しやすくしたもの
- 変数が使用出来たりする
- ネストして作成することができる。例えば親の要素を定義して、子のCSSも作成出来たりする

 ```
  nav {
    ul {
      margin: 0;
      padding: 0;
    }
  }

  #container {
    text-align: center;

    .btn {
      background-color: $cwhite;
      color: $cblack;
      border: 1px solid$cblack;
      /* padding = 文字と余白の間に余白を追加する */
      padding: 10px 40px;
      /* margin = ボーダーの外側に余白を追加する */
      margin: 10px 0;
      /* font-weight = 文字の太さ 100 ~ 600 */
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;

      //&は半角スペースを埋めているという意味
      &:hover {
        background-color: $cblack;
        color: $cwhite;
      }
    }
  }
 ```
