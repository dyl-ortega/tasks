import React, { useState } from "react";
import { Button } from "react-bootstrap";

export enum Holiday {
    CHRISTMAS = "🎄",
    LUNAR_NEW_YEAR = "🐉",
    ST_PATRICKS_DAY = "🍀",
    EASTER = "🐰",
    THANKSGIVING = "🦃",
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.CHRISTMAS);

    function alphabeticalOrder(): void {
         if (holiday === Holiday.CHRISTMAS) {
             setHoliday(Holiday.EASTER);
         } else if (holiday === Holiday.EASTER) {
             setHoliday(Holiday.LUNAR_NEW_YEAR);
         } else if (holiday === Holiday.LUNAR_NEW_YEAR) {
             setHoliday(Holiday.ST_PATRICKS_DAY);
         } else if (holiday === Holiday.ST_PATRICKS_DAY) {
             setHoliday(Holiday.THANKSGIVING);
         } else {
             setHoliday(Holiday.CHRISTMAS);
         }
    }

     function nextHoliday(): void {
         if (holiday === Holiday.LUNAR_NEW_YEAR) {
             setHoliday(Holiday.ST_PATRICKS_DAY);
         } else if (holiday === Holiday.ST_PATRICKS_DAY) {
             setHoliday(Holiday.EASTER);
         } else if (holiday === Holiday.EASTER) {
             setHoliday(Holiday.THANKSGIVING);
         } else if (holiday === Holiday.THANKSGIVING) {
             setHoliday(Holiday.CHRISTMAS);
         } else {
             setHoliday(Holiday.LUNAR_NEW_YEAR);
         }
     }

     return (
         <div>
             <div>Holiday: {holiday}</div>
             <Button onClick={alphabeticalOrder}>Advance by Alphabet</Button>
             <Button onClick={nextHoliday}>Advance by Year</Button>
         </div>
     );
}
