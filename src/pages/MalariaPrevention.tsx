import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MalariaPrevention = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Malaria Prevention in Botswana</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What is Malaria?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Malaria is a life-threatening disease caused by parasites that are transmitted through the bites of infected female Anopheles mosquitoes. It's a significant public health concern in Botswana, particularly in certain regions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Impact in Botswana</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Malaria continues to be a major health challenge in Botswana, particularly affecting:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Northern regions (Okavango Delta)</li>
                <li>Chobe District</li>
                <li>Ngamiland District</li>
                <li>Parts of Central District</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Symptoms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-2">
                <li>High fever</li>
                <li>Chills and sweating</li>
                <li>Headaches</li>
                <li>Muscle pains</li>
                <li>Fatigue</li>
                <li>Nausea and vomiting</li>
                <li>Diarrhea</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prevention Measures</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use insecticide-treated mosquito nets</li>
                <li>Apply mosquito repellent</li>
                <li>Wear long-sleeved clothing, especially during dawn and dusk</li>
                <li>Remove standing water around homes</li>
                <li>Take antimalarial medication when traveling to high-risk areas</li>
                <li>Install or repair window and door screens</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Treatment for malaria typically includes:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Artemisinin-based combination therapy (ACT)</li>
                <li>Early diagnosis and prompt treatment is essential</li>
                <li>Hospitalization for severe cases</li>
                <li>Supportive care to manage symptoms</li>
              </ul>
              <p className="mt-4 text-red-600 font-semibold">
                Seek immediate medical attention if you suspect malaria. Early treatment is crucial for recovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MalariaPrevention;