import React from 'react';
import { Header } from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import { ResourceList } from '../components/ResourceList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Botswana Health Awareness System</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <InfoCard
            title="Malaria Prevention"
            content="Discover effective ways to protect yourself and your family from malaria."
            linkText="Prevention Tips"
            linkUrl="/malaria"
          />
          <InfoCard
            title="Nutrition & Diet"
            content="Explore healthy eating habits and nutritional advice tailored for Botswana."
            linkText="Healthy Eating"
            linkUrl="/nutrition"
          />
          <InfoCard
            title="Monkeypox Information"
            content="Learn about monkeypox symptoms, prevention, and what to do if you suspect infection."
            linkText="Monkeypox Facts"
            linkUrl="/monkeypox"
          />
          <InfoCard
            title="Oral Health"
            content="Discover the importance of good oral hygiene and learn tips for maintaining a healthy smile."
            linkText="Dental Care Tips"
            linkUrl="/oral-health"
          />
        </div>
        <ResourceList />
      </main>
    </div>
  );
};

export default Index;