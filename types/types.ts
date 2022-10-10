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