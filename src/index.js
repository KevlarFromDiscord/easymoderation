/*
	Yes, this package is in Heavy Development, as we're not sure on what happens
	when a user spammed this. We are sure that you will get banned, but we're not
	sure on how to handle the ratelimits properly. We can handle some but not all
	so if you'd like to contribute, don't hesitate and contribute. Thanks! - Kevlar#9411
	*/
	
/*
	What is EasyModeration? EasyModeration is a Simple NPM Package that helps you to handle Moderation
	on Discord much easier. It supports any Discord Javascript Library that's ready to be used!
	*/
	
const snek = require('snekfetch');	
	
class EasyModeration {
	constructor(token) {
		this.token = token;
		if (!this.token || this.token.length !== 59 || typeof this.token !== 'string') throw Error('Invalid Login Details were provided!');
	}
	
	/**
	 * Makes a Guild
	 * @param {string} name
	 * @param {string} region
	 * @param {string} icon
	 */
	
	createGuild(name, region, icon) {
		if (typeof name !== 'string') throw Error('Name is required! Others is Optional');
		return new Promise((resolve, reject) => {
			snek.post(`https://discordapp.com/api/guilds`)
				.set('Authorization', `Bot ${this.token}`)
				.send({ name: name, region: region, icon: icon })
			.then(response => {
				resolve(JSON.parse(response.text));
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Modifies the Given Guild ID
	 * @param {string} id
	 * @param {string} name
	 * @param {string} region
	 * @param {number} verificationLevel
	 * @param {number} explicitContentFilter
	 * @param {string} afkChannel_id
	 * @param {string} systemChannel_id
	 * @param {number} afkTimeout
	 * @param {string} icon
	 * @param {string} owner_id
	 * @param {string} splash
	 */
	 
	modifyGuild(id, name, region, verificationLevel, explicitContentFilter, afkChannel_id, systemChannel_id, afkTimeout, icon, owner_id, splash) {
		if (typeof id !== 'string') throw Error('Invalid Guild ID Supplied!');
		return new Promise((resolve, reject) => {
			snek.patch(`https://discordapp.com/api/guilds/${id}`)
				.set('Authorization', `Bot ${this.token}`)
				.send({ name: name, region: region, icon: icon, verification_level: verificationLevel, explicit_content_filter: explicitContentFilter, afk_channel_id: afkChannel_id, afk_timeout: afkTimeout, owner_id: owner_id, splash: splash, system_channel_id: systemChannel_id})
			.then(response => {
				resolve(JSON.parse(response.text))
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Deletes a Guild
	 * @param {string} id
	 */
	 
	deleteGuild(id) {
		if (typeof id !== 'string') throw Error('Invalid Guild ID Supplied!');
		return new Promise((resolve, reject) => {
			snek.delete(`https://discordapp.com/api/guilds/${id}`)
				.set('Authorization', `Bot ${this.token}`)
			.then(response => {
				resolve(response)
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Fetch a Member of the Guild!
	 * @param {string} guild_id
	 * @param {string} member_id
	 */
	 
	fetchMember(guild_id, member_id) {
		if (typeof guild_id !== 'string' || typeof member_id !== 'string') throw Error('Both parameters must be a String!');
		return new Promise((resolve, reject) => {
			snek.get(`https://discordapp.com/api/guilds/${guild_id}/members/${member_id}`)
				.set('Authorization', `Bot ${this.token}`)
			.then(response => {
				resolve(JSON.parse(response.text));
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Fetch a Specified amount of Users on the Guild
	 * @param {string} id
	 * @param {number} limit
	 */
	 
	fetchMembers(id, limit) {
		if (typeof id !== 'string') throw Error('Invalid Guild ID Supplied!');
		if (!limit) limit = 1;
		if (typeof limit === 'string') parseInt(limit);
		return new Promise((resolve, reject) => {
			snek.get(`https://discordapp.com/api/guilds/${id}/members?limit=${limit}`)
				.set('Authorization', `Bot ${this.token}`)
			.then(response => {
				resolve(JSON.parse(response.text));
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Modifies a Guild Member
	 * @param {string} guild_id
	 * @param {string} member_id
	 * @param {string} nick
	 * @param {boolean} muted
	 * @param {boolean} deafen
	 */
	 
	modifyUser(guild_id, member_id, nick, muted, deafen) {
		if (typeof guild_id !== 'string' || typeof member_id !== 'string' || typeof nick !== 'string') throw Error('The first three parameters must be a String!');
		if (!muted) muted = false;
		if (!deafen) deafen = false;
		return new Promise((resolve, reject) => {
			snek.patch(`https://discordapp.com/api/guilds/${guild_id}/members/${member_id}`)
				.set('Authorization', `Bot ${this.token}`)
				.send({ nick: nick, mute: muted, deaf: deafen })
			.then(response => {
				resolve(response)
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Bans a User
	 * @param {string} guild_id
	 * @param {string} member_id
	 * @param {number} days
	 * @param {string} reason
	 */
	 
	ban(guild_id, member_id, days, reason) {
		if (typeof guild_id !== 'string' || typeof member_id !== 'string') throw Error('Guild id and Member id is required!');
		if (!days) days = 0;
		if (!reason) reason = null;
		return new Promise((resolve, reject) => {
			snek.put(`https://discordapp.com/api/guilds/${guild_id}/bans/${member_id}?delete-message-days=${days}&reason=${reason}`)
				.set('Authorization', `Bot ${this.token}`)
			.then(response => {
				resolve(response)
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Unbans a User
	 * @param {string} guild_id
	 * @param {string} member_id
	 */
	 
	unban(guild_id, member_id) {
		if (typeof guild_id !== 'string' || typeof member_id !== 'string') throw Error('Guild id and Member id is required!');
		return new Promise((resolve, reject) => {
			snek.delete(`https://discordapp.com/api/guilds/${guild_id}/bans/${member_id}`)
				.set('Authorization', `Bot ${this.token}`)
			.then(response => {
				resolve(response)
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Kick a User!
	 * @param {string} guild_id
	 * @param {string} member_id
	 */
	 
	kick(guild_id, member_id) {
		if (typeof guild_id !== 'string' || typeof member_id !== 'string') throw Error('Guild id and Member id is required!');
		return new Promise((resolve, reject) => {
			snek.delete(`https://discordapp.com/api/guilds/${guild_id}/members/${member_id}`)
				.set('Authorization', `Bot ${this.token}`)
			.then(response => {
				resolve(response)
			}).catch(e => console.log(e.body.message));
		});
	}
	
	/**
	 * Deletes a specified amount of Messages!
	 * @param {string} channel_id
	 * @param {array} messageIDs
	 */
	 
	bulkDelete(channel_id, messageIDs) {
		if (typeof channel_id !== 'string') throw Error('Please supply a Channel ID!');
		if (!Array.isArray(messageIDs) || messageIDs < 2 || messageIDs > 100) throw Error('Please supply an Array of Message ID\'s to delete! Limit: 2 - 100');
		return new Promise((resolve, reject) => {
			snek.post(`https://discordapp.com/api/channels/${channel_id}/messages/bulk-delete`)
				.set('Authorization', `Bot ${this.token}`)
				.send({ messages: messageIDs })
			.then(response => {
				resolve(response)
			}).catch(e => console.log(e));
		})
	}
	
	/**
	 * Fetchs a specified amount of messages ranging from 1 - 100
	 * @param {string} channel_id
	 * @param {number} limit
	 */
	 
	fetchMessages(channel_id, limit) {
		if (typeof channel_id !== 'string') throw Error('Please supply a Channel ID!');
		if (channel_id.size < 1 || channel_id.size > 100) throw Error('Max size is 100 and minimum is 1!');
		if (!limit) limit = 50;
		if (typeof limit === 'string') parseInt(limit);
		
		return new Promise((resolve, reject) => {
			snek.get(`https://discordapp.com/api/channels/${channel_id}/messages?limit=${limit}`)
				.set('Authorization', `Bot ${this.token}`)
			.then(response => {
				let arrIds = JSON.parse(response.text).map(c => c.id);
				resolve(arrIds)
			}).catch(e => console.log(e.body.message));
		});
	}
};

module.exports = EasyModeration;