
let BauCua_cuoc = require('../../Models/BauCua/BauCua_cuoc');

/**
 * Ngẫu nhiên cược
 * return {number}
*/
let random = function(){
	let a = (Math.random()*35)>>0;
	if (a == 34) {
		// 34
		return (Math.floor(Math.random()*(50-45+1))+45)*100000;
	}else if (a >= 32 && a < 34) {
		// 32 33
		return (Math.floor(Math.random()*(45-10+1))+10)*100000;
	}else if (a >= 30 && a < 32) {
		// 30 31 32
		return (Math.floor(Math.random()*(100-20+1))+20)*10000;
	}else if (a >= 26 && a < 30) {
		// 26 27 28 29
		return (Math.floor(Math.random()*(50-10+1))+10)*10000;
	}else if (a >= 21 && a < 26) {
		// 21 22 23 24 25
		return (Math.floor(Math.random()*(20-1+1))+1)*10000;
	}else if (a >= 15 && a < 21) {
		// 15 16 17 18 19 20
		return (Math.floor(Math.random()*(20-1+1))+1)*10000;
	}else if (a >= 8 && a < 15) {
		// 8 9 10 11 12 13 14
		return (Math.floor(Math.random()*(10-1+1))+1)*10000;
	}else{
		// 0 1 2 3 4 5 6 7
		return (Math.floor(Math.random()*(10-1+1))+1)*10000;
	}
};

/**
 * Cược
*/

// Bầu cua RED
module.exports = function(bot, io){
	let cuoc = random();
	let userCuoc = (Math.random()*6)>>0;

	if (userCuoc == 0) {
		io.baucua.info.redHuou += cuoc;
	}else if (userCuoc == 1) {
		io.baucua.info.redBau  += cuoc;
	}else if (userCuoc == 2) {
		io.baucua.info.redGa   += cuoc;
	}else if (userCuoc == 3) {
		io.baucua.info.redCa   += cuoc;
	}else if (userCuoc == 4) {
		io.baucua.info.redCua  += cuoc;
	}else if (userCuoc == 5) {
		io.baucua.info.redTom  += cuoc;
	}

	let create = {uid: bot.id, name: bot.name, phien: io.BauCua_phien, red:true, time: new Date()};
	create[userCuoc] = cuoc;
	BauCua_cuoc.create(create);
	bot = null;
	io = null;
	create = null;
	cuoc = null;
	userCuoc = null;
}
