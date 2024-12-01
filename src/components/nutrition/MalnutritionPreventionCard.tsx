import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const MalnutritionPreventionCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Malnutrition Prevention</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Dietary Measures</h3>
              <ul className="list-disc pl-6">
                <li>Ensure balanced diet with all food groups</li>
                <li>Include protein-rich foods daily</li>
                <li>Eat plenty of fruits and vegetables</li>
                <li>Consider supplements when recommended</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Lifestyle Changes</h3>
              <ul className="list-disc pl-6">
                <li>Regular health check-ups</li>
                <li>Proper food storage and preparation</li>
                <li>Good hygiene practices</li>
                <li>Regular physical activity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Community Support</h3>
              <ul className="list-disc pl-6">
                <li>Access to nutrition education</li>
                <li>Community feeding programs</li>
                <li>Support for vulnerable populations</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};