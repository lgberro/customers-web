import {createServer} from 'miragejs';
import faker from 'faker';

export function makeServer() {
  const server = createServer({
    seeds(server) {
      server.db.loadData({
        customers: Array(51)
          .fill()
          .map((_, index) => ({
            ...faker.helpers.createCard(),
            id: String(index),
            avatar: faker.image.avatar(),
          })),
      });
    },

    routes() {
      this.timing = 200;

      this.get('/customers', (schema, {queryParams: {name, page}}) => {
        const pageLen = 10;
        const start = page * pageLen;
        const end = start + pageLen;
        const customers = schema.db.customers.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
        return {
          customers: customers.slice(start, end),
          pages: Math.ceil(customers.length / pageLen),
        };
      });

      this.get('/customer/:id', (schema, {params: {id}}) => schema.db.customers.filter(c => c.id === id)?.[0]); // find wasnt working
    },
  });

  return server;
}
