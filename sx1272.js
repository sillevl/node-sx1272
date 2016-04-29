var logger = require('./lib/logger')
var SPI = require('spi');


var SX1272 = function(spi){ // device eg: '/dev/spidev1.1'
    logger.info("Creating new instance of SX1272");
    this.device = new SPI.Spi(dev, {
		"mode": SPI.MODE['MODE_0'],// always set mode as the first option
    	'chipSelect': SPI.CS['none'], // 'none', 'high' - defaults to low
		'maxSpeed': 2000000
	}, function(s){s.open();});
};

SX1272.prototype.on = function(){
    logger.info("SX1272 ON");

    //uint8_t version = readRegister(REG_VERSION);
    // if 0x22 => SX1272
    // if 0x12 => SX1276 else unrecognize
};

SX1272.prototype.off = function(){
    logger.info("SX1272 OFF");
};


exports.SX1272 = SX1272;
