import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const MalnutritionTypesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Types of Malnutrition</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Undernutrition</h3>
              <p>Causes:</p>
              <ul className="list-disc pl-6">
                <li>Insufficient food intake</li>
                <li>Poor absorption of nutrients</li>
                <li>Chronic illness</li>
              </ul>
              <p className="mt-2">Symptoms:</p>
              <ul className="list-disc pl-6">
                <li>Weight loss</li>
                <li>Fatigue and weakness</li>
                <li>Delayed growth in children</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Micronutrient Deficiencies</h3>
              <p>Causes:</p>
              <ul className="list-disc pl-6">
                <li>Lack of varied diet</li>
                <li>Poor food quality</li>
                <li>Limited access to fresh foods</li>
              </ul>
              <p className="mt-2">Common deficiencies:</p>
              <ul className="list-disc pl-6">
                <li>Iron deficiency anemia</li>
                <li>Vitamin A deficiency</li>
                <li>Iodine deficiency</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};