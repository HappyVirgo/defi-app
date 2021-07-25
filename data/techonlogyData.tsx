export const TechnologyData: TechnologyModel[] = [
    {
        name: 'Ethereum',
        image: '/ethereum.svg'
    },
    {
        name: 'Cardano',
        image: '/cardano.svg'
    },
    {
        name: 'Tezos',
        image: '/tezos.svg'
    },
    {
        name: 'Polkadot',
        image: '/polkadot.svg'
    },
    {
        name: 'Flow',
        image: '/flow.svg'
    },
    {
        name: 'BNB',
        image: '/bnb.svg'
    },
    {
        name: 'Chainlink',
        image: '/chainlink.svg'
    },
    {
        name: 'Compound',
        image: '/compound.svg'
    },
    {
        name: 'Decentraland',
        image: '/decentraland.svg'
    },
];

export interface TechnologyModel {
    name: string,
    image: string
}