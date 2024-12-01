import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const HealthyEatingTipsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Healthy Eating Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md">
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Portion Control</h3>
              <p>Use smaller plates, measure servings, and listen to hunger cues.</p>
            </li>
            <li>
              <h3 className="font-semibold">Meal Planning</h3>
              <p>Plan meals ahead to ensure balanced nutrition and avoid unhealthy food choices.</p>
            </li>
            <li>
              <h3 className="font-semibold">Hydration</h3>
              <p>Drink plenty of water throughout the day. Limit sugary beverages.</p>
            </li>
            <li>
              <h3 className="font-semibold">Local Food Choices</h3>
              <p>Choose locally available, seasonal fruits and vegetables for better nutrition and affordability.</p>
            </li>
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};