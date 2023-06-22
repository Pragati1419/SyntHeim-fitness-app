import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Fitness = () => {
  return (
    <Pressable style={styles.fitness}>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.activityStatus}>
        <Text style={[styles.activityStatus1, styles.waterFlexBox]}>
          Activity Status
        </Text>
      </View>
      <Image
        style={styles.fitnessChild}
        resizeMode="cover"
        source={require("../assets/ellipse-119.png")}
      />
      <View style={[styles.status, styles.fitnessPosition]}>
        <View style={[styles.heartRateBg, styles.textChildPosition]}>
          <LinearGradient
            style={[styles.heartRateBgChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          />
        </View>
        <View style={styles.heartRateText}>
          <Text style={[styles.heartRate, styles.lTypo]}>Heart Rate</Text>
          <Text style={[styles.bpm, styles.lLayout]}>78 BPM</Text>
        </View>
        <Image
          style={[styles.heartRateGraphIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/heartrategraph.png")}
        />
        <View style={styles.heartRateModal}>
          <View style={styles.heartRateModalBg}>
            <Image
              style={[styles.heartRateModalBgChild, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/polygon-1.png")}
            />
            <LinearGradient
              style={styles.heartRateModalBgItemShadowBox}
              locations={[0, 1]}
              colors={["#c58bf2", "#eea4ce"]}
            />
          </View>
          <View style={[styles.heartRateText1, styles.heartPosition]}>
            <Text style={[styles.minsAgo, styles.minsAgoClr]}>3mins ago</Text>
          </View>
          <Image
            style={[styles.heartRateModalDotIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/heartratemodaldot.png")}
          />
        </View>
      </View>
      <View style={[styles.fitnessItem, styles.fitnessPosition]} />
      <Image
        style={[styles.fitnessInner, styles.fitnessPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-5703.png")}
      />
      <View style={[styles.feelings, styles.anxiousLayout]}>
        <View style={[styles.calmMood, styles.moodPosition]}>
          <Text style={[styles.calm, styles.calmTypo]}>Calm</Text>
          <Image
            style={[styles.calmIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/calm--icon.png")}
          />
        </View>
        <View style={[styles.relaxMood, styles.relaxMoodLayout]}>
          <Text style={[styles.relaxed, styles.calmTypo]}>Relaxed</Text>
          <Image
            style={[styles.relaxIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/relax.png")}
          />
        </View>
        <View style={[styles.focusMood, styles.moodPosition]}>
          <Text style={[styles.focused, styles.calmTypo]}>Focused</Text>
          <Image
            style={[styles.focusIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/focus.png")}
          />
        </View>
        <View style={[styles.anxious, styles.anxiousLayout]}>
          <Text style={[styles.anxious1, styles.calmTypo]}>Anxious</Text>
          <View style={[styles.anxious2, styles.textChildPosition]}>
            <View style={[styles.anxiousChild, styles.bgItemBg]} />
          </View>
        </View>
      </View>
      <Text style={[styles.subtitle, styles.calmTypo]}>
        How are you feeling today ?
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-5691.png")}
      />
      <View style={styles.status1}>
        <View style={[styles.heartRateBg, styles.textChildPosition]}>
          <LinearGradient
            style={[styles.heartRateBgItem, styles.childPosition]}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          />
        </View>
        <View style={[styles.heartRateText2, styles.textPosition]}>
          <Text style={[styles.heartRate, styles.lTypo]}>Heart Rate</Text>
          <Text style={[styles.bpm1, styles.bpm1Position]}>78 BPM</Text>
        </View>
        <Image
          style={[styles.heartRateGraphIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/heartrategraph1.png")}
        />
        <View style={styles.heartRateModal}>
          <View style={styles.heartRateModalBg}>
            <Image
              style={[styles.heartRateModalBgChild, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/polygon-11.png")}
            />
            <LinearGradient
              style={styles.heartRateModalBgItemShadowBox}
              locations={[0, 1]}
              colors={["#c58bf2", "#eea4ce"]}
            />
          </View>
          <View style={[styles.heartRateText3, styles.heartPosition]}>
            <Text style={[styles.minsAgo, styles.minsAgoClr]}>3mins ago</Text>
          </View>
          <Image
            style={[styles.heartRateModalDotIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/heartratemodaldot1.png")}
          />
        </View>
      </View>
      <View style={styles.banner}>
        <View style={[styles.heartRateBg, styles.textChildPosition]}>
          <LinearGradient
            style={[styles.bgChild, styles.childPosition]}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          />
        </View>
        <View style={styles.textParent}>
          <View style={styles.text}>
            <Text style={[styles.todaysTarget, styles.calmTypo]}>
              Today’s Target
            </Text>
          </View>
          <Image
            style={[styles.buttonIcon, styles.textChildPosition]}
            resizeMode="cover"
            source={require("../assets/button.png")}
          />
        </View>
        <View style={[styles.target1, styles.targetPosition]}>
          <View style={[styles.heartRateBg, styles.textChildPosition]}>
            <View style={[styles.bgItem, styles.bgItemBg]} />
          </View>
          <View style={[styles.targetContent, styles.targetContentPosition]}>
            <View style={[styles.text1, styles.textChildPosition]}>
              <Text style={[styles.l, styles.lLayout]}>8L</Text>
              <Text style={[styles.waterIntake, styles.waterFlexBox]}>
                Water Intake
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[styles.glass1Icon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/glass-1.png")}
            />
          </View>
        </View>
        <View style={[styles.target2, styles.targetPosition]}>
          <View style={[styles.heartRateBg, styles.textChildPosition]}>
            <View style={[styles.bgItem, styles.bgItemBg]} />
          </View>
          <View style={[styles.targetContent1, styles.targetContentPosition]}>
            <View style={[styles.text2, styles.textChildPosition]}>
              <Text style={[styles.l, styles.lLayout]}>2400</Text>
              <Text style={[styles.waterIntake, styles.waterFlexBox]}>
                Foot Steps
              </Text>
            </View>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
            <Image
              style={[styles.footprint1Icon, styles.fitnessPosition]}
              resizeMode="cover"
              source={require("../assets/footprint-1.png")}
            />
            <Image
              style={[styles.boots1Icon, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/boots-1.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame-1979.png")}
      />
      <View style={styles.status2}>
        <View style={[styles.heartRateBg, styles.textChildPosition]}>
          <LinearGradient
            style={styles.waterIntakeBgChild}
            locations={[0, 1]}
            colors={["rgba(146, 163, 253, 0.21)", "rgba(157, 206, 255, 0.12)"]}
          />
        </View>
        <View style={[styles.waterIntakeGraph, styles.sleepPosition]}>
          <View
            style={[styles.waterIntakeGraphChild, styles.textChildPosition]}
          />
          <LinearGradient
            style={styles.waterIntakeGraphItem}
            locations={[0, 1]}
            colors={["#3e0581", "#9dceff"]}
          />
        </View>
        <View style={[styles.waterIntakeText, styles.waterIntakeTextPosition]}>
          <Text style={[styles.waterIntake1, styles.lTypo]}>Water Intake</Text>
          <Text style={[styles.bpm1, styles.bpm1Position]}>4 Liters</Text>
        </View>
        <View style={[styles.realTimeUpdates, styles.waterIntakeTextPosition]}>
          <View style={[styles.heartRateBg, styles.textChildPosition]}>
            <Text style={[styles.am8am, styles.mlLayout]}>6am - 8am</Text>
            <Text style={[styles.ml, styles.mlLayout]}>600ml</Text>
            <Text style={[styles.am11am, styles.mlLayout]}>9am - 11am</Text>
            <Text style={[styles.ml1, styles.mlLayout]}>500ml</Text>
            <Text style={[styles.realTimeUpdates1, styles.minsAgoPosition]}>
              Real time updates
            </Text>
            <Text style={[styles.am2pm, styles.mlLayout]}>11am - 2pm</Text>
            <Text style={[styles.ml2, styles.mlLayout]}>1000ml</Text>
            <Text style={[styles.pm4pm, styles.mlLayout]}>2pm - 4pm</Text>
            <Text style={[styles.ml3, styles.mlLayout]}>700ml</Text>
            <Text style={[styles.pmNow, styles.mlLayout]}>4pm - now</Text>
            <Text style={[styles.ml4, styles.mlLayout]}>900ml</Text>
          </View>
          <Image
            style={[styles.realTimeUpdatesProgressIcon, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/realtimeupdatesprogress.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={[styles.status3, styles.statusPosition]}
        locations={[0, 1]}
        colors={["rgba(146, 163, 253, 0.21)", "rgba(157, 206, 255, 0.12)"]}
      >
        <View style={[styles.heartRateBg, styles.textChildPosition]}>
          <View style={styles.childShadowBox} />
        </View>
        <View style={[styles.sleepText, styles.sleepPosition]}>
          <Text style={[styles.waterIntake1, styles.lTypo]}>Sleep</Text>
          <Text style={styles.bpm1Position}>
            <Text style={styles.text4}>8</Text>
            <Text style={styles.h}>h</Text>
            <Text style={styles.text4}> 20</Text>
            <Text style={styles.h}>m</Text>
          </Text>
        </View>
        <Image
          style={[styles.sleepGraphIcon, styles.sleepPosition]}
          resizeMode="cover"
          source={require("../assets/sleepgraph.png")}
        />
      </LinearGradient>
      <View style={[styles.status4, styles.statusPosition]}>
        <View style={[styles.heartRateBg, styles.textChildPosition]}>
          <LinearGradient
            style={[styles.caloriesBgChild, styles.childShadowBox]}
            locations={[0, 1]}
            colors={["rgba(146, 163, 253, 0.21)", "rgba(157, 206, 255, 0.12)"]}
          />
        </View>
        <View style={[styles.caloriesText, styles.sleepPosition]}>
          <Text style={[styles.waterIntake1, styles.lTypo]}>Calories</Text>
          <Text style={[styles.bpm1, styles.bpm1Position]}>760 kCal</Text>
        </View>
        <View style={styles.caloriesPie}>
          <Image
            style={[styles.caloriesPieEllipseIcon, styles.textChildPosition]}
            resizeMode="cover"
            source={require("../assets/caloriespieellipse.png")}
          />
          <View style={styles.caloriesPieText}>
            <Image
              style={[styles.caloriesPieTextChild, styles.iconChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-112.png")}
            />
            <Text style={[styles.kcalLeft, styles.mlLayout]}>230kCal left</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.ellipseIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.header}>
        <View style={[styles.titleHome, styles.relaxMoodLayout]}>
          <Text style={[styles.welcomeBack, styles.aishaSinhaTypo]}>
            Welcome Back,
          </Text>
          <Text style={[styles.aishaSinha, styles.aishaSinhaTypo]}>
            Aisha Sinha
          </Text>
        </View>
        <Image
          style={styles.notificationIcon}
          resizeMode="cover"
          source={require("../assets/notification.png")}
        />
        <View style={styles.bishopWindow} />
      </View>
      <View style={styles.shoppingBag} />
      <View style={styles.topbar}>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.text6, styles.waterFlexBox]}>16:06</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  waterFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  fitnessPosition: {
    display: "none",
    position: "absolute",
  },
  textChildPosition: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  childPosition: {
    opacity: 0.2,
    position: "absolute",
  },
  lTypo: {
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  lLayout: {
    lineHeight: 21,
    fontSize: FontSize.textMediumTextSemiBold_size,
    left: "0%",
  },
  heartPosition: {
    left: "13.7%",
    top: "12.5%",
    position: "absolute",
  },
  minsAgoClr: {
    color: Color.whiteColor,
    fontFamily: FontFamily.textCaptionRegular,
  },
  anxiousLayout: {
    height: 72,
    position: "absolute",
  },
  moodPosition: {
    height: 55,
    top: 2,
    position: "absolute",
  },
  calmTypo: {
    fontFamily: FontFamily.alegreyaSansRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconPosition1: {
    bottom: "36.36%",
    height: "63.64%",
  },
  relaxMoodLayout: {
    height: 53,
    position: "absolute",
  },
  iconPosition: {
    left: "2.63%",
    right: "5.26%",
    width: "92.11%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bgItemBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  textPosition: {
    bottom: "57.33%",
    height: "29.33%",
    top: "13.33%",
  },
  bpm1Position: {
    top: "52.27%",
    lineHeight: 21,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.textMediumTextSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  targetPosition: {
    bottom: "14.39%",
    top: "42.45%",
    width: "41.27%",
    height: "43.17%",
    position: "absolute",
  },
  targetContentPosition: {
    bottom: "14.01%",
    top: "16.67%",
    height: "69.32%",
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "-154.85%",
    top: "177.92%",
    height: "76.94%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sleepPosition: {
    left: "13.33%",
    position: "absolute",
  },
  waterIntakeTextPosition: {
    left: "33.33%",
    position: "absolute",
  },
  mlLayout: {
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  minsAgoPosition: {
    lineHeight: 15,
    fontSize: FontSize.textCaptionRegular_size,
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  statusPosition: {
    left: 200,
    width: 150,
    height: 150,
    position: "absolute",
  },
  childShadowBox: {
    shadowColor: "rgba(29, 22, 23, 0.07)",
    elevation: 40,
    shadowRadius: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  aishaSinhaTypo: {
    fontFamily: FontFamily.titleH4Bold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "30.23%",
    width: "3.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.35%",
    width: "3%",
    top: "7.28%",
    right: "93.7%",
    bottom: "90.38%",
    left: "3.31%",
    position: "absolute",
  },
  activityStatus1: {
    fontSize: FontSize.textLargeTextSemiBold_size,
    lineHeight: 24,
    color: Color.black,
    fontFamily: FontFamily.textMediumTextSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  activityStatus: {
    top: 462,
    left: 25,
    width: 118,
    height: 24,
    position: "absolute",
  },
  fitnessChild: {
    left: 37,
    width: 71,
    height: 71,
    top: 39,
    position: "absolute",
  },
  heartRateBgChild: {
    backgroundColor: Color.blueTrans,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(149, 173, 254, 0.3)",
    opacity: 0.2,
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  heartRateBg: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  heartRate: {
    color: Color.blackColor,
    lineHeight: 18,
    fontSize: FontSize.textSmallTextMedium_size,
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  bpm: {
    top: "51.6%",
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.textMediumTextSemiBold,
    fontWeight: "600",
  },
  heartRateText: {
    height: "29.72%",
    width: "23.7%",
    right: "69.95%",
    bottom: "56.95%",
    left: "6.35%",
    top: "13.33%",
    position: "absolute",
  },
  heartRateGraphIcon: {
    height: "41%",
    top: "40%",
    bottom: "19%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  heartRateModalBgChild: {
    height: "33.33%",
    width: "13.7%",
    top: "100%",
    right: "28.77%",
    bottom: "-33.33%",
    left: "57.53%",
    borderRadius: Border.br_12xs,
    position: "absolute",
  },
  heartRateModalBgItemShadowBox: {
    shadowColor: "rgba(197, 139, 242, 0.3)",
    borderRadius: Border.br_31xl,
    bottom: "16.67%",
    height: "83.33%",
    backgroundColor: Color.blueTrans,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  heartRateModalBg: {
    height: "75%",
    bottom: "25%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  minsAgo: {
    lineHeight: 15,
    fontSize: FontSize.textCaptionRegular_size,
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  heartRateText1: {
    height: "38.53%",
    width: "84.7%",
    right: "1.6%",
    bottom: "48.97%",
  },
  heartRateModalDotIcon: {
    height: "12.5%",
    width: "6.85%",
    top: "87.5%",
    right: "46.58%",
    left: "46.58%",
    bottom: "0%",
    position: "absolute",
  },
  heartRateModal: {
    height: "26.67%",
    width: "23.17%",
    top: "22.67%",
    right: "26.35%",
    bottom: "50.67%",
    left: "50.48%",
    position: "absolute",
  },
  status: {
    top: 317,
    left: 15,
    width: 270,
    height: 146,
  },
  fitnessItem: {
    top: 537,
    left: 64,
    backgroundColor: "#e4e4eb",
    width: 167,
    height: 209,
    borderRadius: Border.br_xl,
  },
  fitnessInner: {
    top: 479,
    left: 59,
    width: 114,
    height: 130,
    borderRadius: Border.br_xl,
  },
  calm: {
    left: 5,
    top: 41,
    fontFamily: FontFamily.alegreyaSansRegular,
    fontSize: FontSize.textSmallTextMedium_size,
  },
  calmIcon: {
    left: "0%",
    right: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  calmMood: {
    width: 35,
    left: 0,
  },
  relaxed: {
    fontSize: FontSize.textSmallTextMedium_size,
    top: 39,
    left: 0,
  },
  relaxIcon: {
    height: "61.38%",
    bottom: "38.62%",
  },
  relaxMood: {
    top: 4,
    left: 86,
    width: 38,
  },
  focused: {
    top: 41,
    fontFamily: FontFamily.alegreyaSansRegular,
    fontSize: FontSize.textSmallTextMedium_size,
    left: 0,
  },
  focusIcon: {
    bottom: "36.36%",
    height: "63.64%",
  },
  focusMood: {
    left: 174,
    width: 38,
  },
  anxious1: {
    top: 43,
    fontSize: FontSize.textSmallTextMedium_size,
    left: 0,
  },
  anxiousChild: {
    top: -1,
    left: -4,
    width: 44,
    height: 42,
  },
  anxious2: {
    width: "97.44%",
    left: "2.56%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  anxious: {
    left: 262,
    width: 39,
    top: 0,
  },
  feelings: {
    top: 218,
    left: 41,
    width: 301,
  },
  subtitle: {
    top: 180,
    left: 24,
    fontSize: 22,
  },
  rectangleIcon: {
    height: "17.61%",
    width: "80.15%",
    top: "154.64%",
    right: "132.19%",
    bottom: "-72.24%",
    left: "-112.34%",
    borderRadius: Border.br_xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  heartRateBgItem: {
    backgroundColor: Color.blueTrans,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(149, 173, 254, 0.3)",
    opacity: 0.2,
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  bpm1: {
    fontSize: FontSize.textMediumTextSemiBold_size,
  },
  heartRateText2: {
    width: "20.32%",
    right: "73.33%",
    left: "6.35%",
    position: "absolute",
  },
  heartRateText3: {
    height: "37.5%",
    width: "72.6%",
    right: "13.7%",
    bottom: "50%",
  },
  status1: {
    top: 1101,
    left: -335,
    height: 150,
    width: 315,
    position: "absolute",
  },
  bgChild: {
    borderRadius: 22,
    backgroundColor: Color.blueTrans,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  todaysTarget: {
    lineHeight: 21,
    fontSize: FontSize.textMediumTextSemiBold_size,
    left: "0%",
    top: "0%",
  },
  text: {
    height: "90.09%",
    width: "28%",
    top: "8.33%",
    right: "72%",
    bottom: "1.57%",
    left: "0%",
    position: "absolute",
  },
  buttonIcon: {
    width: "8.73%",
    left: "91.27%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textParent: {
    height: "17.27%",
    width: "87.3%",
    top: "14.39%",
    bottom: "68.35%",
    right: "6.35%",
    left: "6.35%",
    position: "absolute",
  },
  bgItem: {
    borderRadius: Border.br_xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  l: {
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  waterIntake: {
    top: "50.49%",
    lineHeight: 20,
    color: Color.gray1,
    fontFamily: FontFamily.textCaptionRegular,
    fontSize: FontSize.textSmallTextMedium_size,
    left: "0%",
  },
  text1: {
    width: "70%",
    left: "30%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon1: {
    width: "29.09%",
    right: "48.18%",
    left: "22.73%",
  },
  glass1Icon: {
    height: "81.75%",
    width: "22.73%",
    top: "9.62%",
    right: "77.27%",
    bottom: "8.64%",
    left: "0%",
    position: "absolute",
  },
  targetContent: {
    width: "84.62%",
    right: "8.46%",
    left: "6.92%",
  },
  target1: {
    right: "52.38%",
    left: "6.35%",
  },
  text2: {
    width: "64.95%",
    left: "35.05%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon2: {
    width: "32.99%",
    right: "-108.25%",
    left: "175.26%",
  },
  footprint1Icon: {
    height: "67.32%",
    width: "28.87%",
    top: "182.72%",
    right: "-105.15%",
    bottom: "-150.04%",
    left: "176.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  boots1Icon: {
    height: "62.51%",
    width: "26.8%",
    top: "19.23%",
    right: "73.2%",
    bottom: "18.25%",
    left: "0%",
    position: "absolute",
  },
  targetContent1: {
    width: "74.62%",
    right: "19.23%",
    left: "6.15%",
  },
  target2: {
    left: "52.38%",
    right: "6.35%",
  },
  banner: {
    top: 324,
    height: 135,
    left: 35,
    width: 315,
    position: "absolute",
  },
  frameIcon: {
    top: 128,
    left: 122,
    width: 166,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  waterIntakeBgChild: {
    shadowColor: "rgba(29, 36, 42, 0.05)",
    elevation: 40,
    shadowRadius: 40,
    backgroundColor: Color.blueTrans,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  waterIntakeGraphChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: "#f7f8f8",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  waterIntakeGraphItem: {
    height: "54.91%",
    top: "45.09%",
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.blueTrans,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  waterIntakeGraph: {
    height: "87.3%",
    width: "13.33%",
    bottom: "6.35%",
    top: "6.35%",
    right: "73.33%",
  },
  waterIntake1: {
    lineHeight: 18,
    fontSize: FontSize.textSmallTextMedium_size,
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
    color: Color.black,
  },
  waterIntakeText: {
    height: "13.97%",
    width: "52%",
    right: "14.67%",
    bottom: "79.68%",
    top: "6.35%",
  },
  am8am: {
    top: "10.05%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionRegular,
    color: Color.black,
  },
  ml: {
    top: "17.59%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  am11am: {
    top: "29.15%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionRegular,
    color: Color.black,
  },
  ml1: {
    top: "36.68%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  realTimeUpdates1: {
    color: "#4b4748",
    fontFamily: FontFamily.textCaptionRegular,
  },
  am2pm: {
    top: "48.24%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionRegular,
    color: Color.black,
  },
  ml2: {
    top: "55.78%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  pm4pm: {
    top: "67.34%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionRegular,
    color: Color.black,
  },
  ml3: {
    top: "74.87%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  pmNow: {
    top: "86.43%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textCaptionRegular,
    color: Color.black,
  },
  ml4: {
    top: "93.97%",
    left: "19.57%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.textSmallTextMedium,
    fontWeight: "500",
  },
  realTimeUpdatesProgressIcon: {
    height: "82.91%",
    width: "21.74%",
    top: "11.56%",
    right: "83.7%",
    bottom: "5.53%",
    left: "-5.43%",
    position: "absolute",
  },
  realTimeUpdates: {
    height: "63.17%",
    width: "61.33%",
    top: "23.49%",
    right: "5.33%",
    bottom: "13.33%",
  },
  status2: {
    height: 315,
    width: 150,
    top: 503,
    left: 35,
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.textMediumTextSemiBold_size,
  },
  h: {
    fontSize: FontSize.textCaptionRegular_size,
  },
  sleepText: {
    width: "31.33%",
    right: "55.33%",
    bottom: "57.33%",
    height: "29.33%",
    top: "13.33%",
  },
  sleepGraphIcon: {
    height: "52%",
    width: "73.33%",
    top: "46%",
    right: "13.33%",
    bottom: "2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  status3: {
    top: 503,
    left: 200,
    backgroundColor: Color.blueTrans,
    borderRadius: Border.br_xl,
  },
  caloriesBgChild: {
    backgroundColor: Color.blueTrans,
  },
  caloriesText: {
    width: "41.33%",
    top: "16%",
    right: "45.33%",
    bottom: "54.67%",
    height: "29.33%",
    left: "13.33%",
  },
  caloriesPieEllipseIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  caloriesPieTextChild: {
    height: "191.67%",
    width: "191.67%",
    top: "-25%",
    right: "-45.83%",
    bottom: "-66.67%",
    left: "-45.83%",
    position: "absolute",
  },
  kcalLeft: {
    width: "75%",
    top: "25%",
    left: "12.5%",
    textAlign: "center",
    color: Color.whiteColor,
    fontFamily: FontFamily.textCaptionRegular,
  },
  caloriesPieText: {
    height: "72.73%",
    width: "72.73%",
    top: "13.64%",
    right: "13.64%",
    bottom: "13.64%",
    left: "13.64%",
    position: "absolute",
  },
  caloriesPie: {
    height: "44%",
    width: "44%",
    top: "49.33%",
    right: "28%",
    bottom: "6.67%",
    left: "28%",
    position: "absolute",
  },
  status4: {
    top: 668,
  },
  ellipseIcon: {
    height: "6.46%",
    width: "13.99%",
    top: "5.52%",
    right: "74.55%",
    bottom: "88.03%",
    left: "11.45%",
    position: "absolute",
  },
  welcomeBack: {
    color: "#4a4a4a",
    lineHeight: 18,
    fontSize: FontSize.textSmallTextMedium_size,
    top: 0,
  },
  aishaSinha: {
    top: 23,
    fontSize: FontSize.titleH4Bold_size,
    lineHeight: 30,
    color: Color.black,
  },
  titleHome: {
    width: 122,
    left: 0,
    top: 0,
  },
  notificationIcon: {
    top: -23,
    left: 156,
    width: 112,
    height: 120,
    position: "absolute",
  },
  bishopWindow: {
    top: 45,
    left: 76,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  header: {
    top: 47,
    left: 125,
    width: 236,
    height: 61,
    position: "absolute",
  },
  shoppingBag: {
    top: 123,
    left: 173,
    width: 32,
    height: 32,
    position: "absolute",
  },
  vectorIcon3: {
    height: "28.67%",
    top: "41.1%",
    right: "8.14%",
    left: "87.91%",
  },
  vectorIcon4: {
    height: "40.14%",
    top: "29.63%",
    right: "14.14%",
    left: "81.92%",
  },
  vectorIcon5: {
    height: "45.87%",
    width: "3.65%",
    top: "31.92%",
    right: "20.27%",
    bottom: "22.21%",
    left: "76.08%",
    position: "absolute",
  },
  text6: {
    height: "59.93%",
    width: "6.87%",
    top: "18.52%",
    left: "5.09%",
    fontSize: 11,
    fontFamily: FontFamily.textCaptionRegular,
    color: Color.black,
  },
  topbar: {
    width: 393,
    height: 27,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  fitness: {
    backgroundColor: Color.whiteColor,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Fitness;
