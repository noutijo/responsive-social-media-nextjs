import { menuItemType } from "@/types/types"

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
        notifications:10,
    },
    {
        title: `Messages`,
        url: "/messages",
        iconName: `bi-chat-dots`,
        notifications:7,
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