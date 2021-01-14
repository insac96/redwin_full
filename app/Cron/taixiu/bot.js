
let TXCuoc    = require('../../Models/TaiXiu_cuoc');
let TXCuocOne = require('../../Models/TaiXiu_one');

/**
 * Ngẫu nhiên cược
 * return {number}
*/
let random = function(){
	let a = (Math.random()*35)>>0;
	if (a == 34) {
		// 34
		return (Math.floor(Math.random()*(50-20+1))+20)*400000;
	}else if (a >= 32 && a < 34) {
		// 32 33
		return (Math.floor(Math.random()*(30-20+1))+20)*250000;
	}else if (a >= 30 && a < 32) {
		// 30 31 32
		return (Math.floor(Math.random()*(20-10+1))+10)*200000;
	}else if (a >= 26 && a < 30) {
		// 26 27 28 29
		return (Math.floor(Math.random()*(15-5+1))+5)*150000;
	}else if (a >= 21 && a < 26) {
		// 21 22 23 24 25
		return (Math.floor(Math.random()*(15-3+1))+3)*100000;
	}else if (a >= 15 && a < 21) {
		// 15 16 17 18 19 20
		return (Math.floor(Math.random()*(100-30+1))+30)*90000;
	}else if (a >= 8 && a < 15) {
		// 8 9 10 11 12 13 14
		return (Math.floor(Math.random()*(50-20+1))+20)*70000;
	}else{
		// 0 1 2 3 4 5 6 7
		return (Math.floor(Math.random()*(30-20+1))+20)*40000;
	}
};

/**
 * Cược
*/
// Tài Xỉu RED
let tx = function(bot, io){
	let cuoc   = random();
	let select = !!((Math.random()*2)>>0);
	if (select) {
		io.taixiu.taixiu.red_tai        += cuoc;
		io.taixiu.taixiu.red_player_tai += 1;
	}else{
		io.taixiu.taixiu.red_xiu        += cuoc;
		io.taixiu.taixiu.red_player_xiu += 1;
	}
	TXCuocOne.create({uid:bot.id, phien:io.TaiXiu_phien, taixiu:true, select:select, red:true, bet:cuoc});
	TXCuoc.create({uid:bot.id, name:bot.name, phien:io.TaiXiu_phien, bet:cuoc, taixiu:true, select:select, red:true, time:new Date()});
	bot = null;
	io = null;
	cuoc   = null;
	select = null;
};

// Chẵn Lẻ RED
let cl = function(bot, io){
	let cuoc   = random();
	let select = !!((Math.random()*2)>>0);
	if (select) {
		io.taixiu.chanle.red_chan        += cuoc;
		io.taixiu.chanle.red_player_chan += 1;
	}else{
		io.taixiu.chanle.red_le        += cuoc;
		io.taixiu.chanle.red_player_le += 1;
	}
	TXCuocOne.create({uid:bot.id, phien:io.TaiXiu_phien, taixiu:false, select:select, red:true, bet:cuoc});
	TXCuoc.create({uid:bot.id, name:bot.name, phien:io.TaiXiu_phien, bet:cuoc, taixiu:false, select:select, red:true, time:new Date()});
	bot = null;
	io = null;
	cuoc   = null;
	select = null;
};
module.exports = {
	tx: tx,
	cl: cl,
}
