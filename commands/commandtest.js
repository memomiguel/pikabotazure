'use strict';

Settings.addPermissions(['say','tournament']);

exports.commands = {
     monotype: function () {
        if (!this.can("say")) return;
	this.reply('/etour monotype');
        this.reply('/tour scouting off');
	this.reply('/tour autodq 2');
	},
     test2: function () {
        if (!this.can("say")) return this.reply('lol you cant use this command');

	this.reply('/me does a test');
	},
     r: 'runtour',
     runtour: function (arg, room, user) {
        if (!this.can("say")) return;
	this.reply('/tour autostart ' + arg);
	this.reply('/tour autodq 2');
	},
     cc1v1: function () {
	if (!this.can("say")) return;
	this.reply('/etour Challenge Cup 1v1');
	this.reply('/tour autodq 2');
	},
     randombattle: function (arg, room, user) {
        if (!this.can("say")) return;
	this.reply('/etour Random Battle');
	this.reply('/tour autodq 2');
	},
     randomdoublebattle: function (arg, room, user) {
        if (!this.can("say")) return;
	this.reply('/etour Random Doubles Battle');
	this.reply('/tour autodq 2');
	},
     monotyperandom: function (arg, room, user) {
        if (!this.can("say")) return;
	this.reply('/etour Monotype Random Battle');
	this.reply('/tour autodq 2');
	},
     metronomecc1v1: function (arg, room, user) {
        if (!this.can("say")) return;
	this.reply('/etour Metronome Challenge Cup 1v1');
	this.reply('/tour autodq 2');
	},
     spacetimefuntimes: function (arg, room, user) {
        if (!this.can("say")) return;
	this.reply('/etour Spacetime Funtimes');
	this.reply('/tour autodq 2');
	},
     ou: function (arg, room, user) {
        if (!this.can("say")) return;
	this.reply('/etour OU');
        this.reply('/tour scouting off');
	this.reply('/tour autodq 2');
	},
     
     welcome: function (arg) {
	if (!arg) return;
	if (!this.can("tournament")) return;
	this.reply('/roompromote ' + arg + ', $')
	this.reply('Welcome ' + arg + ' to the Pikachu Valley!')
     }

};