'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'performances',
      [
        {
          salesman: 'aprima',
          year: 2000,
          sold: 200,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'agam',
          year: 2000,
          sold: 250,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'wardani',
          year: 2000,
          sold: 400,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'aprima',
          year: 2001,
          sold: 300,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'agam',
          year: 2001,
          sold: 150,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'wardani',
          year: 2001,
          sold: 200,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'aprima',
          year: 2002,
          sold: 500,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'agam',
          year: 2002,
          sold: 510,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'wardani',
          year: 2002,
          sold: 500,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'aprima',
          year: 2003,
          sold: 400,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'agam',
          year: 2003,
          sold: 750,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'wardani',
          year: 2003,
          sold: 500,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'aprima',
          year: 2004,
          sold: 700,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'agam',
          year: 2004,
          sold: 750,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'wardani',
          year: 2004,
          sold: 800,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'aprima',
          year: 2005,
          sold: 650,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'agam',
          year: 2005,
          sold: 850,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          salesman: 'wardani',
          year: 2005,
          sold: 450,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('performances', null, {});
  }
};
