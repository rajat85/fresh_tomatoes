/**
* Movie.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'movies',
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      columnName: 'id'
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    rating: {
      type: 'float',
      columnName: 'rating'
    },
    description: {
      type: 'text',
      columnName: 'description'
    },
    image_url: {
      type: 'string',
      columnName: 'image_url'
    }
  }

};

