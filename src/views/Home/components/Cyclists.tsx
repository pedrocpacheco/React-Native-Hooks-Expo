import React, {useEffect} from "react"
import { Text } from "react-native";

import { getCyclists } from "../../../services/getData";

export default function Cyclists(){
  useEffect(() => {
    const retorno = getCyclists();
  }, []);

  return <Text>Ciclistas</Text>
}