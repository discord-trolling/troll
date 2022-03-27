const fs = require("fs");

/**
 * A class for parsing and reading troll files
 * @class
 */
module.exports.Parser = class {
  /**
   * @constructor
   * @param {object} options an object containing options for the parser
   * @param {string} options.path the path to the folder containing your troll files
   * @param {string[]} options.excluded the troll files to exclude from parsing
   */
  constructor(options) {
    this.path = options.path;
    this.excluded = options.excluded;

    /**
     * A function that parses a single troll file
     * @param {string} path the path to one troll file to parse
     */
    this.parse = (path) => {
      try {
        const file = fs.readFileSync(path);
        const parsed = JSON.parse(file);

        return parsed;
      } catch (err) {
        console.error(`There was an error parsing the troll file at ${path}!`);
      }
    };

    /**
     * A function that parses all troll files
     */
    this.parseAll = () => {};
  }
};
