import { api } from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDaysOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )
  console.log(response.data)
  return response.data
}
