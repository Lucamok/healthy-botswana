import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const EssentialMealsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Essential Healthy Meals</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Breakfast</h3>
              <p>Whole grain porridge, fruits, eggs, or yogurt for sustained energy throughout the day.</p>
            </div>
            <div>
              <h3 className="font-semibold">Lunch</h3>
              <p>Balance of proteins (lean meat, fish, or legumes), whole grains, and vegetables.</p>
            </div>
            <div>
              <h3 className="font-semibold">Dinner</h3>
              <p>Light meals with vegetables, lean proteins, and whole grains. Avoid heavy meals before bedtime.</p>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};