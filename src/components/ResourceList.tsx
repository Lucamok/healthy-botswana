import React from 'react';

export const ResourceList = () => {
  const resources = [
    { name: "Ministry of Health", url: "https://www.moh.gov.bw/" },
    { name: "World Health Organization - Botswana", url: "https://www.who.int/countries/bwa/" },
    { name: "UNICEF Botswana", url: "https://www.unicef.org/botswana/" },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Useful Resources</h2>
      <ul className="space-y-2">
        {resources.map((resource, index) => (
          <li key={index}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};