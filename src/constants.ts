export const ChatEventEnum = Object.freeze({
	// ? once user is ready to go
	CONNECTED_EVENT: "connected",
	// ? when user gets disconnected
	DISCONNECT_EVENT: "disconnect",
	// ? when user joins a socket channel
	JOIN_CHAT_EVENT: "joinChat",
	// ? when participant gets removed from channel, chat gets deleted or leaves a channel
	LEAVE_CHAT_EVENT: "leaveChat",
	// ? when admin updates creates a new channel
	NEW_CHANNEL_EVENT: "newChannel",
	// ? when admin updates a channel name
	UPDATE_CHANNEL_NAME_EVENT: "updateChannelName",
	// ? when new message is received
	MESSAGE_RECEIVED_EVENT: "messageReceived",
	// ? when there is new one on one chat, new channel chat or user gets added in the channel
	NEW_CHAT_EVENT: "newChat",
	// ? when user gets added in the channel
	USER_ADD_TO_CHANNEL_EVENT: "userAddToChannelEvent",
	// ? when there is an error in socket
	SOCKET_ERROR_EVENT: "socketError",
	// ? when participant stops typing
	STOP_TYPING_EVENT: "stopTyping",
	// ? when participant starts typing
	TYPING_EVENT: "typing",
});
