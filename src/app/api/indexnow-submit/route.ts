import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // Validate URLs
    const validUrls = urls.filter(url => {
      try {
        new URL(url);
        return url.startsWith('https://finseo.ai');
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: 'No valid Finseo URLs provided' },
        { status: 400 }
      );
    }

    // IndexNow configuration
    const apiKey = "07935c64889f445d876c139490b6fab7";
    const keyLocation = "https://finseo.ai/07935c64889f445d876c139490b6fab7.txt";

    // Prepare IndexNow payload according to the specification
    const indexNowPayload = {
      host: "finseo.ai",
      key: apiKey,
      keyLocation: keyLocation,
      urlList: validUrls
    };

    console.log('Submitting to IndexNow:', indexNowPayload);

    // Submit to IndexNow API
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'Finseo-IndexNow-Submitter/1.0',
      },
      body: JSON.stringify(indexNowPayload),
    });

    const timestamp = new Date().toISOString();
    const results = [];

    console.log('IndexNow response status:', indexNowResponse.status);

    if (indexNowResponse.ok) {
      // Success - all URLs submitted
      for (const url of validUrls) {
        results.push({
          url,
          status: 200,
          message: 'Successfully submitted to IndexNow',
          timestamp,
        });
      }
    } else {
      // Handle different error responses
      const errorStatus = indexNowResponse.status;
      let errorMessage = 'Failed to submit to IndexNow';
      
      switch (errorStatus) {
        case 400:
          errorMessage = 'Bad request - Invalid format';
          break;
        case 403:
          errorMessage = 'Forbidden - Invalid API key or key not found';
          break;
        case 422:
          errorMessage = 'Unprocessable Entity - URLs don\'t belong to host or key mismatch';
          break;
        case 429:
          errorMessage = 'Too Many Requests - Rate limited';
          break;
      }

      for (const url of validUrls) {
        results.push({
          url,
          status: errorStatus,
          message: errorMessage,
          timestamp,
        });
      }
    }

    // Also try submitting to Bing directly as a fallback
    try {
      const bingResponse = await fetch('https://www.bing.com/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Finseo-IndexNow-Submitter/1.0',
        },
        body: JSON.stringify(indexNowPayload),
      });
      console.log('Bing IndexNow response status:', bingResponse.status);
    } catch (error) {
      console.log('Bing IndexNow submission failed:', error);
    }

    return NextResponse.json({
      success: indexNowResponse.ok,
      results,
      totalSubmitted: validUrls.length,
      message: indexNowResponse.ok 
        ? `Successfully submitted ${validUrls.length} URLs to IndexNow`
        : `Failed to submit URLs to IndexNow (Status: ${indexNowResponse.status})`
    });

  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET requests to provide API information
export async function GET() {
  return NextResponse.json({
    message: 'IndexNow Submission API',
    description: 'Submit Finseo URLs for instant indexing across multiple search engines',
    apiKey: '07935c64889f445d876c139490b6fab7',
    keyLocation: 'https://finseo.ai/07935c64889f445d876c139490b6fab7.txt',
    supportedEngines: [
      'Microsoft Bing',
      'Yandex',
      'Seznam.cz',
      'Naver'
    ]
  });
} 