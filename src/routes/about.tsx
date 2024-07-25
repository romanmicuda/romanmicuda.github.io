import { Outlet, Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mx-auto p-8 bg-blue-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">About Me</h1>

      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">INOLab</h3>
              <h4 className="text-xl font-medium text-blue-500">Machine Learning Researcher</h4>
              <p className="text-blue-400">Jan 2024 - May 2024</p>
              <ul className="list-disc list-inside text-blue-500 ml-5">
                <li>Research on the use of super-resolution in detecting small objects for diabetic retinopathy.</li>
                <li>Design of a new neural network applied in the field of super-resolution.</li>
                <li>Collaboration with an ophthalmologist to verify the reliability of super-resolution in retinal imaging.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Tatra Banka</h3>
              <h4 className="text-xl font-medium text-blue-500">Machine Learning Engineer</h4>
              <p className="text-blue-400">Oct 2023 - Apr 2024</p>
              <ul className="list-disc list-inside text-blue-500 ml-5">
                <li>Research on the use of generative artificial intelligence in finance.</li>
                <li>Processing large amounts of data using parallel programming.</li>
                <li>Training, hyperparameter tuning, and testing generative models in finance with a 70% success rate.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Aliter Technologies</h3>
              <h4 className="text-xl font-medium text-blue-500">Data Analyst</h4>
              <p className="text-blue-400">Oct 2021 - Jan 2022</p>
              <ul className="list-disc list-inside text-blue-500 ml-5">
                <li>Querying large datasets to implement a software solution for elderly care.</li>
                <li>Education in security for the military industry.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Ing. Applied Informatics</h3>
              <h4 className="text-xl font-medium text-blue-500">Slovak University of Technology, Bratislava</h4>
              <p className="text-blue-400">2022 - 2024</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">Bc. Applied Informatics</h3>
              <h4 className="text-xl font-medium text-blue-500">Slovak University of Technology, Bratislava</h4>
              <p className="text-blue-400">2019 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
