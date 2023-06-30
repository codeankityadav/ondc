import {  FlatList } from 'react-native'
import React from 'react'
import Wrapper from '../component/wrapper/Wrapper'
import { RESTAURANT, rw } from '../utils/constants'
import { CenterCmp, RestaurantBoxCmp } from '../component'
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurant } from '../redux/slices/homeSlice'

const RestaurantScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { searchKeyword, restaurant } = useSelector(state => state.home)

  React.useEffect(() => {
    filterRestaurant()
  }, [searchKeyword])

  const filterRestaurant = () => {
    if (searchKeyword.length > 0) {
      let data = RESTAURANT.filter((value, index) => {
        return value['title'].toLowerCase().includes(searchKeyword.toLowerCase())
          | value['desc']?.toLowerCase().includes(searchKeyword.toLowerCase())
          | value['country']?.toLowerCase().includes(searchKeyword.toLowerCase())
      })
      dispatch(setRestaurant(data))
    } else {
      dispatch(setRestaurant(RESTAURANT))
    }
  }

  return (

    <Wrapper >
      <CenterCmp style={{ paddingHorizontal: rw(5) }}>
        {/* <Text style={gStyles.titleText}>{searchKeyword.length} -  {restaurant.length}</Text> */}
        <FlatList
          data={restaurant}
          renderItem={({ item }) => <RestaurantBoxCmp item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: rw(0.2) }}
        />
      </CenterCmp>
    </Wrapper>
  )
}

export default RestaurantScreen
