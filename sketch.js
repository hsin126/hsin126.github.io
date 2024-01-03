function setup() {
    // 這個函式在程式啟動時被呼叫一次
    createCanvas(400, 300);  // 建立一個寬度為 400 像素、高度為 300 像素的畫布
    background(0);  // 將背景顏色設定為黑色（0 代表灰階中的黑色）
}

function draw() {
    // 這個函式會重複呼叫，創建動畫效果

    // 繪圖程式碼放在這裡

    stroke(255);  // 設定畫筆顏色為白色（255 代表灰階中的白色）
    s = random(1, 10);  // 產生一個介於 1 到 10 之間的隨機值，用於設定畫筆粗細
    x = random(100, 300);  // 生成一個介於 100 到 400 之間的亂數
    y = random(50, 10);
    x1 = random(100, 150);  // 生成一個介於 100 到 400 之間的亂數
    y1 = random(50, 150);
    x2 = random(100, 300);  // 生成一個介於 100 到 400 之間的亂數
    y2 = random(100, 150);
    x3 = random(300, 250);  // 生成一個介於 100 到 400 之間的亂數
    y3 = random(250, 150);
    x4 = random(100, 300);  // 生成一個介於 100 到 400 之間的亂數
    y4 = random(200, 250);
    strokeWeight(s);  // 設定畫筆粗細為隨機生成的值
    point(x, y);  // 在隨機生成的座標處畫一個點
    point(x1,y1);
    point(x2,y2);
    point(x3,y3);
    point(x4,y4);
}
