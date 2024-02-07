import { getMonthCancelsOrdersAmount } from '@/api/get-month-cancel-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

export function MonthCancelOrdersAmountCard() {
  const { data: monthCancelOrdersAmount } = useQuery({
    queryFn: getMonthCancelsOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCancelOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCancelOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCancelOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCancelOrdersAmount.diffFromLastMonth}%{' '}
                  </span>
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCancelOrdersAmount.diffFromLastMonth}%{' '}
                  </span>
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
