module.exports = (db) => {
  db.User.create({
    firstName: 'Bill',
    lastName: 'Bones',
    email: 'b@g.co',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  });
  db.User.create({
    firstName: 'Marge',
    lastName: 'Meddler',
    email: 'm@j.co',
    password: process.env.USER_PWD,
    isAdmin: false
  });
};
