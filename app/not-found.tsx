'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const referrer = searchParams?.get('from') || '';

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="inline-flex items-center text-primary hover:text-primary/80"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        <span>Kembali ke Beranda</span>
      </Link>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  );
}
