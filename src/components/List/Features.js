import {useState} from 'react'
import DatePicker from './DatePicker'
const Features = ({allProducts,setAllProducts,setProducts,setPage}) => {
  const [picker,setPicker] = useState(false);
  return (
    <div className='features'>
        <div className="pagination-feature-wrapper">
            <p>Show</p>

            <p>Entries</p>
        </div>
        <div className="date-selection">
            <h4 onClick={() => setPicker((picker) => !picker)}>Select Duration</h4>
            { picker && <DatePicker allProducts={allProducts} setAllProducts={setAllProducts} setProducts={setProducts} setPage={setPage}/>}
        </div>
    </div>
  )
}

export default Features