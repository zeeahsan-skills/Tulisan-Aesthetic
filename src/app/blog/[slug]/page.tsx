import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS_DATA } from '@/lib/blog-posts';
import DynamicBlogArticleClientPage from './DynamicBlogArticleClientPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan - Tulisan Aesthetic Blog',
    };
  }

  const articleUrl = `https://tulisan-aesthetic.vercel.app/blog/${post.slug}`;

  return {
    title: `${post.title} — Tulisan Aesthetic Blog`,
    description: post.description,
    keywords: [
      post.category.toLowerCase(),
      'tulisan aesthetic',
      'font unicode',
      'generator teks',
    ],
    authors: [{ name: post.author }],
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: articleUrl,
      siteName: 'Tulisan Aesthetic',
      locale: 'id_ID',
      type: 'article',
      publishedTime: '2026-08-25T00:00:00.000Z',
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    robots: 'index, follow',
  };
}

export default async function DynamicBlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tulisan-aesthetic.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog Hub',
        item: 'https://tulisan-aesthetic.vercel.app/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://tulisan-aesthetic.vercel.app/blog/${post.slug}`,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `https://tulisan-aesthetic.vercel.app/blog/${post.slug}`,
    datePublished: '2026-08-25T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://tulisan-aesthetic.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tulisan Aesthetic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tulisan-aesthetic.vercel.app/favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tulisan-aesthetic.vercel.app/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <DynamicBlogArticleClientPage post={post} />
    </>
  );
}
