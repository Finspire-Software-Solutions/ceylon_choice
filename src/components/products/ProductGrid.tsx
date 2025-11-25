import { useMemo, useState } from 'react';
import type { Product } from '../../types';
import ProductCard from './ProductCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../ui/pagination';

type Props = {
  products: Product[];
  onSelect: (id: string) => void;
  pageSize?: number;
};

export default function ProductGrid({ products, onSelect, pageSize = 10 }: Readonly<Props>) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const visible = useMemo(() => {
    const start = (page - 1) * pageSize;
    return products.slice(start, start + pageSize);
  }, [products, page, pageSize]);

  const pagesList = (() => {
    const list: (number | { type: 'ellipsis'; id: string })[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) list.push(i);
    } else {
      list.push(1);
      const left = Math.max(2, page - 1);
      const right = Math.min(totalPages - 1, page + 1);
      if (left > 2) list.push({ type: 'ellipsis', id: 'left' });
      for (let i = left; i <= right; i++) list.push(i);
      if (right < totalPages - 1) list.push({ type: 'ellipsis', id: 'right' });
      list.push(totalPages);
    }
    return list;
  })();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} onClick={onSelect} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => {
                    e.preventDefault();
                    setPage((p) => Math.max(1, p - 1));
                  }}
                />
              </PaginationItem>

              {pagesList.map((item) => {
                if (typeof item === 'object' && item.type === 'ellipsis') {
                  return (
                    <PaginationItem key={`ellipsis-${item.id}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                const pageNum = item as number;
                return (
                  <PaginationItem key={`page-${pageNum}`}>
                    <PaginationLink
                      href="#"
                      isActive={pageNum === page}
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(pageNum);
                      }}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={(e) => {
                    e.preventDefault();
                    setPage((p) => Math.min(totalPages, p + 1));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}