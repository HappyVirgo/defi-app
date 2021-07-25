import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ProjectModel } from '../../data/projectsData';

const ProjectGroup = (props: any) => {
    const projects = props.projectGroup;
    return (
        <div className="grid gap-36 grid-cols-1 lg:grid-cols-2 mb-36 px-4 xl:px-0">
            {
                projects.map(
                    (project: ProjectModel, index: number) => {
                        return <div key={index} className={index === 3 ? 'md:-mt-48' : ''} style={{ gridColumn: (index === 4 && window.innerWidth > 768) ? 'span 2' : 'span 1' }}>
                            {(index === 0 || index === 3) && <div className="bg-gray-200">
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
                                (index === 1 || index === 2) && <div>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={497}
                                        height={380}
                                        objectFit="cover"
                                    />
                                </div>
                            }
                            {
                                (index === 4) && <div>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={955}
                                        height={600}
                                        objectFit="cover"
                                    />
                                </div>
                            }
                            <h2 className="text-2xl font-bold mt-4">{project.name} —</h2>
                            <p className={"mt-2 " + (index === 4 ? 'md:w-1/2' : 'w-full')}>{project.excerpt}</p>
                            <div className="mt-8 text-xl font-medium font-neueMachina">
                                {/* <Link href={`/case-study/${encodeURIComponent(project.id)}`}><a>View case study ↗</a></Link> */}
                                {/* <br/> */}
                                <a href={project.projectLink} target="_blank" >View Project ↗</a>
                            </div>
                        </div>
                    }
                )
            }

        </div>
    )
}
// style={{ gridColumn: 'span 2' }}

export default ProjectGroup
