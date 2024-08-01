export const ProjectList = ({ projects }) => {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="image-container">
                    <img
                        src={project.img} 
                        alt=""
                    />
                </div>
            ))}
        </div>
    )
};