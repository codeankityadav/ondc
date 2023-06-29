import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BottomBtnCmp, BottomFullBtnCmp, BottomSheetCmp, ButtonCmp, CenterCmp, HeaderCmp, TextInputCmp, Wrapper } from '../component'
import { rh, rw } from '../utils/Dimension'
import { COLORS, FONT_FAMILY } from '../utils/constants'
import { IMAGE } from '../utils/constants/Image'
import { gStyles } from '../Style'
import { Entypo } from '../utils/icons/VectorIcon'

const AddressScreen = () => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />

        <CenterCmp>
          <TouchableOpacity
            onPress={() => setIsVisible(!isVisible)}
            style={{
              minWidth: rw(90),
              paddingVertical: rw(5),
              paddingHorizontal: rw(3),
              borderRadius: rw(5),
              // borderColor: COLORS.GREY2,
              // borderWidth: rw(0.2),
              marginVertical: rw(5),
              elevation: 2,
              backgroundColor: COLORS.WHITE,
            }}
          >
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Text style={gStyles.titleText}>Ankit Yadav</Text>
                <View>
                  <Text style={[gStyles.titleDescText,
                  {
                    backgroundColor: COLORS.LIGHT_BLUE,
                    paddingVertical: rw(0.5),
                    color: COLORS.WHITE,
                    paddingHorizontal: rw(3),
                    borderRadius: rw(2),
                    marginLeft: rw(3)
                  }
                  ]}>Home</Text>
                </View>
              </View>
              <Entypo name="dots-three-vertical" size={rw(4)} color={COLORS.BLACK} />
            </View>
            <View style={{ width: rw(65), marginTop: rw(3) }}>
              <Text style={gStyles.titleDescText}>67, azada nagar. mithagart road, mullund east, mumbai 400081</Text>
              <Text style={gStyles.titleDescText}>Phone: 95943713977</Text>
              <Text style={[gStyles.titleDescText, { fontFamily: FONT_FAMILY.OUTFIT.MEDIUM, color: COLORS.BLACK, marginTop: rw(3) }]}>Default Address</Text>

            </View>
          </TouchableOpacity>
        </CenterCmp>
      </Wrapper>

      <BottomFullBtnCmp title="Add New Address" onPress={() => setIsVisible(!isVisible)} />


      <BottomSheetCmp setIsVisible={setIsVisible} isVisible={isVisible}>
        <View style={{ minHeight: rh(40), backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), borderTopLeftRadius: rw(5), borderTopRightRadius: rw(5) }}>
          <View style={{ minWidth: rw(80), marginTop: rh(5) }} >
            <Text style={[gStyles.titleDescText]}>Name</Text>
            <TextInputCmp style={{ marginTop: 0, borderColor: COLORS.GREY2 }} />
          </View>

          <View className="flex-row justify-between items-center" >
            <View style={{ minWidth: rw(40), marginTop: rh(1) }} >
              <Text style={[gStyles.titleDescText]}>Room no.</Text>
              <TextInputCmp style={{ marginTop: 0, borderColor: COLORS.GREY2 }} />
            </View>
            <View style={{ minWidth: rw(40), marginTop: rh(1) }} >
              <Text style={[gStyles.titleDescText]}>Area/Building</Text>
              <TextInputCmp style={{ marginTop: 0, borderColor: COLORS.GREY2 }} />
            </View>
          </View>

          <View className="flex-row justify-between items-center" >
            <View style={{ minWidth: rw(40), marginTop: rh(1) }} >
              <Text style={[gStyles.titleDescText]}>Town</Text>
              <TextInputCmp style={{ marginTop: 0, borderColor: COLORS.GREY2 }} />
            </View>
            <View style={{ minWidth: rw(40), marginTop: rh(1) }} >
              <Text style={[gStyles.titleDescText]}>city</Text>
              <TextInputCmp style={{ marginTop: 0, borderColor: COLORS.GREY2 }} />
            </View>
          </View>

          <View className="flex-row justify-between items-center" >
            <View style={{ minWidth: rw(40), marginTop: rh(1) }} >
              <Text style={[gStyles.titleDescText]}>State</Text>
              <TextInputCmp style={{ marginTop: 0, borderColor: COLORS.GREY2 }} />
            </View>
            <View style={{ minWidth: rw(40), marginTop: rh(1) }} >
              <Text style={[gStyles.titleDescText]}>Pincode</Text>
              <TextInputCmp style={{ marginTop: 0, borderColor: COLORS.GREY2 }} />
            </View>
          </View>

          <View
            className="flex-row justify-center items-center"
            style={{ backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), paddingVertical: rw(10) }}>
            <ButtonCmp title="Update" style={{ minWidth: rw(70), marginTop: rw(0) }} />
          </View>


        </View>
      </BottomSheetCmp>

    </>
  )
}

export default AddressScreen

const styles = StyleSheet.create({})