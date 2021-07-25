export const TeamData: TeamMemberModel[] = [
    {
        name: 'Chaitenya Gupta',
        image: '/Chait.jpg',
        role: 'Co-founder',
        linkedIn: 'https://www.linkedin.com/in/chaitenyagupta/',
        twitter: 'https://twitter.com/ChaitenyaG',
        github: 'https://github.com/Chaitenyag'
    },
    {
        name: 'Mihir Wadekar',
        image: '/mihir.png',
        role: 'Co-founder',
        linkedIn: 'https://www.linkedin.com/in/mihirwadekar/',
        twitter: 'https://twitter.com/that_one_nerdy_',
        github: 'https://github.com/mw2000'
    }
];

export interface TeamMemberModel {
    name: string,
    image: string,
    role: string,
    linkedIn: string,
    twitter: string,
    github: string
}
