import { StyleSheet, FlatList, View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FOOD, ROUTE, rh, rw } from '../utils/constants'
import { BottomSheetCmp, ButtonCmp, CenterCmp, FoodBoxCmp } from '../component'
import { IMAGE } from '../utils/constants/Image'
import { useDispatch, useSelector } from 'react-redux'
import { setFood } from '../redux/slices/homeSlice'
import { gStyles } from '../Style'

const FoodScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { food } = useSelector(state => state.home)
  const dispatch = useDispatch()


  const { searchKeyword } = useSelector(state => state.home)

  React.useEffect(() => {
    filterFoods()
  }, [searchKeyword])

  const filterFoods = () => {
    if (searchKeyword.length > 0) {
      let data = FOOD.filter((value, index) => {
        return value['title'].toLowerCase().includes(searchKeyword.toLowerCase()) | value.restaurant['restaurantName']?.toLowerCase().includes(searchKeyword.toLowerCase())
      })
      dispatch(setFood(data))
    } else {
      setFood(FOOD)
    }
  }


  return (


    <View style={{ backgroundColor: COLORS.WHITE }}>
      <CenterCmp style={{ paddingHorizontal: rw(5) }}>
        <FlatList
          data={food}
          renderItem={({ item }) => <FoodBoxCmp item={item} setIsVisible={setIsVisible} isVisible={isVisible} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: rw(0.2) }}
        />
      </CenterCmp>

      <BottomSheetCmp setIsVisible={setIsVisible} isVisible={isVisible}>
        <View style={{
          minHeight: rh(40),
          backgroundColor: COLORS.WHITE,
          paddingHorizontal: rw(7),
          borderTopLeftRadius: rw(5),
          borderTopRightRadius: rw(5),
          paddingTop: rw(10),
          alignItems: 'center',
        }}>
          <Image
            source={{ uri: IMAGE.FOODS.CHAINESE_WOK }}
            resizeMethod='auto'
            style={{
              height: rh(15),
              width: rw(30),
              borderRadius: rw(5),
            }} />

          <View
            className="flex-row justify-center items-center"
            style={{ backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), paddingVertical: rw(10) }}>
            <ButtonCmp title="Update" style={{ minWidth: rw(70), marginTop: rw(0) }} />
          </View>


        </View>
      </BottomSheetCmp>

    </View>
  )
}

export default FoodScreen

const styles = StyleSheet.create({})