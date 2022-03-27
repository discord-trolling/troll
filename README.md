# troll

A new troll file format for configuration and schemas

- A new easy way for configuring your Discord bots
- Easy low-code structuring for commands
- JSON formatting
- Seamless integration with discord-trolling

## Using as a configuration file

`config.troll`

```
{
  bot: {
    config: {
      token: "token",
      applicationId: "app id",
      guildId: "guild id"
    }
  }
}
```

`index.js`

```js
const { Parser, Client } = require("discord-trolling");

const parser = new Parser({
  path: `${__dirname}/trolls`,
  excluded: [""],
});

// Client class will only search for a file called config.troll
const bot = new Client({
  parser,
  intents: [],
});
```

## Using as a command schema

`commands.troll`

```
{
  commands: {
    commandName: {
      description: "",
      options: [
        {
          name: "option",
          type: 4,
          required: true,
          etc...
        }
      ]
    }
  }
}
```

`index.js`

```js
const { Parser, Manager } = require("discord-trolling");

const parser = new Parser({
  path: `${__dirname}/trolls`,
  excluded: [""],
});

//TODO: write other part of example lol
```
