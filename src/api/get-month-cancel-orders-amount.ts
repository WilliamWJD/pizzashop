import { api } from '@/lib/axios'

export interface GetMonthCancelOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCancelsOrdersAmount() {
  const response = await api.get<GetMonthCancelOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )
  return response.data
}
