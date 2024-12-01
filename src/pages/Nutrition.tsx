import React from 'react';
import { Header } from '../components/Header';
import { HealthyDietsCard } from '../components/nutrition/HealthyDietsCard';
import { EssentialMealsCard } from '../components/nutrition/EssentialMealsCard';
import { DietDiseasesCard } from '../components/nutrition/DietDiseasesCard';
import { HealthyEatingTipsCard } from '../components/nutrition/HealthyEatingTipsCard';
import { MalnutritionTypesCard } from '../components/nutrition/MalnutritionTypesCard';
import { MalnutritionPreventionCard } from '../components/nutrition/MalnutritionPreventionCard';

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nutrition & Diet Guide</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HealthyDietsCard />
          <EssentialMealsCard />
          <DietDiseasesCard />
          <HealthyEatingTipsCard />
          <MalnutritionTypesCard />
          <MalnutritionPreventionCard />
        </div>
      </main>
    </div>
  );
};

export default Nutrition;