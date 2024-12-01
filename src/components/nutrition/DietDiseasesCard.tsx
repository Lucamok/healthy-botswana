import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const DietDiseasesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Diet-Related Diseases</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Type 2 Diabetes</h3>
              <p>Caused by poor diet high in sugar and refined carbohydrates. Prevention includes:</p>
              <ul className="list-disc pl-6">
                <li>Maintaining a healthy weight</li>
                <li>Regular exercise</li>
                <li>Limiting processed foods and sugary drinks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Heart Disease</h3>
              <p>Prevention through diet:</p>
              <ul className="list-disc pl-6">
                <li>Reduce saturated fats</li>
                <li>Increase fiber intake</li>
                <li>Limit salt consumption</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Obesity</h3>
              <p>Prevention measures:</p>
              <ul className="list-disc pl-6">
                <li>Portion control</li>
                <li>Regular physical activity</li>
                <li>Balanced, nutrient-rich diet</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};