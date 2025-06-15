import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft } from 'lucide-react';

export function PoetryTherapyPage() {
  const [selectedPoem, setSelectedPoem] = React.useState('');
  const [userPoem, setUserPoem] = React.useState('');

  const healingPoems = [
    {
      title: "Grief Speaks",
      author: "Unknown",
      content: "I am grief.\nI am not your enemy,\nthough I bring pain.\nI am the price you pay for love.\nI am the weight of missing someone.\nLet me be here.\nLet me be felt.\nFor in acknowledging me,\nyou honor the love that remains."
    },
    {
      title: "The Guest House",
      author: "Rumi",
      content: "This being human is a guest house.\nEvery morning a new arrival.\nA joy, a depression, a meanness,\nsome momentary awareness comes\nas an unexpected visitor.\nWelcome and entertain them all!"
    },
  ];

  const poetryPrompts = [
    "Write about what you would say if you could speak to them one more time",
    "Describe your grief as if it were a color, shape, or weather",
    "Create a poem using only words that remind you of them",
    "Write about a moment when you felt their presence",
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
          ✍️ Poetry Therapy
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Healing Poems</CardTitle>
              <CardDescription>
                Read poems that speak to the grief experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {healingPoems.map((poem, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{poem.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {poem.author}</p>
                  <p className="text-sm whitespace-pre-line">{poem.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Poetry Prompts</CardTitle>
              <CardDescription>
                Choose a prompt to inspire your writing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {poetryPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-3"
                  onClick={() => setSelectedPoem(prompt)}
                >
                  {prompt}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Poetry</CardTitle>
            <CardDescription>
              {selectedPoem || "Select a prompt or write freely"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Let your words flow..."
              className="min-h-80 font-mono"
              value={userPoem}
              onChange={(e) => setUserPoem(e.target.value)}
            />
            <div className="mt-4 space-x-2">
              <Button disabled={!userPoem.trim()}>Save Poem</Button>
              <Button variant="outline" onClick={() => setUserPoem('')}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
