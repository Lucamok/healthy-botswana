import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const CovidInfo: React.FC = () => {
  const covidData = [
    { label: "Total Cases", value: "150,000" },
    { label: "Active Cases", value: "500" },
    { label: "Recovered", value: "148,000" },
    { label: "Deaths", value: "1,500" },
    { label: "Vaccination Rate", value: "70%" },
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>COVID-19 Statistics in Botswana</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {covidData.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
};