import ChatConcept from "./concepts/chatbox";
import FriendConcept from "./concepts/friend";
import InterestConcept from "./concepts/interests";
import PostConcept from "./concepts/post";
import UserConcept from "./concepts/user";
import WebSessionConcept from "./concepts/websession";

// App Definition using concepts
export const WebSession = new WebSessionConcept();
export const User = new UserConcept();
export const Post = new PostConcept();
export const Friend = new FriendConcept();
export const Interest = new InterestConcept();
export const AIAgent = new ChatConcept();
