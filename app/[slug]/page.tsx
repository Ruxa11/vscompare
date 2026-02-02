type PageProps = {
  params: Promise<{ slug: string }>;
};

function humanize(slug: string) {
  return slug
    .split("-vs-")
    .map((p) => p.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "))
    .join(" vs ");
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    // можно вернуть 404
    const { notFound } = await import("next/navigation");
    notFound();
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{humanize(slug)}</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}