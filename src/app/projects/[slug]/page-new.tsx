// Deprecated temporary route: page-new.tsx
// This duplicate route file was used during development. It has been neutralized
// to avoid routing conflicts. The canonical route remains at `page.tsx`.

export const generateStaticParams = async () => {
  return [] as { slug: string }[];
};

export default function DeprecatedProjectPageNew() {
  return null;
}
