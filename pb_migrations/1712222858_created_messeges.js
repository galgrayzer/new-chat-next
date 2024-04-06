/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1utj3wfp0t9v8u2",
    "created": "2024-04-04 09:27:38.770Z",
    "updated": "2024-04-04 09:27:38.770Z",
    "name": "messeges",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ia7knbxo",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "nndlh4x7",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1utj3wfp0t9v8u2");

  return dao.deleteCollection(collection);
})
