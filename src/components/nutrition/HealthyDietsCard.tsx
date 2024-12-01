import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const HealthyDietsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Types of Healthy Diets</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md">
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Mediterranean Diet</h3>
              <p>Rich in fruits, vegetables, whole grains, legumes, and olive oil. Features moderate amounts of fish and limited red meat.</p>
            </li>
            <li>
              <h3 className="font-semibold">Plant-Based Diet</h3>
              <p>Focuses on foods from plant sources, including fruits, vegetables, nuts, seeds, oils, whole grains, legumes, and beans.</p>
            </li>
            <li>
              <h3 className="font-semibold">Traditional Botswana Diet</h3>
              <p>Incorporates local staples like sorghum, maize, beans, and indigenous vegetables, providing essential nutrients.</p>
            </li>
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};