import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const SexualHealth = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Sexual Health Information</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sexual Health Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Sexual health is a fundamental aspect of overall well-being. It encompasses physical, emotional, mental, and social aspects of sexuality. Understanding and practicing safe sex is crucial for preventing sexually transmitted infections (STIs) and maintaining reproductive health.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common STIs and Prevention</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">HIV/AIDS</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Causes: Human Immunodeficiency Virus</li>
                      <li>Transmission: Blood, sexual fluids, breast milk</li>
                      <li>Prevention: Safe sex practices, PrEP, regular testing</li>
                      <li>Symptoms: May be asymptomatic initially, later affects immune system</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Gonorrhea</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Causes: Bacterial infection</li>
                      <li>Transmission: Sexual contact</li>
                      <li>Prevention: Condom use, regular testing</li>
                      <li>Symptoms: Discharge, pain during urination</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Syphilis</h3>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Causes: Bacterial infection</li>
                      <li>Transmission: Direct contact with syphilis sore</li>
                      <li>Prevention: Safe sex practices, regular screening</li>
                      <li>Symptoms: Sores, rash, fever in stages</li>
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
                <li>Use condoms consistently and correctly</li>
                <li>Get regular STI screenings</li>
                <li>Limit sexual partners</li>
                <li>Communicate openly with partners about sexual health</li>
                <li>Get vaccinated against preventable STIs</li>
                <li>Seek immediate medical attention if symptoms appear</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SexualHealth;