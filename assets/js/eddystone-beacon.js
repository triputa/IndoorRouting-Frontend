const eddystoneBeacon = require('eddystone-beacon');

const options = {
	name: 'Beacon', // set device name when advertising (Linux only)
	txPowerLevel: -22, // override TX Power Level, default value is -21,
	tlmCount: 2, // 2 TLM frames
	tlmPeriod: 10 // every 10 advertisements
};

const url = 'http://eduatlas.com';

eddystoneBeacon.advertiseUrl(url, [options]);
