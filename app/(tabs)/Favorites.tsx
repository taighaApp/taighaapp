import HomeSearchCardViews from "@/components/HomeSearch/HomeSearchCardViews";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";




function FavoritesScreen({route}:any) {
    console.log(route);
    
    const [checked, setChecked] = useState('option1'); // Default selected value
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  
    const handlePress =()=>{
      bottomSheetModalRef.current?.present();
    }
    return (
      
      <HomeSearchCardViews route={route}/>
    );
  }

  export default FavoritesScreen;