import { api } from '@/lib/axios'

export interface CancelOrderDetailsParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderDetailsParams) {
  const response = await api.patch(`/orders/${orderId}/cancel`)
  return response.data
}
