import React from 'react'
import { ServiceModel, ServicesData } from '../../data/serviceData'
import Service from './Service'

const Services = () => {

    const services: ServiceModel[] = ServicesData;

    return (
        <div id="services" className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto px-4 lg:px-0">
            <h2 className="text-lg">Services</h2>
            <p className="text-4/5xl lg:text-5xl leading-tight font-medium my-5 font-neueMachina">Full-Service. Full-Speed.</p>
            <p className="text-lg">Whether you require a complete project developed or a little extra manpower, we offer<br className="hidden lg:inline-block" /> the services you need at the speed you need.</p>

            <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                {
                    services.map(
                        (service: ServiceModel, index: number) => {
                            return <Service service={service} key={index} />
                        }
                    )
                }
            </div>

        </div>
    )
}



export default Services
