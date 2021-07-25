import React from 'react'
import { ProjectModel } from '../data/projectsData'
import Image from 'next/image'
import Link from 'next/link';

const NextProjects = (props: any) => {

    const projects: ProjectModel[] = props.projects;

    return (
        <div className="mb-36 mt-36">
            <h2 className="text-4/5xl lg:text-5xl leading-tight font-medium px-4 lg:px-0">What’s next?</h2>
            <div className="grid gap-36 grid-cols-1 md:grid-cols-2 ">
                {
                    projects.map(
                        (project: ProjectModel, index: number) => {
                            return <div key={index} className={index === 0 ? 'mt-24' : ''}>
                                {(index === 1) && <div className="bg-gray-200">
                                    <div className="pl-2 pt-2 md:pl-4 md:pt-4 lg:pl-8 lg:pt-8 flex">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={498}
                                            height={570}
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>}
                                {
                                    (index === 0) && <div>
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={497}
                                            height={380}
                                            objectFit="cover"
                                        />
                                    </div>
                                }
                                <h2 className="text-2xl font-bold mt-4 px-4 lg:px-0">{project.name} —</h2>
                                <p className={"mt-2 px-4 lg:px-0" + (index === 4 ? 'md:w-1/2' : 'w-full')}>{project.excerpt}</p>
                                <div className="mt-8 text-xl font-medium font-neueMachina px-4 lg:px-0">
                                    {/* <Link href={`/case-study/${encodeURIComponent(project.id)}`}><a>View case study ↗</a></Link> */}
                                    <br/>
                                    <a href={project.projectLink} target="_blank" >View Project ↗</a>

                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default NextProjects
