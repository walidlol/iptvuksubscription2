interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Injects a JSON-LD schema.org script into the page.
 * Use in page files alongside the metadata export.
 */
export default function SchemaOrg({ schema }: SchemaOrgProps): React.ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
