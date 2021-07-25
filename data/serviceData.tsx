export const ServicesData: ServiceModel[] = [
    {
        name: 'Smart Contract Development',
        description: 'Developing blockchain logic on the chain of your choice.'
    },
    {
        name: 'Auditing',
        description: 'Smart contract bug-checking and code reviews.'
    },
    {
        name: 'Front-End Development',
        description: 'Anything from landing pages to fully-functioning websites.'
    },
    {
        name: 'Web3 Integration',
        description: 'Integrating blockchain smart contracts seamlessly to the front end.'
    },
    {
        name: 'UI/UX Design',
        description: 'A front-end to fit your project’s feel.'
    },
    {
        name: 'Marketing',
        description: 'Marketing your project and building a community for a launch.'
    },
    {
        name: 'and much more!',
        description: 'Have another service you need? Ask us about it.'
    },
]

export interface ServiceModel {
    name: string,
    description: string
}
