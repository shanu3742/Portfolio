import PalmTreeInstance from '../Tree/PalmTrees/PalmTreesInstance';
import { NormalTreeInstance } from '../Tree/NormalTree/NormalTreeInstace';

const Garden = () => {
    return (
        <>
           <PalmTreeInstance scaleIndex={16} />
           <NormalTreeInstance />
           
        </>
    )
}

export default Garden



