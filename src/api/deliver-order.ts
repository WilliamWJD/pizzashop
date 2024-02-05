import { api } from '@/lib/axios'

export interface DeliverOrderDetailsParams {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderDetailsParams) {
  const response = await api.patch(`/orders/${orderId}/deliver`)
  return response.data
}
