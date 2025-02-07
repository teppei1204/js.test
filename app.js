// インデント
// const bar = () => {
//   const foo = 1 + 1;
//   console.log(foo);
// }

// 配列
// const onepice = ["赤犬","青きじ","黄猿"];

// ループ文 while,map,forEach,do-whileなどなど
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// 初期値
//let index = 0    ループを開始する際の値
// 条件式
// index < array.length    ループを継続するかどうかの条件
// 増減式
// index++    ループを繰り返す際に値をどれだけ増減させるかを表す

// for(初期値; 条件式; 増減式){
  // 処理
// }

// 条件式
// let isLogin = false;
// if(isLogin === false){
//   alert("ログインしてくださいログインしてください")
// }
// if(isLogin)だけでもtrueの意味になる
// if(!isLogin)でfalseの意味になる(論理否定)

// if(foo > 0 && foo < 1000) {

// }
// &&  = かつ

// if(foo === 0 || foo === 1){

// }
// ||  = または

// const userType = "member";
// if(userType === "member"){
//   alert("アクセスできません");
// } else if(userType === "admin"){
//   alert("今から10分だけアクセスできます");
// } else {
//   console.log("アクセス完了");
// }
// せいぜい3つ4つにとどめておきましょう

// Q.下記のコードを穴埋めし、「myMoneyが500以上ならisShippingでtrueを返す」ようにしなさい。必ずif文を使うこと

// const myMoney = 1000;
// let isShipping = false;
// if(myMoney >= 500){
//   isShipping = true;
// } 
// console.log(isShipping);

// 関数
// function 関数名(){
// functionは以前のバージョン。ES5からある書き方
// }

// const 関数名 = () => {
// アロー関数はバージョンES6からの書き方
// }

// 元のコード
// if(new Date().getHours() > 20) {
//   document.body.style.backgroundColor = "#000";
// }
// // 関数化したコード
// function changeDarkMode() {
//   if(new Date().getHours() > 20) {
//     document.body.style.backgroundColor = "#000";
//   }
// }
// changeDarkMode();
// getHours = 指定された日付の時間を返す

// 引数(関数に渡す値)    関数は引数と組み合わせる事でより強力になる
// function 関数名(引数) {
//   // 引数を伴った処理
// }

// function changeDarkMode(time) {
//   if(new Date().getHours() > time) {
//     document.body.style.backgroundColor = color;
//   }
// }

// if(season === winter) {
//   changeDarkMode(18);
// }else {
//   changeDarkMode(20);
// }
// 冬は18時でそれ以外の季節は20時にダークモードにしたい場合
// 関数の引数に時刻を渡すことでダークモードを適応する時刻を変更できる

// 関数には複数の引数を持たせることもできる

// function changeDarkMode(time,color) {
//   if(new Date().getHours() > time) {
//     document.body.style.backgroundColor = color;
//   }
// }

// changeDarkMode(20,"#333");
// 背景色も引数にしておき、時間と背景色をいっぺんに変えることもできる

// function changeDarkMode(time = 20,color = "#333") {
//   if(new Date().getHours() > time) {
//     document.body.style.backgroundColor = color;
//   }
// }

// changeDarkMode();

// 引数には関数宣言時にデフォルト値を設定できる
// 通常引数を持つ関数が引数なしで呼び出された場合エラーが発生するがデフォルト値を設定しておくことでエラーを防ぐことができる

// function changeDarkMode(obj) {
//   if(new Date().getHours() > obj.time) {
//     document.body.style.backgroundColor = obj.color;
//   }
// }

// 関数にはオブジェクト形式で引数を渡すこともできる


// オブジェクトで引数を渡す場合は、関数を呼び出す際に{}内にプロパティと値を記述
// メリット=引数の順番を気にしなくてよくなる
// メリット=どの値がどの引数に対してのものか分かりやすくなる
// ChannelMergerNode({
//   time: 20,
//   color: "#333"
// })

// オブジェクトを使っている関数と使っていない関数の比較

