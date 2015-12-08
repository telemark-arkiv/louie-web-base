'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 15, 'There are 15 different handlers')

tap.ok(handlers.getFrontpage, 'Handler has method getFrontpage')

tap.ok(handlers.getLoginPage, 'Handler has method getLoginPage')

tap.ok(handlers.doLogin, 'Handler has method doLogin')

tap.ok(handlers.doLogout, 'Handler has method doLogout')

tap.ok(handlers.getTasks, 'Handler has method getTasks')

tap.ok(handlers.getPoliticians, 'Handler has method getPoliticians')

tap.ok(handlers.searchPoliticians, 'Handler has method searchPoliticians')

tap.ok(handlers.getPolitician, 'Handler has method getPolitician')

tap.ok(handlers.getParties, 'Handler has method getParties')

tap.ok(handlers.getParty, 'Handler has method getParty')

tap.ok(handlers.getPartyMembers, 'Handler has method getPartyMembers')

tap.ok(handlers.getCommittees, 'Handler has method getCommittees')

tap.ok(handlers.getCommittee, 'Handler has method getCommittee')

tap.ok(handlers.getCommitteeMembers, 'Handler has method getCommitteeMembers')

tap.ok(handlers.getContactInformation, 'Handler has method getContactInformation')
