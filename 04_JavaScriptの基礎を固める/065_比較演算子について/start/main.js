const num = 0;
const bool = Boolean(num);
console.log(bool);

if(!num) {
  console.log('this is true');
} else {
  console.log('this is false');
}

// == の場合はデータの型まで比較しない。　===の場合はデータの方も含める。