/**
 * 課題: 以下の条件を満たすオブジェクトを作る
 *   - 変数名はmyArrayで値はオブジェクトする
 *   - オブジェクトmyArrayは次のプロパティと値を持つ
 *     - arrayプロパティ: 初期値として[1, 2, 3]がセットされた配列
 *     - forEachプロパティ : 「Array.prototype.forEach()」と同じ機能を持つメソッド
 *       - forEachメソッド内では「Array.prototype.forEach()」を使わずfor文でループを行うこと
 *       - forEachメソッドは引数にコールバック関数を受け取る
 *         - コールバック関数の引数名は「callback」とする
 *         - コールバック関数は2つの引数を持つ
 *           - 第1引数は配列の各要素
 *           - 第2引数は配列の各要素に対応するインデックス番号
 *     - mapプロパティ : 「Array.prototype.map()」と同じ機能を持つメソッド
 *       - 自作したforEachメソッドを使って実装する
 *         - this経由でforEachメソッドを実行する
 *     - filterプロパティ : 「Array.prototype.filter()」と同じ機能を持つメソッド
 *       - 自作したforEachメソッドを使って実装する
 *         - this経由でforEachメソッドを実行する
 */
const myArray = {
  array: [1, 2, 3],
  forEach(callback) {
    for (let i = 0; i < this.array.length; i++) {
      callback(this.array[i], i);
    }
  },
  map(callback) {
    mappedValues = [];
    this.forEach((value, index) => {
      mappedValues.push(callback(value, index));
    });
    return mappedValues;
  },
  filter(callback) {
    filteredValues = [];
    this.forEach((value, index) => {
      if (callback(value, index)) {
        filteredValues.push(value);
      }
    });
    return filteredValues;
  }
};

// ここでmyArray.forEachを実行して、console.logを使って各値とインデックスを出力する
myArray.forEach((value, index) => {
  console.log(`index : ${index}, value : ${value}`);
});

// ここでmyArray.mapを実行したあと、mapの戻り値とmyArray.arrayをconsole.logで出力する
// mapメソッドで取得する値は、myArray.arrayの各要素をindex倍した値とする。(value * index)
// mapの戻り値は[0, 2, 6], myArray.arrayの値は[1, 2, 3]であるべき
let returnValues = myArray.map((value, index) => {
  return value * index;
});
console.log(returnValues);
console.log(myArray.array);

//ここでfilterを実行したあと、filterの戻り値とmyArray.arrayをconsole.logで出力する
// filterメソッドで取得する値は、myArray.arrayの奇数だけとする
// filterの戻り値は[1, 3], myArray.arrayの値は[1, 2, 3]であるべき
let filterValues = myArray.filter((value, index) => {
  return value % 2 === 1;
});
console.log(filterValues);
console.log(myArray.array);
