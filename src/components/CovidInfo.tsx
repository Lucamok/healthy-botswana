import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';
import { healthApi } from '../services/api';
import { useToast } from "@/components/ui/use-toast";

export const CovidInfo: React.FC = () => {
  const { toast } = useToast();
  const { data: covidData, isLoading, error } = useQuery({
    queryKey: ['covidStats'],
    queryFn: healthApi.getCovidStats,
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to fetch COVID-19 statistics",
        variant: "destructive",
      });
    }
  });

  if (isLoading) {
    return (
      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const stats = covidData || {
    totalCases: "Loading...",
    activeCases: "Loading...",
    recovered: "Loading...",
    deaths: "Loading...",
    vaccinationRate: "Loading...",
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>COVID-19 Statistics in Botswana</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Total Cases</p>
            <p className="text-2xl font-bold">{stats.totalCases}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Active Cases</p>
            <p className="text-2xl font-bold">{stats.activeCases}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Recovered</p>
            <p className="text-2xl font-bold">{stats.recovered}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Deaths</p>
            <p className="text-2xl font-bold">{stats.deaths}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Vaccination Rate</p>
            <p className="text-2xl font-bold">{stats.vaccinationRate}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
};