import React from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  client: string;
  role: string;
  accomplishments: string[];
  projectLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  duration,
  client,
  role,
  accomplishments,
  projectLink,
}) => {
  return (
    <div className="card-container">
        <div className="rounded-lg overflow-hidden shadow-md bg-white mx-4 my-4">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-gray-600 mb-2">{description}</p>

                    <div className="flex flex-wrap gap-2 mb-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-700 mb-2">
                        <strong>Duration:</strong> {duration}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Client:</strong> {client}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Role:</strong> {role}
                    </p>
                    {accomplishments.length > 0 && (
                        <div className="mb-2">
                            <strong>Accomplishments:</strong>
                            <ul className="list-disc list-inside">
                            {accomplishments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                            </ul>
                        </div>
                    )}
                    {projectLink && (
                    <p className="text-blue-500 mb-2">
                        <strong>Project Link:</strong>{' '}
                        <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        {projectLink}
                        </a>
                    </p>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Project;
        


