import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Emergency Contacts</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Numbers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">Emergency Services:</span>
                  <p>997</p>
                </li>
                <li>
                  <span className="font-semibold">Ambulance:</span>
                  <p>997</p>
                </li>
                <li>
                  <span className="font-semibold">Police:</span>
                  <p>999</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ministry of Health Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Headquarters</h3>
                  <p>Phone: (+267) 363 2500</p>
                  <p>Fax: (+267) 391 0647</p>
                  <p>Private Bag 0038</p>
                  <p>Gaborone, Botswana</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@health.gov.bw</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Facebook:</span>
                  <p>@BotswanaHealthMinistry</p>
                </li>
                <li>
                  <span className="font-semibold">Twitter:</span>
                  <p>@BWHealth</p>
                </li>
                <li>
                  <span className="font-semibold">Website:</span>
                  <p>www.moh.gov.bw</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;