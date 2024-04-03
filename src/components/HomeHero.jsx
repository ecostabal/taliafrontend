import React, { useEffect, useState } from 'react';
import projects from '../data/projects.json';
import { ArrowLongRightIcon, ArrowLongLeftIcon, PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import { BounceLoader } from 'react-spinners';

// Objeto que mapea los nombres de las tecnologías a las rutas de los archivos de iconos
const techStackIcons = {
    "Figma": "/techstackicons/figma.svg",
    "Photoshop": "/techstackicons/ps.svg",
    "Vite": "/techstackicons/vitejs.svg",
    "React": "/techstackicons/reactjs.svg",
    "Node": "/techstackicons/nodejs.svg",
    "Tailwind": "/techstackicons/tailwindcss.svg"
    // Agrega aquí más tecnologías según tus necesidades
};

function HomeHero() {
    const [currentProject, setCurrentProject] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [fadeInClass, setFadeInClass] = useState('fadeIn');
    const [zoomOutClass, setZoomOutClass] = useState('zoomOut');

    useEffect(() => {
        setZoomOutClass('zoomOut');
        const timer = setTimeout(() => {
            setZoomOutClass('');
        }, 7500);
        return () => clearTimeout(timer);
    }, [currentProject]);

    useEffect(() => {
        setFadeInClass('fadeIn');
        const timer = setTimeout(() => {
            setFadeInClass('');
        }, 1000); // Asume que la duración de la animación es de 1 segundo
        return () => clearTimeout(timer);
    }, [currentProject]);

    useEffect(() => {
        const interval = isPlaying ? setInterval(() => {
            setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
            setFadeInClass('fadeIn');
        }, 8000) : null;

        return () => clearInterval(interval);
    }, [isPlaying, currentProject]);

    const goToNextProject = () => {
        setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    };

    const goToPreviousProject = () => {
        setCurrentProject((prevProject) => (prevProject - 1 + projects.length) % projects.length);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-zinc-900 h-screen w-full flex justify-center items-center relative">
            <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat filter grayscale ${zoomOutClass}`} style={{ backgroundImage: `url(${projects[currentProject].image})` }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 opacity-90"></div>
            <div className={`z-20 text-center text-white space-y-12 ${fadeInClass}`}>
            <p className="font-exo2 text-xs uppercase tracking-widest flex justify-center">
                {projects[currentProject].techStack.map((tech, index) => (
                    <React.Fragment key={index}>
                    <img src={techStackIcons[tech]} alt={tech} className="w-4 h-4 md:w-5 md:h-5 mx-4" />
                    </React.Fragment>
                ))}
                </p>   
                <div>
                    <h1 className="font-exo2 text-3xl md:text-7xl uppercase font-bold">{projects[currentProject].title}</h1>
                    <h2 className="font-exo2 text-2xl md:text-5xl uppercase font-semibold text-white/20 italic">{projects[currentProject].subtitle}</h2>
                </div>
                <p className="font-exo2 text-xs uppercase tracking-widest font-semibold text-yellow-500">{projects[currentProject].type}</p>                       
                <div className="flex justify-center">
                <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="font-exo2 uppercase tracking-widest text-xs border text-white p-4 hover:bg-white hover:text-zinc-900 flex items-center justify-center transition-all duration-300 ease-in-out">
                    <span>View Project</span>
                    <ArrowLongRightIcon className="ml-2 h-4 w-4" />
                </a>
                </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8 flex flex-col items-center space-y-4">
                {[...Array(projects.length)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentProject ? 'bg-yellow-500 ring-4 ring-yellow-600/20' : 'border w-1 h-1 border-white'}`}
                        style={{
                            transition: 'transform 0.3s ease-in-out',
                            transform: index === currentProject ? 'scale(1.2)' : 'scale(1)'
                        }}
                    ></div>
                ))}
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex space-x-4">
                <button onClick={goToPreviousProject} className="border p-2 md:p-4 rounded-full hover:border-yellow-500 transition-colors duration-300">
                    <ArrowLongLeftIcon className="text-white h-4 w-4" />
                </button>
                <button onClick={togglePlayPause} className={`border p-2 md:p-4 rounded-full hover:border-yellow-500 transition-colors duration-300 ${isPlaying ? 'border-dashed border-spin border-yellow-500' : ''}`}>
                    {isPlaying ? <BounceLoader className='h-4 w-4' color="#eab308" size={16} /> : <PlayIcon className="text-white h-4 w-4" />}
                </button>
                <button onClick={goToNextProject} className="border p-2 md:p-4 rounded-full hover:border-yellow-500 transition-colors duration-300">
                    <ArrowLongRightIcon className="text-white h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

export default HomeHero;
