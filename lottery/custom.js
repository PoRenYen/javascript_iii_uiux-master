/*
假設X維38 所產之值乃0-37之間 此時程式後+1代表落在1-38之間
再進行回傳
*/
//取亂數
function getRandom(x) {
    Math.floor(Math.random() * x) + 1;
}
