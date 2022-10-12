export type menuItemType = {
    title: string,
    iconName: string,
    url: string,
    notifications?: number,
}

export type messageType = {
    user: {
        name: string,
        profile_img: string,
        connected: boolean
    },
    message: {
        content: string,
        new: boolean,
    }
}

export type requestType = {
    name: string,
    profile_img: string,
    mutual_friends: number

}

export type storyType = {
    name: string,
    profile_img: string,
    story_img: string,
}

export type postType = {
    user: {
        name: string,
        profile_img: string,
    },
    post_img: string,
    like_by_profiles: string[],
    like_by_name: string,
    post_desc: string,
    location: string,
    date: string,
    total_likes: number
}

export type notificationType = {
    name: string,
    profile_img: string,
    message: string,
    date: string,
}