//this is to enable multi vendo setup, set to true when multi vendo is supported
var isMultiVendo = true;
// 0 = traditional (client choose a vendo) , 1 = auto select vendo base on hotspot address, 2 = interface name ( this will preserve one hotspot server ip only)
var multiVendoOption = 0;

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
	{
		vendoName: "Pandoy Tindahan", //change accordingly to your vendo name
		vendoIp: "10.0.0.59", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false, //change true if you want to enable eloading station
		hotspotAddress: "10.0.0.59", // use for multi vendo option = 1, means your vendo map to this hotspot and autoselect it when client connected to this
		interfaceName: "Pandoy Tindahan" // hotspot interface name preser
	},
	{
		vendoName: "Daisery/Ferdie House", //change accordingly to your vendo name
		vendoIp: "10.0.0.61", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false //change true if you want to enable eloading station
	},
	{
		vendoName: "Joan/Ryan House", //change accordingly to your vendo name
		vendoIp: "10.0.0.87", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false //change true if you want to enable eloading station
	},
	{
		vendoName: "Ronton/Precy House", //change accordingly to your vendo name
		vendoIp: "10.0.0.134", //change accordingly to your vendo ip
		chargingEnable: false,  //change true if you want to enable charging station
		eloadEnable: false //change true if you want to enable eloading station
	}
];


//0 means its login by username only, 1 = means if login by username + password
var loginOption = 0; //replace 1 if you want login voucher by username + password

var dataRateOption = false; //replace true if you enable data rates
//put here the default selected address
var vendorIpAddress = "10.0.0.59";

var chargingEnable = false; //replace true if you enable charging, this can be override if multivendo setup

var eloadEnable = false; //replace true if you enable eload, this can be override if multivendo setup

//hide pause time / logout true = you want to show pause / logout button
var showPauseTime = false;

//enable member login, true = if you want to enable member login
var showMemberLogin = true;

//enable extend time button for customers
var showExtendTimeButton = true;

//disable voucher input
var disableVoucherInput = false;

//enable mac address as voucher code
var macAsVoucherCode = false;

var qrCodeVoucherPurchase = true;
