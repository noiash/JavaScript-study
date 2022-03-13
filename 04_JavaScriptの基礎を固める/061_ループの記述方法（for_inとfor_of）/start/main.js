const arry = [1, 2, 3, 4, 5, 6];

for (let i in arry) {
    let v = arry[i];
    console.log(v);
}

//i,j,kは添字という意味合いが強い。
// for inでは添字が、for ofでは値が渡ってくる(対応していないのもある)