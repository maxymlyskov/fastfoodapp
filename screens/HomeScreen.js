import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import AppText from "../components/AppText";
import Card from "../components/Card";
import FilterCard from "../components/FilterCard";
import Screen from "../components/Screen";
import SearchHeader from "../components/SearchHeader";
import colors from "../config/colors";

function HomeScreen({ navigation }) {
  const data = [
    {
      id: 1,
      image: require("../assets/bigburger.jpg"),
      title: "Big Burger",
      subTitle: "Two veal cutlets",
      price: "$9.99",
      description:
        '"Juicy, big, loaded with toppings of my choice."\n"High quality beef medium to well with cheese and bacon on a multigrain bun."\n"A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"',
    },
    {
      id: 2,
      image: require("../assets/california.jpg"),
      title: "California",
      subTitle: "Two large veal",
      price: "$11.99",
      description:
        '"Juicy, big, loaded with toppings of my choice."\n"High quality beef medium to well with cheese and bacon on a multigrain bun."\n"A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"',
    },
    {
      id: 3,
      image: require("../assets/california.jpg"),
      title: "California",
      subTitle: "Two large veal",
      price: "$11.99",
      description:
        '"Juicy, big, loaded with toppings of my choice."\n"High quality beef medium to well with cheese and bacon on a multigrain bun."\n"A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"',
    },
    {
      id: 4,
      image: require("../assets/california.jpg"),
      title: "California",
      subTitle: "Two large veal",
      price: "$11.99",
      description:
        '"Juicy, big, loaded with toppings of my choice."\n"High quality beef medium to well with cheese and bacon on a multigrain bun."\n"A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"',
    },
  ];
  const filterData = [
    {
      title: "Burgers",
      id: 1,
      backgroundColor: colors.black,
      color: colors.white,
    },
    {
      title: "Pizza",
      id: 2,
      backgroundColor: colors.whiteGrey,
      color: colors.black,
    },
    {
      title: "Noodles",
      id: 3,
      backgroundColor: colors.whiteGrey,
      color: colors.black,
    },
    {
      title: "Salads",
      id: 4,
      backgroundColor: colors.whiteGrey,
      color: colors.black,
    },
  ];

  return (
    <Screen style={styles.container}>
      <SearchHeader />
      <View style={styles.popular}>
        <AppText style={styles.textMenu}>Food Menu</AppText>
      </View>
      <FlatList
        data={filterData}
        keyExtractor={(filter) => filter.title}
        horizontal
        style={{
          flex: 1,
          height: 100,
          marginBottom: -(Dimensions.get("window").height / 2.5),
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ padding: 5 }}>
            <FilterCard
              title={item.title}
              backgroundColor={item.backgroundColor}
              color={item.color}
            />
          </View>
        )}
      />

      <View style={styles.popular}>
        <AppText style={styles.text}>Popular</AppText>
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={styles.flatlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.cardContainer,
              index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 },
            ]}
          >
            <Card
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              price={item.price}
              onPress={() => navigation.navigate("Details", item)}
              onPressPlus={() => navigation.navigate("PlusDetails", item)}
              onPressLike={() => console.log("like")}
            />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
  },
  containerModal: {
    backgroundColor: colors.whiteGrey,
    elevation: 5,
    paddingVertical: 70,
    paddingHorizontal: 20,
    borderRadius: 15,
    flex: 1,
  },
  filterContainer: {
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    overflow: "hidden",
    flex: 1,
  },
  cardContainer: {
    flex: 0.5,
    paddingBottom: 10,
  },
  flatlist: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
  },
  textMenu: {
    fontWeight: "bold",
    fontSize: 35,
  },
  popular: {
    marginVertical: 20,
  },
  containerFilter: {
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: 100,
    height: 20,
    borderRadius: 20,
  },
});

export default HomeScreen;
