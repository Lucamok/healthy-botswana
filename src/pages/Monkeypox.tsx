import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Monkeypox = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Monkeypox Information</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What is Monkeypox?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Monkeypox is a viral zoonotic disease caused by the monkeypox virus. It was first discovered in 1958 in colonies of monkeys kept for research, hence the name. The first human case was recorded in 1970 in the Democratic Republic of the Congo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How it Spreads</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-2">
                <li>Direct contact with infected animals</li>
                <li>Close contact with infected people</li>
                <li>Contact with contaminated materials</li>
                <li>Respiratory droplets during prolonged face-to-face contact</li>
                <li>Mother-to-child transmission through placenta</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Symptoms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-2">
                <li>Fever</li>
                <li>Headache</li>
                <li>Muscle aches</li>
                <li>Backache</li>
                <li>Swollen lymph nodes</li>
                <li>Rash that develops into fluid-filled blisters</li>
                <li>Fatigue</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The 2022-2023 monkeypox outbreak led to increased global awareness and response measures. While cases have decreased significantly, continued vigilance and preventive measures are recommended. Vaccines are available for high-risk individuals.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Monkeypox;