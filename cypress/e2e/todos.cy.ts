describe('TodoList', () => {
  it('should render todo list', () => {
    localStorage.setItem('accessToken', 'arandomtoken')
    cy.visit('/todo');
    cy.get('ul.todos').should('not.be.undefined');
    cy.get('ul.todos')
      .children('li')
      .each((ele) => ele.children('div').children('button'))
      .contains('View').should('be.visible')
      .click();
    cy.get('.todo').children('h4').contains('Learn MEAN stack').should('be.visible');
  })
})
