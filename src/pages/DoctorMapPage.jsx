import React from 'react';
import doctors from '../data/doctors.json';
import DoctorMap from '../components/DoctorMap';

const DoctorMapPage = () => (
  <div className="max-w-5xl mx-auto p-4">
    <DoctorMap doctors={doctors} />
  </div>
);

export default DoctorMapPage;
