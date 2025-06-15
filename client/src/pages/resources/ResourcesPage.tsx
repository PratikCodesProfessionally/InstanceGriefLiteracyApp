import * as React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Book, GraduationCap, Globe } from 'lucide-react';

export function ResourcesPage() {
  const location = useLocation();
  const isMainPage = location.pathname === '/resources';

  const bookRecommendations = [
    {
      title: 'Option B',
      author: 'Sheryl Sandberg & Adam Grant',
      description: 'Building resilience in the face of adversity',
      rating: 4.8,
      category: 'Resilience',
    },
    {
      title: 'The Year of Magical Thinking',
      author: 'Joan Didion',
      description: 'A powerful memoir about grief and survival',
      rating: 4.6,
      category: 'Memoir',
    },
    {
      title: 'It\'s OK That You\'re Not OK',
      author: 'Megan Devine',
      description: 'Meeting grief and loss in a culture that doesn\'t understand',
      rating: 4.9,
      category: 'Self-Help',
    },
    {
      title: 'The Wild Edge of Sorrow',
      author: 'Francis Weller',
      description: 'Rituals of renewal and the sacred work of grief',
      rating: 4.7,
      category: 'Spiritual',
    },
  ];

  const courses = [
    {
      title: 'Understanding Grief Stages',
      duration: '2 hours',
      lessons: 8,
      description: 'Learn about different models of grief and how they apply to your experience',
    },
    {
      title: 'Grief in Different Cultures',
      duration: '1.5 hours',
      lessons: 6,
      description: 'Explore how different cultures around the world understand and process grief',
    },
    {
      title: 'Supporting Others in Grief',
      duration: '3 hours',
      lessons: 12,
      description: 'How to offer meaningful support to friends and family who are grieving',
    },
  ];

  const resources = [
    {
      title: 'Self-Help Books',
      description: 'Curated recommendations for books on grief, healing, and resilience',
      icon: <Book className="h-6 w-6" />,
      path: '/resources/books',
    },
    {
      title: 'Educational Courses',
      description: 'Short courses on grief literacy and emotional wellness',
      icon: <GraduationCap className="h-6 w-6" />,
      path: '/resources/courses',
    },
    {
      title: 'Cultural Practices',
      description: 'Learn how different cultures approach grief and mourning',
      icon: <Globe className="h-6 w-6" />,
      path: '/resources/cultural',
    },
    {
      title: 'Professional Help',
      description: 'Find grief counselors and therapists in your area',
      icon: '🤝',
      path: '/resources/professional',
    },
  ];

  if (isMainPage) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Learning Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Educational content, books, and courses to deepen your understanding of grief and healing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{resource.icon}</div>
                  <div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Link to={resource.path}>
                  <Button className="w-full">Explore</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="h-5 w-5" />
                <span>Featured Books</span>
              </CardTitle>
              <CardDescription>
                Recommended reading for your grief journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bookRecommendations.map((book, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">{book.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {book.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    by {book.author}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {book.description}
                  </p>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{book.rating}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Mini Courses</span>
              </CardTitle>
              <CardDescription>
                Short, digestible lessons on grief literacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <h3 className="font-semibold text-sm mb-1">{course.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{course.lessons} lessons</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Additional routes can be added here */}
    </Routes>
  );
}
