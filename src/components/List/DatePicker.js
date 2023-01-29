import {useState} from 'react'
import { DateRangePicker } from 'react-date-range';
import pagination from '../../utils';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const DatePicker = ({allProducts,setProducts,setPage}) => {
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
    const handleSelect = (date) => {
        setStartDate(date.selection.startDate)
        setEndDate(date.selection.endDate)
        let filtered = allProducts.filter((product) => {
            let productDate = new Date(product.created_At);
            return (
                productDate >= date.selection.startDate && productDate <= date.selection.endDate
            )
        })
        setProducts(pagination(filtered))
    };
  return (
    <div className='date-picker'>
        <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
          />
    </div>
  )
}

export default DatePicker