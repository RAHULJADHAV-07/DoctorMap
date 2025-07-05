
import React from 'react';


const Contact = () => (
  <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h1>
      <p className="mb-2 text-gray-700">We'd love to hear from you! For any queries, feedback, or support, please reach out:</p>
      <div className="mb-4">
        <p className="font-semibold">Email:</p>
        <a href="mailto:support@doctormap.com" className="text-blue-600 hover:underline">support@doctormap.com</a>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Phone:</p>
        <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91-1234567890</a>
      </div>
      <div>
        <p className="font-semibold mb-1">Address:</p>
        <p className="text-gray-600">DoctorMap HQ, 2nd Floor, HealthTech Park, Mumbai, India</p>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-300">Connect with the Creator</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">DoctorMap is created and maintained by <b>Rahul</b>. For business inquiries, suggestions, or collaborations, you can contact me directly:</p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Personal Email: <a href="mailto:rahuljadhav0417@gmail.com" className="text-blue-600 underline">rahuljadhav0417@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/rahul-jadhav-a35b992a8/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/rahul</a></li>
        </ul>
      </div>
    </div>
);

export default Contact;
