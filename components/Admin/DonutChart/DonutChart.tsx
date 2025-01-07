import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";

const DonutChart = () => {
  const pieData = [
    {
      value: 36,
      color: "#25D2BD",
      // gradientCenterColor: '#006DFF',
      focused: true,
    },
    {
      value: 40,
      color: "#EDF9F8",
      gradientCenterColor: "#EDF9F8",
    },
    // {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    // {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
  ];

  return (
    <View style={styles.piechartcontainer}>
      <View style={styles.cardContainer}>
        <PieChart
          data={pieData}
          donut
          // initialAngle={50}
          // showGradient
          sectionAutoFocus
          radius={60}
          innerRadius={26}
          innerCircleColor={"#ffffff"}
          centerLabelComponent={() => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#25D2BD",
                    fontWeight: "bold",
                  }}
                >
                  36%
                </Text>
              </View>
            );
          }}
        />
        {/* The extra circle */}
        <View
          style={{
            position: "absolute",
            width: 70,
            height: 70,
            borderRadius: 50,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            justifyContent: "center",
            alignItems: "center",
            top: 38,
            left: "auto",
            right: 50,
          }}
        ></View>
        <Text style={styles.subtitle}>Task Completed</Text>
        <Text style={styles.taskCount}>150</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.cardContainer}>
          <Image
            source={require("../../../assets/images/dashboard/customer_service.png")}
            style={styles.customerService}
          />
          <View>
            {/* <Text style={styles.customerContent}>Open New</Text>
                <Text style={styles.customerContentone}>Support Ticket</Text> */}
            <Text style={styles.customertext}>Open New</Text>
            <Text style={styles.taskticket}>Support Ticket</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  piechartcontainer: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    width: 170,
    height: 205,
    elevation: 1, // Add subtle shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  subtitle: {
    fontSize: 14,
    color: "#8c8c8c",
    marginTop: 8,
    textAlign: "center",
    fontFamily: "Rubik",
  },
  taskCount: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: "#000",
    marginTop: 4,
    textAlign: "center",
    fontFamily: "rubik",
  },
  customerService: {
    width: 110,
    height: 110,
    marginBottom: 12,
    justifyContent: "center",
  },
  customertext: {
    fontSize: 12,
    color: "#4C4C4C",
    marginTop: 8,
    textAlign: "center",
    fontFamily: "rubikBold",
  },
  taskticket: {
    fontSize: 12,
    color: "#4C4C4C",
    marginTop: 4,
    textAlign: "center",
    fontFamily: "rubikBold",
  },
});

export default DonutChart;
