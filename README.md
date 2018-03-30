# EasyModeration
**What is EasyModeration?**  
  - EasyModeration is a Simple NPM Package that helps you to handle Moderation Discord much easier. It supports any Discord Javascript Library that's ready to be used!
  
## Installing
**Must have Node 8+**  
Run `npm install easymoderation` on your terminal

## Functions/How-to

**createGuild()** - Creates a Guild
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.createGuild('My Guild', 'us-central', 'http://mylinktoaiconthatisa.cat').then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**modifyGuild()** - Modifies a Guild  
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.modifyGuild('My Guild ID', 'New Guild Name', 'hongkong', 0 /* Verification Level */, 0 /* explicit content filter level */, 'AFK Channel ID', 'System Channel ID', 300 /* AFK Timeout */, 'http://anewlinktomynewicon.com', 'New Owner ID', 'Splash URL PARTNER ONLY').then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  
**Check https://discordapp.com/developers/docs/resources/guild#modify-guild for more info on the Parameters!**  

**deleteGuild()** - Deletes a Guild
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.deleteGuild('My Guild ID').then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**fetchMember()** - Fetch the User's ID
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.fetchMember('My Guild ID', 'Member ID').then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**fetchMembers()** - Fetch random users with a limit
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.fetchMembers('My Guild ID', 1 /* Amount of users to get randomly */).then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**modifyUser()** - modify a Member
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.modifyUser('My Guild ID', 'Member ID', 'New Nickname', false /* When a user is muted on VC */, false /* When a user is deafen on VC */).then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**ban()** - Bans a Member
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.ban('My Guild ID', 'Member ID', 7 /* Amount of days delete the user's messages */, 'A reason for the ban').then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**unban()** - Unbans a Banned Member, if not banned, returns a Unknown Ban error
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.unban('My Guild ID', 'Banned Member ID').then(r => {
	console.log(r)
});
```
**Returns a Promise Object**    

**kick()** - Kicks a Member
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.kick('My Guild ID', 'Member ID').then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**bulkDelete()** - Bulkdelete a specified amount of messages from 2 - 100
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.bulkDelete('My Channel ID', ['An Array', 'of', 'Message', 'IDs']).then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  

**fetchMessages()** - Fetchs messages from the Channnel id from 1 - 100
```js
const EasyModeration = require('easymoderation');
const moderation = new EasyModeration('Bot Token');

moderation.fetchMessages('My Channel ID', 50 /* Minimum 1 max 100, amount of messages to fetch */).then(r => {
	console.log(r)
});
```
**Returns a Promise Object**  
