import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { ProjectData, ProjectModel } from '../../data/projectsData';
import Meta from '../Meta';
import ProjectGroup from './ProjectGroup';

const Projects = () => {

    const router = useRouter();

    const isProjectRoute = router.pathname === '/projects' ? true : false;

    const projects: ProjectModel[] = ProjectData;

    let chunk = 5;

    const [groupedProjects, setGroupedProjects] = useState<ProjectModel[][]>([]);


    useEffect(() => {
        let tempProjects: ProjectModel[][] = [];
        for (let i = 0; i < projects.length; i += chunk) {
            tempProjects = [...tempProjects, projects.slice(i, i + chunk)];
        }

        if (!isProjectRoute) {

            if (window.innerWidth < 768) {
                const slicedProjects = [tempProjects[0].slice(0, 2)];
                setGroupedProjects(slicedProjects);
            } else {
                setGroupedProjects([tempProjects[0]]);
            }
        } else {
            setGroupedProjects(tempProjects);
        }

    }, [])


    return (
        <>
            <Meta title={'The DeFi Network'} />
            <div id="projects" className="mt-20 lg:mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto">
                {!isProjectRoute && <h2 className="font-bold pl-4 lg:pl-0 text-2xl mb-8">Past Projects</h2>}
                {isProjectRoute && <h1 className="font-bold pl-4 lg:pl-0 text-4/5xl leading-tight lg:text-5xl mb-12">All Projects</h1>}
                {
                    groupedProjects.map(
                        (groupProj: ProjectModel[], index: number) => {
                            return <ProjectGroup key={index} projectGroup={groupProj}></ProjectGroup>
                        }
                    )
                }
                {!isProjectRoute && <div className="mt-32 text-2xl font-medium font-neueMachina pl-4 lg:pl-0">
                    <Link href="/projects"><a>View all projects ↗</a></Link>
                    <div className="bg-gray-100 h-0.5 mt-8"></div>

                </div>}
            </div>
        </>
    )
}



export default Projects
