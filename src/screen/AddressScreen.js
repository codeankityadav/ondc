import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { BottomFullBtnCmp, BottomSheetCmp, ButtonCmp, CenterCmp, HeaderCmp, TextInputCmp, Wrapper } from '../component'
import { rh, rw } from '../utils/Dimension'
import { COLORS } from '../utils/constants'
import { gStyles } from '../Style'
import AddressBoxCmp from '../component/AddressBoxCmp'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../redux/slices/homeSlice'
import Lottie from 'lottie-react-native';

const AddressScreen = () => {
 
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({
    id: new Date().valueOf(),
    // id : id,
    name: "",
    full_address: "",
    pincode: "",
    isPrimary: false
  })

  const { address } = useSelector(state => state.home)

  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />
        {/* <BottomFullBtnCmp title="Add New Address" onPress={() => setIsVisible(!isVisible)} style={{ backgroundColor: COLORS.GREY3, elevation: 0 }} /> */}


        {/* <View style={{ paddingHorizontal: rw(15), marginTop: rw(5), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Ionicons name="add-circle" size={rw(15)} color={COLORS.GREEN} style={{ alignItems: 'flex-end' }} onPress={() => setIsVisible(!isVisible)} />
        </View> */}

        {
          address.length > 0 ?
            <>
              <CenterCmp flexDirection='column'>
                <FlatList
                  data={address}
                  renderItem={({ item }) => <AddressBoxCmp item={item} setIsVisible={setIsVisible} isVisible={isVisible} />}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={{ padding: rw(0.2) }}
                />

              </CenterCmp>
            </>
            :
            <>
              <View style={gStyles.containerCenter}>
                <Lottie source={require('../assets/lottie/not-available.json')} style={{ width: rw(90), height: rw(90) }} duration={5000} autoPlay loop />
                <Text style={[gStyles.titleText, { paddingTop: rw(5), textAlign: 'center', color: COLORS.LIGHT_BLUE }]}>Please Add New Address !</Text>
              </View>
            </>
        }



        {/* <View style={{ paddingHorizontal: rw(7) }}>
          <ButtonCmp title="Add" style={{ minWidth: rw(70), marginTop: rw(5), backgroundColor: COLORS.GREEN }} onPress={() => setIsVisible(!isVisible)} />
        </View> */}
      </Wrapper>

      <BottomFullBtnCmp title="Add New Address" onPress={() => setIsVisible(!isVisible)} />
      {/* {prevRoute.name === 'Cart' &&
        <BottomFullBtnCmp title="Place Order" onPress={() => navigation.navigate(ROUTE.ORDER_REVIEW)} />
      } */}


      <BottomSheetCmp setIsVisible={setIsVisible} isVisible={isVisible}>
        <View style={{ minHeight: rh(40), backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), paddingTop: rh(3), borderTopLeftRadius: rw(5), borderTopRightRadius: rw(5) }}>
          <View style={styles.viewStyle} >
            <Text style={[gStyles.titleDescText]}>Piconde</Text>
            <TextInputCmp
              keyboardType="numeric"
              maxLength={6}
              style={styles.inputStyle}
              onChangeText={(text) => setFormValues({ ...formValues, pincode: text, id: new Date().valueOf() })} />
          </View>
          <View>
            <View style={styles.viewStyle} >
              <Text style={[gStyles.titleDescText]}>Name</Text>
              <TextInputCmp
                style={styles.inputStyle}
                onChangeText={(text) => setFormValues({ ...formValues, name: text })} />
            </View>
          </View>
          <View>
            <View style={styles.viewStyle} >
              <Text style={[gStyles.titleDescText]}>Full Address</Text>
              <TextInputCmp
                style={styles.inputStyle}
                onChangeText={(text) => setFormValues({ ...formValues, full_address: text })} />
            </View>
          </View>

          <View
            className="flex-row justify-center items-center"
            style={{ backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), paddingVertical: rw(10) }}>
            <ButtonCmp
              title="Submit"
              style={{ minWidth: rw(85), marginTop: rw(0), backgroundColor: COLORS.GREEN }}
              onPress={() => {
                if (formValues.pincode.length > 0 && formValues.name.length > 0 && formValues.full_address.length > 0) {
                  dispatch(setAddress(formValues))
                  setFormValues({
                    id: new Date().valueOf(),
                    name: "",
                    full_address: "",
                    pincode: "",
                    isPrimary: false
                  })
                  setIsVisible(false)
                } else {
                  alert("Please fill all fields.")
                }

              }} />
          </View>


        </View>
      </BottomSheetCmp>

    </>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
  inputStyle: { marginTop: 0, borderColor: COLORS.GREY2 },
  viewStyle: { minWidth: rw(40), marginTop: rh(2) }
})