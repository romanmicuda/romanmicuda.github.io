import { Outlet, Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container mx-auto p-8 bg-blue-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Contact</h1>
      <div className="font-bold space-y-6 text-blue-800">
        {/* Uncommented and updated with blue theme */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-blue-700">Email:</h2>
          <p className="text-blue-600">roman.micuda@outlook.com</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-blue-700">LinkedIn:</h2>
          <p className="text-blue-600">
            <a 
              href="https://www.linkedin.com/in/romanmicuda" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              www.linkedin.com/in/romanmicuda
            </a>
          </p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-blue-700">Github:</h2>
          <p className="text-blue-600">
            <a 
              href="https://github.com/romanmicuda" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              https://github.com/romanmicuda
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
