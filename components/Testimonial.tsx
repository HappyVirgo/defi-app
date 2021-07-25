import Image from 'next/image'
import React from 'react'

const Testimonial = ({avatar, name, jobTitle, content, className}) => {
    return (
        <div className={`flex space-y-6 flex-col ${className}`}>
            <span>
                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.50165 9.64504C4.50165 6.88931 6.24422 4.64122 8.93069 4.13359V0C2.61386 1.01527 0 7.03435 0 12.3282C0 16.3893 1.66997 19 4.93729 19C7.55115 19 9.65677 17.2595 9.65677 14.1412C9.65677 10.7328 7.33333 9.13741 4.50165 9.64504ZM16.8449 9.64504C16.8449 6.88931 18.5875 4.64122 21.2739 4.13359V0C14.9571 1.01527 12.3432 7.03435 12.3432 12.3282C12.3432 16.3893 14.0132 19 17.2805 19C19.8944 19 22 17.2595 22 14.1412C22 10.7328 19.6766 9.13741 16.8449 9.64504Z" fill="#1D1929"/>
                </svg>
            </span>
            <h2 className="text-2xl">{content}</h2>
            <div className="flex space-x-4">
                <Image
                    src={avatar}
                    width={48}
                    height={48}
                    objectFit="contain"
                    quality={100}
                    alt={name}
                />
                <div>
                    <h2 className="text-lg">{name}</h2>
                    <h2 className="text-base" style={{color: '#8A8698'}}>{jobTitle}</h2>
                </div>
            </div>
        </div>
    )
}

export default Testimonial