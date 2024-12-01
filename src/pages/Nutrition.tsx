import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nutrition & Diet Guide</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </main>
    </div>
  );
};

export default Nutrition;