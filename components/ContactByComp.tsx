import React from 'react'
import Image from 'next/image'


const ContactByComp = ({icon, message, idx, link}) => {
    return (
        <div className="flex flex-col space-y-5 px-5 py-8 items-center justify-center border hover:border-black" key={idx} onClick={() => location.href=link}>
            <Image src={icon} alt="contact" width={48} height={48} />
            <h2 className="text-center text-lg">{message}</h2>
        </div>
    )
}

export default ContactByComp