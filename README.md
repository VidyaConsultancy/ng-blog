# Angular Concepts

## Angular Forms
- Template Driven Forms
- Reactive Forms

### Routing in angular app steps:
1. Adding Routing related modules `RouterModule` imported from `@angular/router`
2. Setup paths and their associated components
3. Define the routes for our application
4. Define outlet
5. Provide navigation links

## RxJS - Observable
  RxJS lib => Reactive Extention to Javascript
- Observable => Subject, BehaviourSubject, AsyncSubject, 
- Observer
- Subscriber
- Operators

- Function => provides data => invoke the function Provider => Invoke => Pull strategy => single value
- Promises => Push strategy => single value
- Generator Functions => Pull strategy => multiple value
- Observable => Push strategy => multiple value | sync + async

## Unit Testing
**Karma** is a test runner.
**Jasmine** is a testing library. Assertions
**Instanbul** is code coverage lib.

**TDD** Test Driven Development
**BDD** Behaviour Driven Development

__Benefits__
- Automated
- Confidence

**Jasmine Globals**
describe    - creates a test suit
beforeAll   - it runs before all the test cases run.
beforeEach  - it runs before each test case is run.
afterAll    - it runs after all the test cases run.
afterEach   - it runs after each test case is run.
it          - creates a single test case
expect      - is for single assertion


- Test a service (without HTTPClient calls)
- Test a component
- Test a Model/class
- Test ReactiveForms
