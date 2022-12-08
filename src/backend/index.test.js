const { withDbHelper } = require('./repository/db-helper');
const { listTables } = require('./index');

describe('some feature', () => {
  withDbHelper();

  it('does things', async () => expect(listTables()).resolves.toEqual(expect.arrayContaining([{
    tablename: 'example_table',
  }])));
});
