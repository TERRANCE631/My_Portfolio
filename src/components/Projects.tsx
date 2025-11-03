import { projectList } from "@/data/Projects"
import { ProjectsCart } from "./ui/ProjectsCart"

export const Projects = ({ projectsRef }) => {
    return (
        <section ref={projectsRef} className="container mx-auto px-4 md:px-6 overflow-hidden">
            <div className="text-center flex flex-col">
                <span className='text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient'>Projects</span>
            </div>

            <div className="section-container p-8 md:p-10 shadow-xl">
                <div className="lg:grid-cols-2 md:grid-cols-2 grid grid-cols-1 gap-4">
                    {projectList.map((content) => (<ProjectsCart key={content.id} content={content} />))}
                </div>
            </div>
        </section>
    )
}
