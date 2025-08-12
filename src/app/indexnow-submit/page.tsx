"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Upload, RefreshCw, Lock } from "lucide-react";

// Simple password - you can change this to whatever you want
const ADMIN_PASSWORD = "finseo2024!";

export default function IndexNowSubmitPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [urls, setUrls] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submissionResults, setSubmissionResults] = useState<any[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  
  // Pre-configured API key and location from the IndexNow guide
  const apiKey = "07935c64889f445d876c139490b6fab7";
  const keyLocation = "https://finseo.ai/07935c64889f445d876c139490b6fab7.txt";

  // Extract URLs from sitemap
  const sitemapUrls = [
    "https://finseo.ai/",
    "https://finseo.ai/pricing",
    "https://finseo.ai/for-agencies",
    "https://finseo.ai/for-enterprise",
    "https://finseo.ai/for-smbs",
    "https://finseo.ai/for-entrepreneurs",
    "https://finseo.ai/careers",
    "https://finseo.ai/ai-visibility-tracking",
    "https://finseo.ai/ai-article-writer",
    "https://finseo.ai/keyword-research",
    "https://finseo.ai/backlink-checker",
    "https://finseo.ai/onpage-checker",
    "https://finseo.ai/accessibility-checker",
    "https://finseo.ai/ai-chart-generator",
    "https://finseo.ai/pie-chart-generator",
    "https://finseo.ai/line-chart-generator",
    "https://finseo.ai/pareto-chart-generator",
    "https://finseo.ai/integrations/wordpress",
    "https://finseo.ai/integrations/webflow",
    "https://finseo.ai/blog",
    "https://finseo.ai/support",
    "https://finseo.ai/seo-ai-affiliate-program"
  ];

  useEffect(() => {
    // Check if user is already authenticated (stored in sessionStorage)
    const authenticated = sessionStorage.getItem('indexnow-authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
    
    // Pre-populate with all sitemap URLs
    setUrls(sitemapUrls.join('\n'));
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError("");
      // Store authentication in session storage
      sessionStorage.setItem('indexnow-authenticated', 'true');
    } else {
      setAuthError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('indexnow-authenticated');
    setPassword("");
  };

  const submitToIndexNow = async () => {
    if (!urls.trim()) {
      setMessage({ type: 'error', text: 'No URLs to submit' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    
    try {
      const urlList = urls.split('\n')
        .map(url => url.trim())
        .filter(url => url && url.startsWith('http'));

      if (urlList.length === 0) {
        setMessage({ type: 'error', text: 'No valid URLs found' });
        return;
      }

      // Submit to our API route which will handle the IndexNow submission
      const response = await fetch('/api/indexnow-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          urls: urlList
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage({ type: 'success', text: result.message });
        setSubmissionResults(result.results || []);
      } else {
        setMessage({ type: 'error', text: result.error || result.message || 'Failed to submit URLs' });
        if (result.results) {
          setSubmissionResults(result.results);
        }
      }

    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while submitting URLs' });
      console.error('IndexNow submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusColor = (status: number) => {
    if (status === 200) return "bg-green-500";
    if (status === 400) return "bg-yellow-500";
    if (status >= 403) return "bg-red-500";
    return "bg-gray-500";
  };

  const getStatusText = (status: number) => {
    switch (status) {
      case 200: return "Success";
      case 400: return "Bad Request";
      case 403: return "Forbidden";
      case 422: return "Invalid URLs";
      case 429: return "Rate Limited";
      default: return "Unknown";
    }
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Protected Area</CardTitle>
            <CardDescription>
              Enter the password to access the IndexNow submission tool
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              
              {authError && (
                <Alert className="border-red-500">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-700">
                    {authError}
                  </AlertDescription>
                </Alert>
              )}
              
              <Button type="submit" className="w-full">
                Access IndexNow Tool
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p>Loading URLs from sitemap...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold">IndexNow Bulk Submission</h1>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <p className="text-xl text-muted-foreground">
            Submit all Finseo URLs for instant indexing across search engines
          </p>
        </div>

        <Alert className="mb-6">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>API Key:</strong> {apiKey}<br />
            <strong>Key Location:</strong> {keyLocation}<br />
            <strong>URLs Loaded:</strong> {sitemapUrls.length} URLs from sitemap
          </AlertDescription>
        </Alert>

        {message && (
          <Alert className={`mb-6 ${message.type === 'success' ? 'border-green-500' : message.type === 'error' ? 'border-red-500' : 'border-blue-500'}`}>
            {message.type === 'success' ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : message.type === 'error' ? (
              <AlertCircle className="h-4 w-4 text-red-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-blue-500" />
            )}
            <AlertDescription className={message.type === 'success' ? 'text-green-700' : message.type === 'error' ? 'text-red-700' : 'text-blue-700'}>
              {message.text}
            </AlertDescription>
          </Alert>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>URLs to Submit ({urls.split('\n').filter(url => url.trim()).length})</CardTitle>
            <CardDescription>
              All URLs from the sitemap are pre-loaded. You can edit them if needed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
              rows={15}
              className="font-mono text-sm"
            />
            
            <Button 
              onClick={submitToIndexNow} 
              disabled={isSubmitting || !urls.trim()}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Upload className="h-4 w-4 mr-2 animate-spin" />
                  Submitting to IndexNow...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Submit All URLs to IndexNow
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {submissionResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Submission Results</CardTitle>
              <CardDescription>
                Status of your IndexNow submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {submissionResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{result.url}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(result.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge 
                        variant="secondary" 
                        className={`${getStatusColor(result.status)} text-white`}
                      >
                        {result.status}
                      </Badge>
                      <span className="text-sm">{getStatusText(result.status)}</span>
                      {result.status === 200 ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>About IndexNow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Supported Search Engines</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Microsoft Bing</li>
                  <li>• Yandex</li>
                  <li>• Seznam.cz</li>
                  <li>• Naver</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Benefits</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Instant indexing notifications</li>
                  <li>• Reduced crawl quota usage</li>
                  <li>• Better content freshness</li>
                  <li>• Improved SEO performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 