import { redirect } from "next/navigation";

export default async function PaymentsCallbackPage({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; trxref?: string }>;
}) {
  const { reference, trxref } = await searchParams;
  const params = new URLSearchParams();
  if (reference) params.set("reference", reference);
  if (trxref) params.set("trxref", trxref);
  redirect(`/checkout/success?${params.toString()}`);
}
