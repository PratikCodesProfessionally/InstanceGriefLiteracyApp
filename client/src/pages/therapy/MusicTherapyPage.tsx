import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause } from 'lucide-react';

export function MusicTherapyPage() {
  const [currentTrack, setCurrentTrack] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const musicCategories = [
    {
      title: "Calming & Peaceful",
      description: "Gentle melodies for quiet reflection",
      icon: "🕊️",
      tracks: ["Ocean Waves", "Peaceful Piano", "Forest Sounds"],
    },
    {
      title: "Emotional Release",
      description: "Music that allows you to feel deeply",
      icon: "💧",
      tracks: ["Sad Piano", "Emotional Strings", "Crying Permission"],
    },
    {
      title: "Uplifting & Hope",
      description: "Songs that remind you of light ahead",
      icon: "🌅",
      tracks: ["Morning Light", "Hope Rising", "New Beginnings"],
    },
    {
      title: "Memory Lane",
      description: "Music for remembering and honoring",
      icon: "💝",
      tracks: ["Nostalgic Melodies", "Memory Box", "Love Remains"],
    },
  ];

  const activities = [
    "Create a playlist for your loved one",
    "Listen to their favorite song and write about it",
    "Sing or hum a meaningful melody",
    "Use rhythm to express your emotions",
  ];

  const handlePlay = (track) => {
    setCurrentTrack(track);
    setIsPlaying(!isPlaying);
  };

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
          🎵 Music Therapy
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {musicCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{category.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.tracks.map((track, trackIndex) => (
                    <div key={trackIndex} className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">{track}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handlePlay(track)}
                      >
                        {currentTrack === track && isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Music Activities</CardTitle>
              <CardDescription>
                Interactive ways to engage with music therapy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {activities.map((activity, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-3"
                >
                  {activity}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Voice Recording</CardTitle>
              <CardDescription>
                Record your voice sharing memories or singing
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-4xl">🎤</div>
              <p className="text-gray-600">Voice recording feature coming soon</p>
              <Button>Start Recording</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
