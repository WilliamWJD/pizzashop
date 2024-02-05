import { api } from '@/lib/axios'

export interface ApproveOrderDetailsParams {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderDetailsParams) {
  const response = await api.patch(`/orders/${orderId}/approve`)
  return response.data
}
