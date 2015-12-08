'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.getFrontpage,
      description: 'Show the frontpage'
    }
  },
  {
    method: 'GET',
    path: '/politicians',
    config: {
      handler: handlers.getPoliticians,
      description: 'List all politicians'
    }
  },
  {
    method: 'GET',
    path: '/search',
    config: {
      handler: handlers.searchPoliticians,
      description: 'Search all politicians'
    }
  },
  {
    method: 'GET',
    path: '/politicians/{politicianID}',
    config: {
      handler: handlers.getPolitician,
      description: 'Get politician by {politicianID}'
    }
  },
  {
    method: 'GET',
    path: '/parties',
    config: {
      handler: handlers.getParties,
      description: 'List all political parties'
    }
  },
  {
    method: 'GET',
    path: '/parties/{partyID}',
    config: {
      handler: handlers.getParty,
      description: 'Get political party by {partyID}'
    }
  },
  {
    method: 'GET',
    path: '/parties/{partyID}/members',
    config: {
      handler: handlers.getPartyMembers,
      description: 'List all members of given political party by {partyID}'
    }
  },
  {
    method: 'GET',
    path: '/committees',
    config: {
      handler: handlers.getCommittees,
      description: 'List all political committees'
    }
  },
  {
    method: 'GET',
    path: '/committees/{committeeID}',
    config: {
      handler: handlers.getCommittee,
      description: 'Get political committee by {committeeID}'
    }
  },
  {
    method: 'GET',
    path: '/committees/{committeeID}/members',
    config: {
      handler: handlers.getCommitteeMembers,
      description: 'List all members of given political committee by {committeeID}'
    }
  },
  {
    method: 'GET',
    path: '/kontakt',
    handler: handlers.getContactInformation
  },
  {
    method: 'GET',
    path: '/personvern',
    handler: function (request, reply) {
      reply.view('personvern')
    }
  }
]

module.exports = routes
