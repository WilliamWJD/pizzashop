import { api } from '@/lib/axios'

export interface GetMonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenueAmount() {
  const response = await api.get<GetMonthRevenueResponse>(
    '/metrics/month-receipt',
  )
  console.log(response.data)
  return response.data
}
