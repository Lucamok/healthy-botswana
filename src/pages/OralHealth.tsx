import React from 'react';
import { Header } from '../components/Header';

const OralHealth = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Oral Health Tips and Information</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Maintaining Good Oral Hygiene</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Brush your teeth twice a day with fluoride toothpaste</li>
                <li>Floss daily to remove plaque between teeth</li>
                <li>Use an antiseptic mouthwash to kill bacteria</li>
                <li>Limit sugary and acidic foods and drinks</li>
                <li>Quit smoking and limit alcohol consumption</li>
                <li>Visit your dentist regularly for check-ups and cleanings</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex items-start justify-center">
              <img 
                src="/brushing-teeth-diagram.png" 
                alt="How to brush your teeth diagram" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Common Oral Health Issues</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tooth decay (cavities)</li>
            <li>Gum disease (gingivitis and periodontitis)</li>
            <li>Bad breath (halitosis)</li>
            <li>Tooth sensitivity</li>
            <li>Oral cancer</li>
          </ul>
          <p className="mt-6 text-gray-600">
            Remember, good oral health is essential for overall well-being. If you experience any
            persistent oral health issues, consult with a dental professional.
          </p>
        </div>
      </main>
    </div>
  );
};

export default OralHealth;