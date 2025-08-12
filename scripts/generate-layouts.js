const fs = require('fs');
const path = require('path');

// Pages that need layout files for metadata
const pages = [
  'for-agencies',
  'for-smbs', 
  'for-entrepreneurs',
  'careers',
  'ai-visibility-tracking',
  'backlink-checker',
  'onpage-checker',
  'accessibility-checker',
  'pie-chart-generator',
  'line-chart-generator',
  'pareto-chart-generator',
  'blog',
  'support',
  'seo-ai-affiliate-program',
  'terms-conditions',
  'privacy-policy',
  'imprint',
  'indexnow-submit'
];

// Integration pages
const integrationPages = [
  'integrations/wordpress',
  'integrations/webflow'
];

// Template for layout file
const createLayoutTemplate = (pageKey, componentName) => `import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('${pageKey}');

export default function ${componentName}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
`;

// Function to convert kebab-case to PascalCase
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

// Create layout files for regular pages
pages.forEach(page => {
  const dirPath = path.join(__dirname, '..', 'src', 'app', page);
  const filePath = path.join(dirPath, 'layout.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Only create if layout doesn't exist
  if (!fs.existsSync(filePath)) {
    const componentName = toPascalCase(page);
    const content = createLayoutTemplate(page, componentName);
    
    fs.writeFileSync(filePath, content);
    console.log(`Created layout for: ${page}`);
  } else {
    console.log(`Layout already exists for: ${page}`);
  }
});

// Create layout files for integration pages
integrationPages.forEach(page => {
  const dirPath = path.join(__dirname, '..', 'src', 'app', page);
  const filePath = path.join(dirPath, 'layout.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Only create if layout doesn't exist
  if (!fs.existsSync(filePath)) {
    const componentName = toPascalCase(page.replace('/', ''));
    const content = createLayoutTemplate(page, componentName);
    
    fs.writeFileSync(filePath, content);
    console.log(`Created layout for: ${page}`);
  } else {
    console.log(`Layout already exists for: ${page}`);
  }
});

console.log('Layout generation complete!'); 