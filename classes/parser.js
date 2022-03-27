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

    this.parsedTrolls = {};

    /**
     * A function that parses a single troll file
     * @param {string} path the path to one troll file to parse
     */
    this.parse = (path) => {
      try {
        const file = JSON.stringify(fs.readFileSync(path));
        const parsed = JSON.parse(file);

        return parsed;
      } catch (err) {
        console.error(`There was an error parsing the troll file at ${path}!`);
      }
    };

    /**
     * A function that parses all troll files
     */
    this.parseAll = () => {
      const trolls = fs
        .readdirSync(this.path)
        .filter(
          (file) => file.endsWith(".troll") && !this.excluded.includes(file)
        );

      for (const troll of trolls) {
        try {
          const file = JSON.stringify(fs.readFileSync(`${this.path}/${troll}`));
          const parsed = JSON.parse(file);

          this.parsedTrolls[troll.slice(0, troll.lastIndexOf("."))] = parsed;
        } catch (err) {
          console.error(
            `There was an error parsing a troll file at ${this.path}/${troll}!`
          );
        }
      }

      return this.parsedTrolls;
    };
  }
};
