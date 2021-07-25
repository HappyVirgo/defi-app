export const ContactData: ContactDataModel[] = [
    {
        icon: '/Discord-Logo-Color.png',
        message: 'Connect with us on Discord',
        link: 'https://google.com'
    },
    {
        icon: '/telegram.png',
        message: 'Connect with us on Telegram',
        link: 'https://google.com'
    },
    {
        icon: '/Calendly.png',
        message: 'Schedule a call through Calendly',
        link: 'https://google.com'
    }
];


export interface ContactDataModel {
    icon: string,
    message: string,
    link: string
}
