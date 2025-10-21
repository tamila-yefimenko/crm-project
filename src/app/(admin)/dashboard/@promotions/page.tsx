import { getPromotions } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data
          .map(({ id, title, companyTitle, discount }) => ({
            id,
            companyTitle: companyTitle.includes('Invalid faker method')
              ? 'Unknown Company'
              : companyTitle,
            title: title.includes('Invalid faker method')
              ? 'Untitled Promotion'
              : title,
            discount: isNaN(Number(discount)) ? 0 : discount,
          }))
          .map(({ id, title, companyTitle, discount }) => (
            <tr key={id}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell>{title}</SummaryTableCell>
              <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
            </tr>
          ))}
      </SummaryTable>
    </DashboardCard>
  );
}
