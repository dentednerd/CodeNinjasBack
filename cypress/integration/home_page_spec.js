/* eslint-disable */

describe('Code Ninjas server', function() {
  beforeEach(function () {
    cy.exec('npm run seed:dev')
  })
  it('loads up real good', function() {
    cy.visit('/')
  })
  it('can get questions for a level', function() {
    cy.visit('/')
    cy.request('GET', '/api/levels/0/questions')
  })
  it('talks nicely to the front end', function() {
    cy.visit('https://codeninjas-v2.herokuapp.com/')
    cy.get('.button.begin').click()
  })
})