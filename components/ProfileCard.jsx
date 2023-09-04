import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";

const ProfileCard = ({
  firstName,
  lastName,
  age,
  isOpenToWork,
  onPressTitle,
  onPressLinks,
}) => {
  const call = () => {
    onPressTitle(" " + firstName);
  };
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image style={s.avatar} source={require("../assets/150.jpg")}></Image>
        </View>
        <View style={s.texts}>
          <TouchableOpacity onPress={call}>
            <Text style={s.name}>
              {firstName} {lastName}
            </Text>
          </TouchableOpacity>
          <Text>
            I am going to be Software developer. I am {age + " "}
            year's old.
          </Text>
          <Text
            style={{
              backgroundColor: isOpenToWork ? "green" : "red",
              color: "white",
            }}
          >
            {isOpenToWork ? "I am open to work" : "Not looking for a job"}
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity onPress={() => onPressLinks("twitter")}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            onPress={() => onPressLinks("linkdn")}
            name="linkedin-square"
            size={24}
            color="#0A66C2"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            onPress={() => onPressLinks("github")}
            name="github"
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;
