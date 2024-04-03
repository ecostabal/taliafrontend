import React from 'react';
import socialMedia from '../data/socialMedia.json';

function SocialMediaLinks() {
    return (
        <div className="flex items-center space-x-4 rotate-90">
            {socialMedia.map((social, index) => (
                <React.Fragment key={social.name}>
                    <a href={social.url} className="flex items-center font-exo2 uppercase tracking-widest text-white text-xs hover:text-yellow-500 transition-colors duration-300">
                        <img src={`/icons/${social.name.toLowerCase()}.svg`} alt={social.name} className="fill-white w-4 h-4 mr-2" />
                        {social.name}
                    </a>
                    {index < socialMedia.length - 1 && <div className="h-px bg-white w-8"></div>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default SocialMediaLinks;
