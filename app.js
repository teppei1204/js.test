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
