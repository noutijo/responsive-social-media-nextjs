import { menuItemType, messageType, requestType, storyType } from "@/types/types"

//menu items
export const menuItemsData: menuItemType[] = [
    {
        title: `Home`,
        url: "/",
        iconName: `bi-house`,
    },
    {
        title: `Explore`,
        url: "/explore",
        iconName: `bi-compass`,
    },
    {
        title: `Notifications`,
        url: "/notifications",
        iconName: `bi-bell`,
        notifications: 10,
    },
    {
        title: `Messages`,
        url: "/messages",
        iconName: `bi-chat-dots`,
        notifications: 7,
    },
    {
        title: `Bookmarks`,
        url: "/bookmarks",
        iconName: `bi-bookmark`,
    },
    {
        title: `Analytics`,
        url: "/analytics",
        iconName: `bi-graph-up`,
    },
    {
        title: `Theme`,
        url: "/theme",
        iconName: `bi-palette`,
    },
    {
        title: `Settings`,
        url: "/settings",
        iconName: `bi-gear`,
    },
]

//messages data
export const messagesData: messageType[] = [
    {
        user: {
            name: "Nkemtakeh C.",
            profile_img: "profile-8.jpg",
            connected: true
        },
        message: {
            content: "For sure, I'll",
            new: false,
        }
    },
    {
        user: {
            name: "Tematio R.",
            profile_img: "profile-10.jpg",
            connected: false
        },
        message: {
            content: "Really appreciated, thanks!",
            new: true,
        }
    },
    {
        user: {
            name: "Haki Bobo",
            profile_img: "profile-11.jpg",
            connected: false
        },
        message: {
            content: "Ok bro!",
            new: true,
        }
    },
    {
        user: {
            name: "Owono J.",
            profile_img: "profile-12.jpg",
            connected: false
        },
        message: {
            content: "We'll made it!",
            new: false,
        }
    },
    {
        user: {
            name: "Brenda O.",
            profile_img: "profile-13.jpg",
            connected: true
        },
        message: {
            content: "Love you.",
            new: false,
        }
    },
    {
        user: {
            name: "Mapa O.",
            profile_img: "profile-16.jpg",
            connected: false
        },
        message: {
            content: "Alright boss, I'm gonna the US by tonight, I'll let you know.",
            new: true,
        }
    },
]


//mutual friends data
export const mutualFriendsData: requestType[] = [
    {
        name: "Mougnol Herman",
        profile_img: "profile-15.jpg",
        mutual_friends: 11
    },
    {
        name: "Kamgia Paul",
        profile_img: "profile-12.jpg",
        mutual_friends: 25
    },
    {
        name: "Abena Oreole",
        profile_img: "profile-10.jpg",
        mutual_friends: 3
    },
]

//mutual friends data
export const storiesData: storyType[] = [
    {
    name: "Your Story",
    profile_img: "me.jpeg",
    story_img: "story-1.jpg",
},
    {
    name: "Nkemtakeh Cels",
    profile_img: "profile-1.jpg",
    story_img: "story-2.jpg",
},
    {
    name: "Abena Jeanne",
    profile_img: "profile-12.jpg",
    story_img: "story-3.jpg",
},
    {
    name: "Moutchom Brice",
    profile_img: "profile-3.jpg",
    story_img: "story-4.jpg",
},
    {
    name: "Melonkeng Jose",
    profile_img: "profile-17.jpg",
    story_img: "story-5.jpg",
},
]
