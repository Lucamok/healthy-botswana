import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChildHealth = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Child Health in Botswana</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Common Health Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Malnutrition</li>
                  <li>Respiratory infections</li>
                  <li>Diarrheal diseases</li>
                  <li>HIV/AIDS</li>
                  <li>Malaria (in endemic areas)</li>
                  <li>Vaccine-preventable diseases</li>
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vaccination Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Birth</h3>
                    <ul className="list-disc ml-6">
                      <li>BCG (Tuberculosis)</li>
                      <li>OPV (Polio)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">6 Weeks</h3>
                    <ul className="list-disc ml-6">
                      <li>DPT-HepB-Hib</li>
                      <li>OPV</li>
                      <li>PCV (Pneumococcal)</li>
                      <li>Rotavirus</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">10 Weeks</h3>
                    <ul className="list-disc ml-6">
                      <li>DPT-HepB-Hib</li>
                      <li>OPV</li>
                      <li>PCV</li>
                      <li>Rotavirus</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">14 Weeks</h3>
                    <ul className="list-disc ml-6">
                      <li>DPT-HepB-Hib</li>
                      <li>OPV</li>
                      <li>PCV</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">9 Months</h3>
                    <ul className="list-disc ml-6">
                      <li>Measles</li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prevention Measures</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-2">
                <li>Regular health check-ups</li>
                <li>Following vaccination schedule</li>
                <li>Proper nutrition</li>
                <li>Good hygiene practices</li>
                <li>Safe drinking water</li>
                <li>Mosquito protection in endemic areas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ChildHealth;