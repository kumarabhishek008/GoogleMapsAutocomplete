import React, { useState } from 'react'
import MaterialSearchDropdown from '../../components/AutoComplete';
import GoogleMap from '../../components/GoogleMap';
import { fetchSearchData } from '../../ReduxActions/search.actions';
import { APP_URL } from '../../utils/constants';

const SearchLocation = (props) => {
    const [data, setdata] = useState({
        center: {
            lat: 59.95,
            lng: 30.33
          },
          zoom: 11
    })
    const handleChangeDropdown = (value) => {
        
    }
    const handleChangeText = (e) => {
        console.log(e.target.value)
        fetchSearchData({
          url: APP_URL(e.target.value)
        })
    }
  return (
    <div>
        <MaterialSearchDropdown
            options={[]}
            // value=""
            onChange={handleChangeDropdown}
            onChangeText={handleChangeText}
            
        />
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default SearchLocation