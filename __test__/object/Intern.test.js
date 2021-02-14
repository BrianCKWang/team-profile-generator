const Intern = require('../../lib/object/Intern');

test('creates an intern role object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const school = 'UBC';
  const role = new Intern(name, id, email, school);

  // act
  
  // assert
  expect(role.name).toBe(name);
  expect(role.id).toBe(id);
  expect(role.email).toBe(email);
  expect(role.school).toBe(school);
});

test('getRole() from Intern object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const office = 'A113';
  const role = new Intern(name, id, email, office);

  // act

  // assert
  expect(role.getRole()).toBe('Intern');
});