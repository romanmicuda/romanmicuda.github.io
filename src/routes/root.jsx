import { Outlet, Link } from "react-router-dom";
import '../output.css';

export default function Root() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="space-x-4">
            <Link to="" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link to="service" className="text-gray-700 hover:text-blue-500">Services</Link>
            {/* <Link to="portfolio" className="text-gray-700 hover:text-blue-500">Portfolio</Link> */}
            <Link to="contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}