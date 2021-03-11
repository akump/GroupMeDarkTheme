# Download

Download from [Chrome Web Store](https://chrome.google.com/webstore/detail/groupme-dark-theme/jfjijccjhngpphnfjbgnnhnogkamikme?hl=en)

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

# How to update the Chrome web store

1. Update package.json/manfiest.json to new version
2. `npm run build-zip`
3. Upload extension.zip to Chrome web store


# TODO

1. Uglify/minify production code
2. More random css
