import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import { useRecoilValueLoadable } from 'recoil';
import { todosSelector } from '../recoil'; // Đảm bảo đường dẫn đúng

export default function Screen2({ route, navigation }) {
  const { nameUser } = route.params;
  const [textSearch, setTextSearch] = useState("");

  // Sử dụng useRecoilValueLoadable để gọi selector
  const todosLoadable = useRecoilValueLoadable(todosSelector);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.renderView}>
        <AntDesign name="checksquareo" size={30} style={styles.checkRender} />
        <Text style={styles.textRender}>{item.work}</Text>
        <Pressable
          style={styles.editRender}
          onPress={() => {
            navigation.navigate("Screen3", {
              idItem: item.id,
              handle: "EDIT YOUR JOB",
              nameUser: nameUser,
            });
          }}
        >
          <AntDesign name="edit" size={30} color={"green"} />
        </Pressable>
        <Pressable
          style={styles.deleteRender}
          onPress={() => {
            // Xóa todo logic
          }}
        >
          <AntDesign name="delete" size={30} color={"red"} />
        </Pressable>
      </View>
    );
  };

  // Render nội dung dựa trên trạng thái loadable
  const renderTodos = () => {
    switch (todosLoadable.state) {
      case 'loading':
        return <Text>Loading...</Text>; // Hiển thị thông báo loading
      case 'hasError':
        return <Text>Error loading todos!</Text>; // Hiển thị thông báo lỗi
      case 'hasValue':
        const dataTodo = todosLoadable.contents;
        return (
          <FlatList
            data={dataTodo.filter(todo => 
              todo.work.toLowerCase().includes(textSearch.toLowerCase())
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={
              <View style={styles.footer}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Screen3", {
                      handle: "ADD YOUR JOB",
                      nameUser: nameUser,
                      data: dataTodo,
                    });
                  }}
                >
                  <AntDesign name="pluscircle" size={80} color={"#00BDD6"} />
                </Pressable>
              </View>
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("Screen1")}>
          <AntDesign name="arrowleft" size={30} />
        </Pressable>
        <Image source={require("../assets/avatar.png")} style={styles.avatar} />
        <View style={styles.viewTextInfor}>
          <Text style={styles.textInforBold}>Hi, {nameUser}</Text>
          <Text style={styles.textInfor}>Have a great day ahead</Text>
        </View>
      </View>
      <View style={styles.viewSearch}>
        <AntDesign name="search1" size={25} style={styles.searchIcon} />
        <TextInput
          value={textSearch}
          onChangeText={setTextSearch}
          placeholder="Search"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.content}>
        {renderTodos()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  renderView: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    height: 60,
    backgroundColor: "#c4c4c4",
    marginBottom: 20,
  },
  checkRender: {
    width: "10%",
    color: "green",
    marginLeft: 10,
  },
  textRender: {
    width: "65%",
    fontSize: 20,
    fontWeight: "bold",
  },
  editRender: {
    width: "10%",
  },
  deleteRender: {
    width: "10%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    paddingTop: 50,
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
  viewTextInfor: {
    justifyContent: "center",
  },
  avatar: {
    marginLeft: "28%",
    marginRight: "5%",
  },
  textInforBold: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textInfor: {
    fontSize: 18,
    color: "#c4c4c4",
    fontWeight: "bold",
  },
  viewSearch: {
    width: "90%",
    height: 50,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#c4c4c4",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginLeft: 10,
    width: "10%",
  },
  searchInput: {
    fontSize: 18,
    width: "90%",
  },
  content: {
    width: "90%",
    flex: 4,
    marginTop: 30,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
