Ti.UI.setBackgroundColor("#000");



var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#666",
	
});

var arrayDisplayView = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 20,
	left: 20,
	right: 20,
	borderRadius: 3,
	bottom: 40
});

var arrayDisplayLabel = Ti.UI.createLabel({
	text: "My favorite genres of music.",
	font: {fontSize: 25, fontFamily: "Arial"},
	textAlign: "center",
	top: 20,
	right: 20,
	left: 20,
	bottom: 20,
	
});

var buttonView1 = Ti.UI.createView({
	backgroundColor: "#23ba00",
	left: 20,
	right: 200,
	borderRadius: 3,
	height: 20,
	bottom: 10
});

var buttonLabel1= Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 10, fontFamily: "Arial"},
	textAlign: "center",
	text: "Previous"
});

var buttonView2 = Ti.UI.createView({
	backgroundColor: "#23ba00",
	left: 200,
	right: 20,
	borderRadius: 3,
	height: 20,
	bottom: 10
});

var buttonLabel2 = Ti.UI.createLabel({
	color: "#fff",
	Font: {fontSize: 10, fontFamily: "Arial"},
	textAlign: "center",
	text: "Next"
});


var loadFile = require("musicTypes");



mainWindow.add(arrayDisplayView, buttonView1, buttonView2);
arrayDisplayView.add(arrayDisplayLabel);
buttonView1.add(buttonLabel1);
buttonView2.add(buttonLabel2);
mainWindow.open();
