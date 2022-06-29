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

export { createProduct };

// const prod = createProduct(5)

// console.log(prod);
