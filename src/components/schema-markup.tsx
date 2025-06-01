import Script from 'next/script';

interface SchemaMarkupProps {
  schema: any | any[];
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  // Handle both single schema and array of schemas
  const schemaData = Array.isArray(schema) ? schema : [schema];
  
  return (
    <>
      {schemaData.map((schemaItem, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem, null, 2)
          }}
        />
      ))}
    </>
  );
} 