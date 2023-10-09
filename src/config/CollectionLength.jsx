import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../config/firebase'

// * Func to Get Collection Length
function useCollectionLength(collectionName) {
  const [length, setLength] = useState(null);

  useEffect(() => {
    async function fetchCollectionLength() {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const numberOfRecords = querySnapshot.size;
        setLength(numberOfRecords);
      } catch (error) {
        console.error("Error fetching collection length:", error);
        setLength(-1); // Set -1 to indicate an error
      }
    }

    fetchCollectionLength();
  }, [collectionName]);

  return length;
}

export { useCollectionLength };