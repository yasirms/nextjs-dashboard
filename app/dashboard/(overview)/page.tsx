import { Card } from '@/app/dashboard/cards';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../../lib/data';
import { fetchLatestInvoices } from '../../lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import RevenueChart from '@/app/dashboard/revenue-chart';
import CardWrapper from '@/app/dashboard/cards';


export default async function Page() {
    // const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    // const {
    //     numberOfCustomers,
    //     numberOfInvoices,
    //     totalPaidInvoices,
    //     totalPendingInvoices
    
    // } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper/>
        </Suspense>
        {/* <Card title="Collected" value = {totalPaidInvoices}type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
        <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}