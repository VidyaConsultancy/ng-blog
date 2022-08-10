describe('AddTodo', () => {
  it('should add a new todo', () => {
    localStorage.setItem('accessToken', 'arandomtoken');
    cy.visit('/todo/add');
    cy.get('button[data-cy="todoAdd"]')
      .should('be.visible')
      .should('be.disabled');
    cy.get('input[name="title"]').type('Learn Angular');
    cy.get('button[data-cy="todoAdd"]').should('be.visible').should('be.enabled').click();
  })
})
