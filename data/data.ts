import { menuItemType, messageType, requestType, storyType, postType } from "@/types/types"

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


//posts data
export const postsData: postType[] = [
    {
        user: {
            name: "Nkemtakeh Celsoppe",
            profile_img: "profile-15.jpg",
        },
        post_img: "feed-4.jpg",
        like_by_profiles: [""],
        like_by_name: "Juan Lee",
        post_desc: "dolor sit #adipiscing #elit, #sed tempor incididunt #ut.",
        total_likes: 134, 
        location: "USA",
        date: "2h",
    },
    {
        user: {
            name: "Oreol Noumodong",
            profile_img: "profile-16.jpg",
        },
        post_img: "feed-1.jpg",
        like_by_profiles: [""],
        like_by_name: "Ricardo Lian",
        post_desc: "Lorem ipsum dolor sit amet, consectetur #elit, #sed do eiusmod tempor incididunt #ut labore.",
        total_likes: 2, 
        location: "UK",
        date: "57 minutes",
    },
    {
        user: {
            name: "Joya Joyce",
            profile_img: "profile-17.jpg",
        },
        post_img: "feed-5.jpg",
        like_by_profiles: [""],
        like_by_name: "Njinpuoan Lun",
        post_desc: "Lorem ipsum dolor sit #adipiscing #elit, #sed do eiusmod tempor incididunt #ut labore.",
        total_likes: 97, 
        location: "CM",
        date: "13w",
    },
    {
        user: {
            name: "Kamkang Junior",
            profile_img: "profile-18.jpg",
        },
        post_img: "feed-6.jpg",
        like_by_profiles: [""],
        like_by_name: "Jean Lurc",
        post_desc: "Lorem ipsum dolor sit amet, consectetur #adipiscing #elit, #sed do eiusmod tempor incididunt #ut labore.",
        total_likes: 7, 
        location: "ANGOLA",
        date: "1w",
    },
    {
        user: {
            name: "Njinta Brice",
            profile_img: "profile-12.jpg",
        },
        post_img: "feed-7.jpg",
        like_by_profiles: [""],
        like_by_name: "Steve Matt",
        post_desc: "Lorem ipsum dolor sit amet, consectetur #adipiscing #elit, #sed do eiusmod tempor incididunt #ut labore.",
        total_likes: 9, 
        location: "RUSSIA",
        date: "344w",
    },
    {
        user: {
            name: "Biwole Paul",
            profile_img: "profile-19.jpg",
        },
        post_img: "feed-2.jpg",
        like_by_profiles: [""],
        like_by_name: "Hamadou Kari",
        post_desc: "Lorem ipsum dolor sit amet, consectetur do eiusmod tempor incididunt #ut labore.",
        total_likes: 209, 
        location: "Tchad",
        date: "2 minutes",
    },
    {
        user: {
            name: "Kamta Yves",
            profile_img: "profile-20.jpg",
        },
        post_img: "feed-3.jpg",
        like_by_profiles: [""],
        like_by_name: "Teneu Steve",
        post_desc: "Lorem ipsum, consectetur #adipiscing #elit, #sed do eiusmod tempor incididunt #ut labore.",
        total_likes: 29, 
        location: "Canada",
        date: "12w",
},

]