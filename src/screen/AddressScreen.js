import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BottomBtnCmp, BottomFullBtnCmp, ButtonCmp, CenterCmp, HeaderCmp, Wrapper } from '../component'
import { rh, rw } from '../utils/Dimension'
import { COLORS, FONT_FAMILY } from '../utils/constants'
import { IMAGE } from '../utils/constants/Image'
import { gStyles } from '../Style'
import { Entypo } from '../utils/icons/VectorIcon'

const AddressScreen = () => {
  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />

        <CenterCmp>
          <TouchableOpacity
            style={{
              minWidth: rw(90),
              paddingVertical: rw(5),
              paddingHorizontal: rw(3),
              borderRadius: rw(5),
              // borderColor: COLORS.GREY2,
              // borderWidth: rw(0.2),
              marginVertical: rw(5),
              elevation: 2,
              backgroundColor: COLORS.WHITE
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
            <View style={{ width: rw(65),marginTop : rw(3) }}>
              <Text style={gStyles.titleDescText}>67, azada nagar. mithagart road, mullund east, mumbai 400081</Text>
              <Text style={gStyles.titleDescText}>Phone: 95943713977</Text>
              <Text style={[gStyles.titleDescText, { fontFamily: FONT_FAMILY.OUTFIT.MEDIUM, color: COLORS.BLACK,marginTop : rw(3) }]}>Default Address</Text>

            </View>
          </TouchableOpacity>
        </CenterCmp>
      </Wrapper>

      <BottomFullBtnCmp  title="Add New Address"/>

    </>
  )
}

export default AddressScreen

const styles = StyleSheet.create({})