
# Install

1. `git clone https://github.com/akump/GroupMeDarkTheme.git`
2. **Optional**: Edit line 1 of ts/script.ts to include your GroupMe nicknames to highlight your messages in a different color. Note: feel free to hack this code to meet your performance needs. Currently, it will cut off at 1000 messages in the DOM and require a page refresh to work again. Then run `npm install` and `npm run build`

```ts
const yourNicknames: Array<string> = ['Andrew Kump', 'Irelia one trick', 'Drevv', 'Brovid-19'];
```

3. `chrome://extensions` in Chrome
4. Click 'Load unpacked'
5. Navigate in file explorer to where you cloned the repo e.g. `D:\git\GroupMeDarkTheme`

![Alt text](images/example_pic.png?raw=true "Title")

# Potential issues

1. Scroll bars on all machines
2. Performance if you leave GroupMe afk for hours. Currently this is negated by just shutting the extension off, but I'd prefer that not to work that way
3. Random screens no one ever goes to - last 10% of CSS
   1. Calendar
   2. Contacts
   3. Archives
   4. Campus Connect

# Development

The build will automatically get run if you run the below commands before starting development

* .ts files -> `npm run ts-watch`
* .scss files -> `npm run scss-watch`

This builds the dist folder which is where the Chrome extension actually pulls files. Reload the extension, and then reload groupme.com to see your changes.

# How to update the Chrome dev store

1. Update package.json/manfiest.json to new version
2. Zip manifest.json/dist/images and upload that to chrome dev store
