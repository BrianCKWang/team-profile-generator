const Manager = require('../../lib/object/Manager');

test('creates a Manager role object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const office = 'A113';
  const role = new Manager(name, id, email, office);

  // act

  // assert
  expect(role.name).toBe(name);
  expect(role.id).toBe(id);
  expect(role.email).toBe(email);
  expect(role.officeNum).toBe(office);
});

test('getRole() from Manager object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const office = 'A113';
  const role = new Manager(name, id, email, office);

  // act

  // assert
  expect(role.getRole()).toBe('Manager');
});