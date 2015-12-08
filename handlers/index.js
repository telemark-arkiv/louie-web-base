'use strict'

var Wreck = require('wreck')
var config = require('../config')
var wreckOptions = {
  json: true
}

function getFrontpage (request, reply) {
  var viewOptions = {}
  var jobsToDo = 2
  var jobsDone = 0

  function allAboard () {
    jobsDone++
    if (jobsDone === jobsToDo) {
      reply.view('index', viewOptions)
    }
  }

  Wreck.get(config.API_URL + '/parties', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.parties = payload
    }
    allAboard()
  })

  Wreck.get(config.API_URL + '/committees', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.committees = payload
    }
    allAboard()
  })
}

function getPoliticians (request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10) : 0
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10) : 20
  Wreck.get(config.API_URL + '/politicians?skip=' + skipNum + '&limit=' + limitNum, wreckOptions, function (error, res, payload) {
    reply(error || payload)
  })
}

function searchPoliticians (request, reply) {
  var searchText = request.query.query
  if (searchText) {
    Wreck.get(config.API_URL + '/politicians/search/' + searchText, wreckOptions, function (error, res, payload) {
      if (error) {
        reply(error)
      } else {
        reply.view('search', {members: payload, query: searchText})
      }
    })
  } else {
    reply.view('search', {members: [], query: searchText})
  }
}

function getPolitician (request, reply) {
  var pID = parseInt(request.params.politicianID, 10)
  Wreck.get(config.API_URL + '/politicians/' + pID, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      reply.view('politician', {politicians: payload})
    }
  })
}

function getParties (request, reply) {
  Wreck.get(config.API_URL + '/parties', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      reply.view('parties', {parties: payload})
    }
  })
}

function getParty (request, reply) {
  var pID = parseInt(request.params.partyID, 10)
  var viewOptions = {}
  var jobsToDo = 2
  var jobsDone = 0

  function allAboard () {
    jobsDone++
    if (jobsDone === jobsToDo) {
      reply.view('party', viewOptions)
    }
  }

  Wreck.get(config.API_URL + '/parties/' + pID, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.parties = payload
    }
    allAboard()
  })

  Wreck.get(config.API_URL + '/parties/' + pID + '/members', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.members = payload
    }
    allAboard()
  })
}

function getPartyMembers (request, reply) {
  var pID = parseInt(request.params.partyID, 10)
  Wreck.get(config.API_URL + '/parties/' + pID + '/members', wreckOptions, function (error, res, payload) {
    reply(error || payload)
  })
}

function getCommittees (request, reply) {
  Wreck.get(config.API_URL + '/committees', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      reply.view('committees', {committees: payload})
    }
  })
}

function getCommittee (request, reply) {
  var cID = parseInt(request.params.committeeID, 10)
  var viewOptions = {}
  var jobsToDo = 2
  var jobsDone = 0

  function allAboard () {
    jobsDone++
    if (jobsDone === jobsToDo) {
      reply.view('committee', viewOptions)
    }
  }

  Wreck.get(config.API_URL + '/committees/' + cID, wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.committees = payload
      allAboard()
    }
  })

  Wreck.get(config.API_URL + '/committees/' + cID + '/members', wreckOptions, function (error, res, payload) {
    if (error) {
      reply(error)
    } else {
      viewOptions.members = payload
      allAboard()
    }
  })
}

function getCommitteeMembers (request, reply) {
  var cID = parseInt(request.params.committeeID, 10)
  Wreck.get(config.API_URL + '/committees/' + cID + '/members', wreckOptions, function (error, res, payload) {
    reply(error || payload)
  })
}

function getContactInformation (request, reply) {
  var contacts = require('../config/contacts.json')
  reply.view('kontakt', {contacts: contacts})
}

module.exports.getFrontpage = getFrontpage

module.exports.getPoliticians = getPoliticians

module.exports.searchPoliticians = searchPoliticians

module.exports.getPolitician = getPolitician

module.exports.getParties = getParties

module.exports.getParty = getParty

module.exports.getPartyMembers = getPartyMembers

module.exports.getCommittees = getCommittees

module.exports.getCommittee = getCommittee

module.exports.getCommitteeMembers = getCommitteeMembers

module.exports.getContactInformation = getContactInformation
