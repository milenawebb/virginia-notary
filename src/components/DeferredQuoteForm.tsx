import { lazy, Suspense } from "react";

const QuoteFormModal = lazy(() =>
  import("@/components/QuoteFormModal").then((module) => ({
    default: module.QuoteFormModal,
  })),
);

export function DeferredQuoteForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!open) return null;

  return (
    <Suspense fallback={null}>
      <QuoteFormModal open={open} onOpenChange={onOpenChange} />
    </Suspense>
  );
}