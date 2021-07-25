export const ProjectData: ProjectModel[] = [
    // {
    //     id: '1',
    //     name: 'Musée',
    //     excerpt: 'The new blockchain art revolution. Each plot on the grid is 1 of 10,000 unique NFTs. Based on Ethereum, you can buy, own and sell the NFTs that control the plots. They can also be combined to create a larger plot. Owning a plot makes you part of a unique and limited museum/marketplace.',
    //     image: '/projects/musee.png',
    //     projectLink: "http://musee.art/",
    //     caseStudy: {
    //         abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
    //         technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
    //         heading1: 'Heading 1',
    //         heading2: 'Heading 2',
    //         description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
    //         description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
    //         description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
    //         testimonial: {
    //             text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
    //             employeeName: 'John',
    //             emloyeeRole: 'Founder'
    //         },
    //         resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
    //         projectLink: '',
    //         images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
    //     }

    // },
    {
        id: '2',
        name: 'DR.EV4L',
        excerpt: 'A collab with Argon Industries, Sony Music, and Young Nudy to launch limited edition Young Nudy NFTs.',
        image: '/projects/youngnudy.jpeg',
        projectLink: "http://youngnudy.com/",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }

    },
    {
        id: '3',
        name: 'HappySwap',
        excerpt: 'A user-friendly way to swap your BNB to HAPPY, using the pancakeswap contracts.',
        image: '/projects/happyswap.png',
        projectLink: "http://swap.thehappycoin.co/",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }

    },
    {
        id: '4',
        name: 'Saturna NFT Marketplace',
        excerpt: 'A community where Saturna holders get exclusive access to NFT drops.',
        image: '/projects/saturna.png',
        projectLink: "http://nft.saturna.co/",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }
    },
    {
        id: '5',
        name: 'The Curse NFT',
        excerpt: 'As the #1 google search result for ‘face’, Krystal Schott had lost control of her own identity. An NFT in partnership with AccursedShare will be minted 1 of 1, so Krystal can reclaim her face.',
        image: '/projects/accursed.png',
        projectLink: "https://accursedshare.art/the-curse-nft/",
        caseStudy: {
            abstract: 'At the dawn of the heroic age of cryptoart, Accursed Share is the first artist-led engine for dedicated experimentation through smart contracts. ',
            technologies: ['Frontend development', 'Backend development', 'Smart Contracts', 'Quality assurance'],
            heading1: 'Heading 1',
            heading2: 'Heading 2',
            description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            description3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            testimonial: {
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
                employeeName: 'John',
                emloyeeRole: 'Founder'
            },
            resultDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eius.',
            projectLink: '',
            images: ['/project5.png', '/project5.png', '/project5.png', '/project5.png', '/project5.png']
        }
    },
];

export interface ProjectModel {
    id: string,
    name: string,
    image: string,
    excerpt: string,
    caseStudy: CaseStudy
    projectLink: string
}


export interface CaseStudy {
    abstract: string,
    technologies: string[],
    heading1: string,
    heading2: string,
    description1: string,
    description2: string,
    description3: string,
    testimonial: Testimonial,
    resultDescription: string,
    projectLink: string,
    images: string[]
}

export interface Testimonial {
    text: string,
    employeeName: string,
    emloyeeRole: string
}