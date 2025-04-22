import React from 'react';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Calendar, BookOpen, Award, ArrowRight } from 'lucide-react';

type DifficultyLevel = 'easy' | 'medium' | 'hard';

const SampleQuestionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">
            SAMPLE QUESTION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See How We Approach Real Interview Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn our structured approach to tackling complex product management interview questions that leading tech companies ask
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-blue-100 h-full">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-3">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-2">Product Design</Badge>
                  <h3 className="text-xl md:text-2xl font-bold">Design a Fridge</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Badge variant="outline" className="rounded-sm font-normal text-xs">
                      Wayfair
                    </Badge>
                    <span>•</span>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200 rounded-sm font-normal text-xs">
                      Medium
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 16, 2025
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Today&apos;s question is trivial but recently one of my friend at 1mg Senior PM interview was asked this question - Design a vehicle for Mars.
                </p>
                
                <p className="font-medium text-gray-900 mb-2">Let&apos;s jump to the solution:</p>
                
                <h4 className="font-bold text-gray-900 mt-6 mb-2 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">1</span>
                  Clarifying questions
                </h4>
                
                <p className="text-gray-700 mb-2">
                  Before jumping into solutions, I&apos;d ask some key clarifying questions to define the problem space:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-5 mb-4">
                  <li>Target age group – Are we designing for toddlers (2-5 years) or older kids (6-12 years)?</li>
                  <li>Primary users – Is this fridge for kids to use independently, or will parents also use it?</li>
                  <li>Use case – Is it a personal snack fridge, a kid-friendly section in a family fridge, or an educational tool?</li>
                </ul>
                
                <h4 className="font-bold text-gray-900 mt-6 mb-2 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">2</span>
                  Key stakeholders
                </h4>
                
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-5 mb-4">
                  <li>Parents – Want kids to safely access food, especially when they aren&apos;t home</li>
                  <li>Kids – Need an easy, fun, and safe way to access stored food</li>
                  <li>Fridge manufacturers – Want differentiation in a competitive market</li>
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center my-6">
                  <p className="text-gray-500 italic">Premium subscribers get access to the complete solution...</p>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col sm:flex-row gap-4 pt-2 border-t">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Expert solution</span>
                </div>
              </div>
              
              <div className="sm:ml-auto">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  See Full Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-2 border-blue-100 h-full">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-3">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-2">Strategy</Badge>
                  <h3 className="text-xl md:text-2xl font-bold">Define 10 years Uber strategy</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Badge variant="outline" className="rounded-sm font-normal text-xs">
                      Uber
                    </Badge>
                    <span>•</span>
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200 rounded-sm font-normal text-xs">
                      Hard
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  April 1, 2025
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Let&apos;s start the solution with where Uber stands today, what are the challenges in US and emerging markets.
                </p>

                <p className="font-medium text-gray-900 mb-2">Uber&apos;s challenges in the US:</p>
                
                <h4 className="font-bold text-gray-900 mt-6 mb-2 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">1</span>
                  Self-driving car disruption
                </h4>
                
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-5 mb-4">
                  <li>Waymo surpassed Lyft ridership number in SF. Self driving cars adoption are no more just a case study</li>
                  <li>Driverless taxis = lower fares → pressure on Uber&apos;s margins & gig workforce</li>
                  <li>Uber&apos;s self-driving exit (2020) → now dependent on partnerships, losing edge</li>
                </ul>
                
                <h4 className="font-bold text-gray-900 mt-6 mb-2 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">2</span>
                  Regulatory & legal battles
                </h4>
                
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-5 mb-4">
                  <li>Gig worker laws (Prop 22, AB5 in California) → push for driver employee benefits</li>
                  <li>Rideshare lawsuits & unionisation → increased compliance & operating costs</li>
                  <li>Surge pricing scrutiny → potential caps, hurting peak-time profits</li>
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center my-6">
                  <p className="text-gray-500 italic">Premium subscribers get access to the complete solution...</p>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col sm:flex-row gap-4 pt-2 border-t">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Expert solution</span>
                </div>
              </div>
              
              <div className="sm:ml-auto">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  See Full Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-blue-200">
            Browse More Sample Questions
          </Button>
          
          <p className="text-gray-500 text-sm mt-4">
            Get access to 500+ questions with detailed solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default SampleQuestionSection;
