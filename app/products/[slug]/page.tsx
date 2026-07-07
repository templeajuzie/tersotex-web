import { getProduct, getProductSlugs } from "@/lib/products"
import { Footer } from "@/components/landing-page/footer"
import { ProductPageHeader } from "@/components/product-page-header"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) return {}

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProductPageHeader />
      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-28 sm:px-6 md:gap-10 lg:grid-cols-[minmax(280px,460px)_1fr] lg:px-8 lg:pb-24 lg:pt-32">
          <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-border/60 bg-muted lg:sticky lg:top-28">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] max-h-[360px] w-full object-cover sm:max-h-[460px] lg:max-h-[540px]"
            />
          </div>

          <article className="min-w-0">
            <Link
              href="/#services"
              className="mb-6 inline-block text-sm font-medium text-secondary hover:text-primary"
            >
              Back to products
            </Link>

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary sm:text-sm">
              {product.tag}
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-balance sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {product.description}
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
              <div className="border-t border-border pt-4">
                <dt className="text-sm text-muted-foreground">Size</dt>
                <dd className="mt-1 font-medium">{product.size}</dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="text-sm text-muted-foreground">Type</dt>
                <dd className="mt-1 font-medium">{product.type}</dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="text-sm text-muted-foreground">Best for</dt>
                <dd className="mt-1 font-medium">{product.bestFor}</dd>
              </div>
            </dl>

            <section className="mt-8 border-t border-border pt-7 lg:mt-10">
              <h2 className="font-serif text-2xl font-normal">
                Product description
              </h2>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="leading-7">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 border-t border-border pt-7">
              <h2 className="font-serif text-2xl font-normal">How to use</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {product.usage}
              </p>
            </section>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}
