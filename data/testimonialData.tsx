export const TestimonialData: TestimonialModel[] = [
    {
        avatar: '/user1.png',
        name: 'Wade Warren',
        jobTitle: 'Founder of Company',
        content: 'Sit turpis semper amet, sit in sed. Quis dignissim mattis sem sed et. Magna vel erat mi feugiat egestas risus orci, vehicula. Vitae a, lacinia pellentesque eleifend et eu.'
    },
    {
        avatar: '/user2.png',
        name: 'Esther Howard',
        jobTitle: 'Founder of Company',
        content: 'Egestas egestas vel id ipsum elementum porta. Ut laoreet ipsum ac sed amet magna dictumst donec nulla. Purus vivamus senectus posuere tortor amet non morbi amet, aliquet. '
    },
    {
        avatar: '/user3.png',
        name: 'Jane Cooper',
        jobTitle: 'Founder of Company',
        content: 'Bibendum ipsum nulla sagittis pellentesque dolor cursus. Diam adipiscing praesent neque sed volutpat tristique. Amet, adipiscing aliquam consectetur viverra nunc eleifend. '
    },
    {
        avatar: '/user4.png',
        name: 'Bessie Cooper',
        jobTitle: 'Founder of Company',
        content: 'Tincidunt pharetra etiam phasellus in lacus sapien, sit fames mauris. Sagittis arcu sit a morbi elit fusce quam tellus. Aliquam sit placerat dui elit senectus. '
    }
];

export interface TestimonialModel {
    avatar: string,
    name: string
    jobTitle: string
    content: string
}