// オブジェクトを使用
// ChannelMergerNode({time: 20, color: "#333"});//具体的にわかる

// オブジェクトを使用していない
// ChannelMergerNode(20, "#333");//それぞれの値がそれぞれの引数に対応しているか分からない
                              //引数の順番を守らなければいけない
// 引数が多いならオブジェクトを使った方が可読性が高くなる

// コールバック関数 = 関数の引数にさらに関数を渡すこと。関数の引数に渡され連続した処理を可能とする関数

// function foo(callback){
//   console.log("Hi, Tom!");
//   callback();
// }

// function bar(){
//   console.log("Hi, Ken!");
// }
// foo(bar);
// 実質
// function foo(callback){
//   console.log("Hi, Tom!");
//   console.log("Hi, Ken!");
// }こうなっているA_両方呼び出される
// 関数foo()の引数に関数barを渡している

// 戻り値 = 関数の処理結果を返すためのもの
// 戻り値は絶対に定義しないといけないものではない
// 定義しない場合は自動的にunderfinedが帰ってくる
// function 関数名(){
  //処理
//   return 戻り値;
// }
// return = 関数の処理結果を変数に代入したり、他の関数の引数に渡したりできる
// 例、今日の日付から季節を判定する関数

// function getSeason(){
//   const month = new Date().getMonth() + 1;//現在の月。1月をmonthという値に入れて
//   if(month >= 3 && month <= 5) {//3〜５月ならspring
//     return "spring";
//   }else if (month >= 6 && month <= 8) {//6~8月ならsummer
//     return "summer";
//   } else if (month >= 9 && month <= 11) {//9~11月ならautumn
//     return "autumn";
//   } else {
//     return "winter";//それ以外 = 12~2ならwinter
//   }
// }
// const season = getSeason();
// console.log(season);
// // 関数を実行したら実行結果の返り値を変数に入れることができる
// if (season === "winter") {
//   changeDarkMode(18);
// } else {
//   changeDarkMode(20);
// }
// 冬なら18時それ以外の季節なら20時にダークモードにするという処理をかける


// 関数のスコープ = 関数内で定義された変数がどこから参照できるかを表す
// 関数内で定義された変数は関数の外からは参照できない
// const bar1 = 1;//グローバル変数
// function foo(){
//   const bar2 = 2;//ローカル変数
// }
// console.log(bar1);//1が表示される
// console.log(bar2);//エラーになる
// bar1は関数の外で定義されている為関数の外から参照することができるが
// bar2は関数内で定義されている為スコープ外となり関数の外から参照することができない
// bar2を参照したい場合はfooの関数内でconosle.log();を使う必要がある

// スコープを使わずに書かれた変数をグローバル変数
// スコープを使って書かれた変数をローカル変数
// スコープが違えば同じ変数名を罰のものとして扱うこともできる

// グローバル変数はどこからでも参照できてしまうので何でもかんでもグローバル変数にしない！
// 意図せず容易に変数の値が書き換えられてしまう可能性がある


// Q.実行したら戻り値２０を返す関数"sonicBoom"を作成しなさい
// const sonicBoom = () => {
//   return 20;
// }
// console.log(sonicBoom()); //20
// アロー関数でもfunctionでも問題ない

// Q.引数"lasrDamage"を持ち、実行したら"lastDamage"に1.5をかけた値を
// 戻り値として返す関数"metalBurst"を作成しなさい

// function metalBurst (lastDamage) {
//   return lastDamage * 1.5;
// }
// console.log(metalBurst(50));

// Q.引数"theirHp"を持ち実行したら"theirHp"の値をそのまま戻り値として返す"hornDrill"を作成しなさい。
// ただし成功確率は３０％とし、失敗した場合は０を返すようにしなさい(発展問題)
// ヒント: if文を使う。Math.random()を使う。
// Math.random() = 確立系のプログラムを書くときによく使う

function hornDrill (theirHp) {
  if(Math,random() <= 0.3){
    return theirHp;
  } else {
    return 0;
  }
}
console.log(hornDrill(100));