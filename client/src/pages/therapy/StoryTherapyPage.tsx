import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft } from 'lucide-react';

export function StoryTherapyPage() {
  const [selectedPrompt, setSelectedPrompt] = React.useState('');
  const [story, setStory] = React.useState('');

  const storyPrompts = [
    "Write about a memory that brings you comfort",
    "Tell the story of how you met your loved one",
    "Describe a perfect day you would spend together",
    "Write a letter to your future self about this journey",
    "Create a story where your loved one is the hero",
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/therapy">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Therapy
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          📖 Story Therapy
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Story Prompts</CardTitle>
            <CardDescription>
              Choose a prompt to begin your therapeutic storytelling session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {storyPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant={selectedPrompt === prompt ? "default" : "outline"}
                className="w-full text-left justify-start h-auto p-3"
                onClick={() => setSelectedPrompt(prompt)}
              >
                {prompt}
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Story</CardTitle>
            <CardDescription>
              {selectedPrompt || "Select a prompt to begin writing"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Start writing your story here..."
              className="min-h-80"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              disabled={!selectedPrompt}
            />
            <div className="mt-4 space-x-2">
              <Button disabled={!story.trim()}>Save Story</Button>
              <Button variant="outline" onClick={() => setStory('')}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
