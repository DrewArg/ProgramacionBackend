import { faker } from "@faker-js/faker";
faker.locale = "es";

function createProduct(id) {
  return {
    id,
    title: faker.random.word(),
    price: faker.random.numeric(4),
    thumbnail: faker.image.imageUrl(),
  };
}

function createId() {
  return new Date().getTime() * Math.random() * 100000;
}

function createUserData() {
  const userName = faker.name.firstName();
  const userLastName = faker.name.lastName();
  const userEmail = faker.internet.email(userName, userLastName);
  const userAlias = faker.internet.userName(userName, userLastName);
  return {
    userEmail: userEmail,
    userName: userName,
    userLastName: userLastName,
    userAge: faker.random.numeric(2),
    userAlias: userAlias,
    userAvatar: faker.internet.avatar(),
  };
}
export { createProduct, createId, createUserData };
