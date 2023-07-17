import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-offer-design-template-57d3aa3a2668c13ed8a3941ca40c8a9c_screen.jpg?ts=1593326849",
    "https://image.freepik.com/free-vector/food-delivery-banner-design-flat-design-online-order_42237-696.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
