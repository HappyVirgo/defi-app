import Image from 'next/image'
import React from 'react'
import { TechnologyData, TechnologyModel } from '../data/techonlogyData';

const Technologies = () => {

    const technologies = TechnologyData;

    return (
        <div id="technologies" className="px-4 lg:px-0 mt-32 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl lg:mx-auto flex flex-col md:flex-row gap-0 lg:gap-24 items-center">
            <div className="h-full w-full flex-1 order-2 lg:order-1">
                <Image
                    src="/technologyArt.png"
                    width={556}
                    height={526}
                    objectFit="contain"
                    quality={100}
                    alt="technlogy art"
                />
            </div>

            <div className="flex-2 order-1 lg:order-2">
                <h2 className="text-lg">Technologies</h2>
                <p className="text-4/5xl lg:text-5xl leading-tight font-medium font-neueMachina my-5">Our Toolbelt</p>
                <p className="text-lg">Below are some of the tools and technologies we work with.</p>

                <div className="mt-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 -ml-6">
                    {
                        technologies.map(
                            (technology: TechnologyModel, index: number) => {
                                return <div key={index} className="flex flex-col items-center justify-center mb-12">
                                    <Image src={technology.image} width={50} height={60} alt={technology.name} />
                                    <p className="text-base mt-3" >{technology.name}</p>
                                </div>

                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}



export default Technologies
