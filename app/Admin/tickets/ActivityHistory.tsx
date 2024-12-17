import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import CustomBottomsheetModel from '@/components/common/CustomBottomsheetModel'
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export default function ActivityHistory() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <View>
       {/* datails component */}
     <CustomBottomsheetModel
     snapPoints={['80%', '100%','150%']} 
     initialIndex={0}
     bottomSheetRef={bottomSheetModalRef}
     showHandleIndicator={false}
   >
     {/* component */}
     <View>
      <Text>
            Activity History
      </Text>
     </View>
   </CustomBottomsheetModel>
    </View>
  )
}