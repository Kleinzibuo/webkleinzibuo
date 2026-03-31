'use client';

import { useParams } from 'next/navigation';
import PreschoolDetailPage from '@/components/PreschoolDetailPage';

export default function Page() {
  const params = useParams();
  const id = Number(params.id);

  return <PreschoolDetailPage preschoolId={id} />;
}