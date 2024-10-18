import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InfoCardProps {
  title: string;
  content: string;
  linkText: string;
  linkUrl: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, content, linkText, linkUrl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={linkUrl}>{linkText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};