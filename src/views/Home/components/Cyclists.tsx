import React, { useEffect, useState } from "react"
import { FlatList, Text, StyleSheet } from "react-native";

import { getCyclists } from "../../../services/getData";

export default function Cyclists(){
  const [tytle, setTytle] = useState(""); // ? Inicial
  const [list, setList] = useState([]);

  useEffect(() => {
    const retorno = getCyclists();
    setTytle(retorno.tytle); // ! Seta aqui
    setList(retorno.list)
    console.log(retorno);
    
  }, []);

  const ListHeader = () => {
    return <Text>{ tytle } </Text>
  }

  return <FlatList
          data={list}
          renderItem={({ item: { name } }) => <Text>{name}</Text>}
          ListHeaderComponent={ ListHeader } 
          />
}

