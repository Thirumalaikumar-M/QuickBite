import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";

const Services = () => {
  const services = [
    {
      id: "0",
      image:
        "https://img.freepik.com/free-vector/waiter-wearing-face-mask-serving_23-2148589074.jpg?w=740&t=st=1689176872~exp=1689177472~hmac=1262a1926d97a42047463cdab69ab61b5de3781973d1d346f5add7fa2cd43895",
      name: "Dine-In",
    },
    {
      id: "1",
      image:
        "https://img.freepik.com/free-vector/pizza-delivery-concept-illustration_114360-16772.jpg?w=740&t=st=1689176828~exp=1689177428~hmac=97b5b5928704870a79bc5b780cfbd33315c24ff9bd69a1dab08930fbf24fde01",
      name: "Delivery",
    },
    {
      id: "2",
      image:
        "https://img.freepik.com/free-vector/bartender-giving-glass-beer-male-client-drink-administrator-bar-counter-flat-vector-illustration-alcohol-beverages-service_74855-8237.jpg?w=900&t=st=1689177081~exp=1689177681~hmac=5229497be3c65ae2dd2b51b9dc0501dc0f92d5830486e93d8b9cda4b941ce573",
      name: "Bar",
    },
    {
      id: "3",
      image:
        "https://img.freepik.com/free-vector/night-date-concept-illustration_114360-5318.jpg?w=740&t=st=1689177018~exp=1689177618~hmac=5c69fa5cf8dd7ebeaae9b3bd6e0b3a49d662ee25311d428bf30180b84cd3ffc8",
      name: "Private",
    },
    {
      id: "4",
      image:
        "https://img.freepik.com/free-vector/awards-concept-illustration_114360-2441.jpg?w=740&t=st=1689177186~exp=1689177786~hmac=2619bbdea0af1a1a1862a033032028345b18fb190f1ceb6162f85dbf6a2d30c9",
      name: "Events",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }}>
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 7,
            }}
            key={index}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
            />

            <Text style={{ textAlign: "center", marginTop: 10 }}>
              {service.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
