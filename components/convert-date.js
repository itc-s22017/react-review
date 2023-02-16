import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

const ConvertDate = ({ date }) => {
  return (
    <time dateTime={date}>
      {format(parseISO(date), 'yyyy年MM月dd日', { locale: ja })}
    </time>
  )
}

export default ConvertDate
