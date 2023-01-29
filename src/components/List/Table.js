import Row from './Row'
import Head from './Head'
const Table = ({data}) => {
    
  return (
    <table className='table-data'>
      <Head/>
      {data?.map((item) => {
        return <Row {...item}/>
      })}
    </table>
  )
}

export default Table