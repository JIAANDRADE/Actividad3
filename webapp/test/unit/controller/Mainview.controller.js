/*global QUnit*/

sap.ui.define([
	"Logaligroup/prueba/controller/Mainview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Mainview Controller");

	QUnit.test("I should test the Mainview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
