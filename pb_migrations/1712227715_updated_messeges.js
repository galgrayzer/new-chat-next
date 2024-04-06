/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1utj3wfp0t9v8u2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqyfca9z",
    "name": "image",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1utj3wfp0t9v8u2")

  // remove
  collection.schema.removeField("uqyfca9z")

  return dao.saveCollection(collection)
})
