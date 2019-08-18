'use strict';

const assert = require('assert');
const { listToTree, listToDisorder } = require('../src/list-transform')

describe('list-transform', function() {

  it(`should return no diff`, function() {
    assert.equalObj(listToTree([]), []);
  });

  it(`should return no diff`, function() {
    assert.equalObj(listToTree([
      {
        id: '1'
      },
      {
        id: '2', parentId: '1'
      },
      {
        id: '5'
      }
    ]), [
      {
        id: '1',
        children: [
          {
            id: '2', parentId: '1'
          },
        ]
      },
      {
        id: '5'
      }
    ]);
  });

  it(`should return no diff`, function() {
    assert.equalObj(listToTree([
      {
        id: '1'
      },
      {
        id: '2', parentId: '1'
      },
      {
        id: '3', parentId: '4'
      },
      {
        id: '4', parentId: '1'
      },
      {
        id: '5'
      }
    ]), [
      {
        id: '1',
        children: [
          {
            id: '2', parentId: '1'
          },
          {
            id: '4', parentId: '1', children: [
            {
              id: '3', parentId: '4'
            }
            ]
          }
        ]
      },
      {
        id: '5'
      }
    ]);
  });
});