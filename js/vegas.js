$(function() {
    $('.mainimg-tate').vegas({
        slides: [
            { src: 'images/1.jpg' },
            { src: 'images/2.jpg' },	//1枚目の写真指定
            { src: 'images/3.jpg' },	//2枚目の写真指定
            { src: 'images/4.jpg'}	,
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
		timer: false,				//プログレスバーを非表示に。
    });
});

////なくても⚪︎つけるならHTML編集
//$(function() {
//    $('.mainimg-yoko').vegas({
//        slides: [
//            { src: './images/yoko_1.jpg' },	//1枚目の写真指定
//            { src: './images/yoko_2.jpg' },	//2枚目の写真指定
//            { src: './images/yoko_3.jpg' },	//3枚目の写真指定
//        ],
//		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
//		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
//		delay: 6000,				//次の画像を表示するまでの時間
//		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
//		timer: false,				//プログレスバーを非表示に。
//    });
//});
