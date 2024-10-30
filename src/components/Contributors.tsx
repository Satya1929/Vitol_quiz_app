// import React from 'react';
// import { Github, Linkedin } from 'lucide-react';
// import { Background } from './Background';

// const contributors = [
//   {
//     name: "Satyaprakash Swain",
//     linkedin_url: "https://www.linkedin.com/in/satyaprakash-swain-613067210/",
//     github_url: "https://github.com/Satya1929",
//     image_url: "https://avatars.githubusercontent.com/u/119441530?v=4"
//   }
//   // ,
//   // {
//   //   name: "Om Aditya",
//   //   linkedin_url: "https://www.linkedin.com/in/om-aditya-495312260",
//   //   github_url: "https://github.com/virtuoso8817",
//   //   image_url: "https://media.licdn.com/dms/image/v2/D5603AQGQw0y57m5GPw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701676465547?e=1733356800&v=beta&t=SBs18AqHvhld2MmC9dnk_wGGCdoUDUHTRezDtVpaoA8"
//   // }
// ];

// export const Contributors: React.FC = () => {
//   return (
//     <Background>
//       <div className="w-full max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-12">
//           Meet the amazing contributors behind this project.🎉
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {contributors.map((contributor, index) => (
//             <div key={index} className="glass-card p-8 text-center">
//               <img
//                 src={contributor.image_url}
//                 alt={contributor.name}
//                 className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-violet-500/30"
//               />
//               <h2 className="text-xl font-semibold mb-4">{contributor.name}</h2>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href={contributor.linkedin_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn p-3"
//                 >
//                   <Linkedin className="w-6 h-6" />
//                 </a>
//                 <a
//                   href={contributor.github_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn p-3"
//                 >
//                   <Github className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Background>
//   );
// }




// import React from 'react';
// import { Github, Linkedin } from 'lucide-react';
// import { Background } from './Background';

// const contributors = [
//   {
//     name: "Satyaprakash Swain",
//     linkedin_url: "https://www.linkedin.com/in/satyaprakash-swain-613067210/",
//     github_url: "https://github.com/Satya1929",
//     image_url: "https://avatars.githubusercontent.com/u/119441530?v=4"
//   }
// ];

// export const Contributors: React.FC = () => {
//   return (
//     <Background>
//       <div className="w-full max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-12">
//           Meet the Amazing person behind this project!🎉
//         </h1>
        
//         <div className="grid grid-cols-1 gap-8 justify-center items-center min-h-[40vh]">
//           {contributors.map((contributor, index) => (
//             <div key={index} className="glass-card p-8 text-center">
//               <img
//                 src={contributor.image_url}
//                 alt={contributor.name}
//                 className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-violet-500/30"
//               />
//               <h2 className="text-xl font-semibold mb-4">{contributor.name}</h2>
//               <div className="flex justify-center gap-4">
//                 <a
//                   href={contributor.linkedin_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn p-3"
//                 >
//                   <Linkedin className="w-6 h-6" />
//                 </a>
//                 <a
//                   href={contributor.github_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn p-3"
//                 >
//                   <Github className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Background>
//   );
// }




import React from 'react';
import { Github, Linkedin, ArrowLeft, Home } from 'lucide-react'; 
import { Background } from './Background';

// Add props interface
interface ContributorsProps {
  onBack: () => void;
  onHome: () => void;
}

const contributors = [
  {
    name: "Satyaprakash Swain",
    linkedin_url: "https://www.linkedin.com/in/satyaprakash-swain-613067210/",
    github_url: "https://github.com/Satya1929",
    image_url: "https://avatars.githubusercontent.com/u/119441530?v=4"
  }
];

export const Contributors: React.FC<ContributorsProps> = ({ onBack, onHome }) => {
  return (
    <Background>
      <div className="w-full max-w-4xl mx-auto">
        {/* Navigation buttons */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="btn inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <button
            onClick={onHome}
            className="btn inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          Meet the Amazing person behind this project!🎉
        </h1>
        
        <div className="grid grid-cols-1 gap-8 justify-center items-center min-h-[40vh]">
          {contributors.map((contributor, index) => (
            <div key={index} className="glass-card p-8 text-center">
              <img
                src={contributor.image_url}
                alt={contributor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-violet-500/30"
              />
              <h2 className="text-xl font-semibold mb-4">{contributor.name}</h2>
              <div className="flex justify-center gap-4">
                <a
                  href={contributor.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn p-3"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={contributor.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn p-3"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Background>
  );
}
