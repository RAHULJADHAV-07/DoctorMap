// src/components/DoctorMap.jsx
import React from 'react';

const DoctorMap = ({ doctors }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Doctors Near You
      </h3>
      
     
      <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-96 overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-800">
       
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-gray-300 dark:border-gray-600"></div>
              ))}
            </div>
          </div>
          
         
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600"></div>
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-400 dark:bg-gray-500"></div>
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600"></div>
          <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-gray-300 dark:bg-gray-600"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-400 dark:bg-gray-500"></div>
          <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-gray-300 dark:bg-gray-600"></div>
        </div>

       
        {doctors.slice(0, 6).map((doctor, index) => (
          <div
            key={doctor.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${
              index === 0 ? 'top-1/4 left-1/3' :
              index === 1 ? 'top-1/3 left-2/3' :
              index === 2 ? 'top-1/2 left-1/4' :
              index === 3 ? 'top-2/3 left-3/4' :
              index === 4 ? 'top-3/4 left-1/2' :
              'top-1/6 left-5/6'
            }`}
          >
           
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform transition-all duration-200 group-hover:scale-110 ${
              doctor.available 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-red-500 hover:bg-red-600'
            }`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            
            
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                <div className="font-medium">{doctor.name}</div>
                <div className="text-gray-300">{doctor.specialization}</div>
                <div className="text-gray-300">{doctor.location}</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        ))}

      
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full opacity-30 animate-ping"></div>
        </div>

        
        <div className="absolute top-4 right-4 space-y-2">
          <button className="bg-white dark:bg-gray-800 p-2 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="bg-white dark:bg-gray-800 p-2 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
        </div>

       
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
          <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">Legend</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Busy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Your Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorMap;