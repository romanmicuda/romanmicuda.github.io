import { Outlet, Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="container mx-auto p-8 bg-blue-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Services</h1>
      <div className="space-y-4">
        <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition duration-300">
          <h2 className="text-2xl font-semibold text-blue-700">Software Development</h2>
        </div>
        <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition duration-300">
          <h2 className="text-2xl font-semibold text-blue-700">Artificial Intelligence</h2>
        </div>
      </div>
    </div>
  );
}
