import React from 'react'
import { ProjectData, ProjectModel } from '../../../data/projectsData';
import Image from 'next/image';
import Link from 'next/link'
import NextProjects from '../../../components/NextProjects';
import Meta from '../../../components/Meta';

const CaseStudy = (props: any) => {
    const project: ProjectModel = props.project;
    const projects: ProjectModel[] = props.projects;
    const currentProjectIndex = projects.findIndex(proj => proj.id === project.id);
    const nextProjects = currentProjectIndex === projects.length - 1 ? [projects[0], projects[1]] : currentProjectIndex === projects.length - 2 ? [projects[projects.length - 1], projects[0]] :
        [projects[currentProjectIndex + 1], projects[currentProjectIndex + 2]];

    return (
        <>
            <Meta title={project.name} description={project.caseStudy.abstract} />
            <div>
                <div id="case-study" className="mt-32 lg:max-w-4xl xl:max-w-5xl xl:pl-8 2xl:max-w-7xl lg:mx-auto">
                    <h1 className="font-bold text-5xl px-4 lg:px-0" > {project?.name} —</h1>
                    <div className="lg:grid lg:grid-cols-5 lg:gap-24 px-4 lg:px-0">
                        <div className="lg:col-span-3 lg:self-end pt-16">
                            <p className="text-2xl" dangerouslySetInnerHTML={{ __html: project.caseStudy.abstract }}></p>
                        </div>
                        <ul className="col-span-2 space-y-3 text-lg hidden lg:block font-neueMachina">
                            {
                                project.caseStudy.technologies.map(
                                    (tech: string, index: number) => {
                                        return <li key={index}><span className="mr-2"><Image src="/check.svg" alt="check icon" width={13} height={10} /></span>{tech}</li>
                                    }
                                )
                            }
                        </ul>
                    </div>
                    {/* <div className="w-full"></div> */}
                    <div className="mt-20">
                        <Image src="/project5.png" alt="project image" width={1154} height={600} objectFit="cover" objectPosition="center center"></Image>
                    </div>
                    <div className="max-w-screen-md mt-20 mx-auto px-4 lg:px-0">
                        <h2 className="text-5xl">{project.caseStudy.heading1}</h2>
                        <p className="pt-5 ">{project.caseStudy.description1}</p>
                    </div>
                    <div className="max-w-screen-lg flex gap-8 py-20">
                        <Image src="/project5.png" alt="project image" width={512} height={363} objectFit="cover" objectPosition="center center"></Image>
                        <Image src="/project5.png" alt="project image" width={512} height={363} objectFit="cover" objectPosition="center center"></Image>
                    </div>

                    <div className="max-w-screen-md mt-20 mx-auto px-4 lg:px-0">
                        <p className="pt-5">{project.caseStudy.description2}</p>
                        <div className="py-20 text-defi-blue text-center font-neueMachina">
                            <p className="text-2xl ">"{project.caseStudy.testimonial.text}"</p>
                            <p className="text-lg font-bold mt-4">— {project.caseStudy.testimonial.employeeName}, {project.caseStudy.testimonial.emloyeeRole}</p>
                        </div>
                        <h2 className="text-5xl">{project.caseStudy.heading2}</h2>
                        <p className="pt-5">{project.caseStudy.description3}</p>
                    </div>
                    <div className="my-20">
                        <Image src="/project5.png" alt="project image" width={952} height={635} objectFit="cover" objectPosition="center center"></Image>
                    </div>
                    <div className="my-20 flex justify-end lg:mr-10">
                        <Image src="/project5.png" alt="project image" width={650} height={440} objectFit="cover" objectPosition="center center"></Image>
                    </div>
                    <div className="my-20">
                        <Image src="/project5.png" alt="project image" width={952} height={635} objectFit="cover" objectPosition="center center"></Image>
                    </div>

                    <div className="max-w-screen-md mb-20 mx-auto px-4 lg:px-0">
                        <h2 className="text-5xl">The result</h2>
                        <p className="pt-5">{project.caseStudy.resultDescription}</p>
                    </div>

                    {project.caseStudy.projectLink !== '' && <div className="max-w-screen-md mb-20 mx-auto px-4 lg:px-0">
                        <Link href={project.caseStudy.projectLink}><a className="text-3xl">Visit {project.name} ↗</a></Link>
                    </div>}

                    <div className="bg-gray-100 h-0.5 max-w-screen-md mx-auto"></div>


                    <div>
                        <NextProjects projects={nextProjects} />
                    </div>

                </div>
            </div>
        </>
    )
}

export const getStaticProps = async (context: any) => {
    const projects = ProjectData;
    const project = projects.filter(proj => proj.id === context.params.id)[0];

    return {
        props: {
            project,
            projects
        }
    }
}

export const getStaticPaths = async () => {
    const projects = ProjectData;
    const ids = projects.map(proj => proj.id);
    const paths = ids.map(id => ({ params: { id: id } }));

    return {
        paths,
        fallback: false
    }
}

// const router = useRouter()
// const { id } = router.query

// const projects = ProjectData

// const [project, setProject] = useState<any>(null);


// useEffect(() => {
//     setProject(projects.filter(proj => proj.id === id)[0]);
// }, [projects]);

export default CaseStudy
