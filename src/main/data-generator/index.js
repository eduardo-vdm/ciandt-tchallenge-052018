/**
 * @file
 * Generates random finance data and export it to a file.
 */

const jsf = require('json-schema-faker');
const env = require('node-env-file');
const fs = require('fs');

// init .env variables
env(__dirname + '/.env');

// import schema
const schema = require(process.env.SCHEMA_FILE_PATH);

// generate data
const data = jsf(schema);

// export to file
console.log(`Exporting ${data && data.length || 0} items to: ${process.env.EXPORT_FILE_PATH}`);
fs.writeFile(process.env.EXPORT_FILE_PATH, JSON.stringify({ transactions: data }), (err) => {
  if (err) throw err;
  console.log(`Done.`);
  process.exit();
});
