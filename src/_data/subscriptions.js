const fs = require('fs');
const path = require('path');
const parseOpml = require('node-opml-parser');
const opmlPath = path.resolve(__dirname, '../subscriptions.opml');

module.exports = function () {
  const subscriptions = [];

  if (fs.existsSync(opmlPath)) {
    const opml = fs.readFileSync(opmlPath, 'utf8');
    parseOpml(opml, (error, items) => {
      if (error) {
        console.error(error);
        return;
      }

      Array.prototype.push.apply(subscriptions, items);
    });
  }

  return subscriptions;
};
