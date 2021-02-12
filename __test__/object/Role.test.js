const Role = require('../../lib/object/Role');

test('creates an basic role object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const role = new Role.Basic(name, id, email);

  // act

  //assert
  expect(role.name).toBe(name);
  expect(role.id).toBe(id);
  expect(role.email).toBe(email);
});

test('creates a manager role object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const office = 'A113';
  const role = new Role.Manager(name, id, email, office);

  // act

  // assert
  expect(role.name).toBe(name);
  expect(role.id).toBe(id);
  expect(role.email).toBe(email);
  expect(role.officeNum).toBe(office);
});

test('creates an engineer role object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const github = 'brianckwang';
  const role = new Role.Engineer(name, id, email, github);

  // act

  // assert
  expect(role.name).toBe(name);
  expect(role.id).toBe(id);
  expect(role.email).toBe(email);
  expect(role.github).toBe(github);
});

test('get engineer full github address', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const github = 'brianckwang';
  const role = new Role.Engineer(name, id, email, github);

  // act

  // assert
  expect(role.getGithubFullAddress()).toBe('https://github.com/' + github);
});

test('creates an intern role object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const school = 'UBC';
  const role = new Role.Intern(name, id, email, school);

  // act
  
  // assert
  expect(role.name).toBe(name);
  expect(role.id).toBe(id);
  expect(role.email).toBe(email);
  expect(role.school).toBe(school);
});