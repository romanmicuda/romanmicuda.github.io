import { Outlet, Link } from "react-router-dom";
import photo from '../img/profile_photo.jpg';

export default function Home() {
  return (
    <div className="container mx-auto p-8 bg-blue-50">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left mb-8 sm:mb-0">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Hi, I am Roman</h1>
          <p className="text-2xl text-blue-500 mb-2">Software Engineer</p>
        </div>
        <div className="flex justify-center">
          <img className="rounded-full h-48 w-48 object-cover shadow-lg" src={photo} alt="Profile photo" />
        </div>
      </div>
    </div>
  );
}
