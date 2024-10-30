// import React from 'react';
// import { Calendar } from 'lucide-react';

// interface WeekCardProps {
//   weekNumber: number;
//   onClick: () => void;
// }

// export const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="w-full glass-card p-6 text-left transition-all duration-300 hover:scale-105"
//     >
//       <div className="flex items-center gap-4">
//         <div className="p-3 rounded-lg bg-violet-600/30">
//           <Calendar className="w-6 h-6" />
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">Week {weekNumber}</h3>
//           <p className="text-gray-400">7 Quiz Sets Available</p>
//         </div>
//       </div>
//     </button>
//   );
// }



import React from 'react';
import { Calendar } from 'lucide-react';
import ReactGA from "react-ga4";

interface WeekCardProps {
  weekNumber: number;
  onClick: () => void;
}

export const WeekCard: React.FC<WeekCardProps> = ({ weekNumber, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
        ReactGA.event({
          category: 'Week Card',
          action: 'Clicked',
          label: `Week ${weekNumber}`,
        });
      }}
      className="w-full glass-card p-6 text-left transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-violet-600/30">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Week {weekNumber}</h3>
          <p className="text-gray-400">7 Quiz Sets Available</p>
        </div>
      </div>
    </button>
  );
};