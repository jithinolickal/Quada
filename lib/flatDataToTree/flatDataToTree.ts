var uuid = require("uuid");

const flatDataToTree = (dataset, keys) => {
  try {
    // If no key is provided, returns current data
    if (keys.length === 0) return dataset;

    // The current key to perform the grouping on:
    var key = keys[0];

    // Loop through the data and construct buckets for
    // all of the unique keys:
    var groups = {};
    dataset.forEach((data) => {
      let groupValue = data[key];
      if (groups[groupValue] === undefined) {
        groups[groupValue] = [];
      }
      groups[groupValue].push(data);
    });

    // Remove the first element from the groups array:
    // keys.reverse();
    // keys.pop();
    // keys.reverse();
    keys.shift();

    // If there are no more keys left, we're done:
    if (keys.length === 0) return groups;

    // Otherwise, handle further groupings:
    for (var group in groups) {
      let response = flatDataToTree(groups[group], keys.slice());
      groups[group] = {
        type: key,
        id: uuid.v4(),
        name: group,
        subItem: response,
        data: groups[group][0],
      };
    }

    return groups;
  } catch (err) {
    console.log("flatDataToTree [Error]", err);
  }
};
module.exports = flatDataToTree;
