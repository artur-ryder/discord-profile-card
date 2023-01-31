export interface User {
    username: string,
    status: 'online' | 'idle' | 'dnd' | 'offline'
    discriminator: string | number,
    avatar_img: string,
    bannerColor: string
    aboutMe?: string,
    activity?: Activity
    badges?: Array<Badge>
    createdAt: number
}

export interface Badge {
    name: string,
    imgLink: string
}

export interface Activity {
    title: string,
    description?: string,
    state?: string,
    largeImageKey?: string,
    smallImageKey?: string,
}