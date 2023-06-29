import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Wrapper from '../component/wrapper/Wrapper'
import { COLORS, RESTAURANT, rw } from '../utils/constants'
import { gStyles } from '../Style'
import { CenterCmp, RestaurantBoxCmp } from '../component'
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurant } from '../redux/slices/homeSlice'

const RestaurantScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { searchKeyword, restaurant } = useSelector(state => state.home)

  React.useEffect(() => {
    if (searchKeyword.length > 0) {
      let data = RESTAURANT.filter((value, index) => {
        return value['title'].toLowerCase().includes(searchKeyword.toLowerCase())
          | value['desc']?.toLowerCase().includes(searchKeyword.toLowerCase())
          | value['country']?.toLowerCase().includes(searchKeyword.toLowerCase())
      })
      dispatch(setRestaurant(data))
    } else {
      setRestaurant(RESTAURANT)
    }
  }, [searchKeyword])
  return (

    <Wrapper >
      <CenterCmp style={{ paddingHorizontal: rw(5) }}>
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

const styles = StyleSheet.create({})