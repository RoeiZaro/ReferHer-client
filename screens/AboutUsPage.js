import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const AboutUsPage = () => {
  return (
    <>
      <SafeAreaView className="bg-pink-600 justify-center items-center">
        <StatusBar style="light" />
      </SafeAreaView>
      <ScrollView>
        <View className="bg-purple-900 flex-1">
          <Text className="font-extrabold  text-6xl text-pink-500">
            AboutUs
          </Text>

          <Text className="text-white">
            Learn about ReferHer and our obsession with getting more women into
            hi-tech
          </Text>
        </View>

        <View className="bg-slate-200 flex-1">
          <View className="flex-col">
            <Text className="font-extrabold  text-4xl text-pink-500">
              ReferHer is all about women empowering women
            </Text>
            <Text>
              Did you know as of 2022, women only make up 26.7% of the tech
              industry? And the percentage of women in all tech-related careers
              has decreased over the last 2 years!
            </Text>
          </View>
          <View>
            <Image
              source={require("../assets/tmuna1.webp")}
              style={{ width: 100, height: 130 }}
            />
          </View>
        </View>

        <View className="bg-purple-900 flex-1">
          <View>
            <Image
              source={require("../assets/tmuna2.webp")}
              style={{ width: 200, height: 130 }}
            />
          </View>
          <View>
            <Text className="font-extrabold  text-4xl text-pink-500">
              So how can we get more women into tech?
            </Text>
            <Text className="text-white">
              The first step is making sure women get the opportunity to
              interview for the role. And the easiest way to land an interview
              at a hi-tech company is through internal referral. But it can be
              challenging to get an internal referral when you don't know anyone
              at the company you want to apply to.
            </Text>
          </View>
        </View>

        <View className="bg-slate-200 flex-1">
          <View>
            <Text className="font-extrabold  text-4xl text-pink-500">
              The goal of ReferHer
            </Text>
            <Text>
              The goal of ReferHer is to help female job seekers reach out for
              internal referrals without stress. We do this with the help of our
              incredible “referrers.” Women at hi-tech companies who have
              volunteered to be “referrers” for our job seekers. They are
              willing to speak with job seekers and refer qualified candidates
              internally. Some are even open to mentoring them through the
              interview process.
            </Text>
          </View>
          <View>
            <Image
              source={require("../assets/tmuna3.webp")}
              style={{ width: 100, height: 130 }}
            />
          </View>
        </View>

        <View className="bg-purple-900 flex-1">
          <Text className="text-white">
            Ashley Gerber founded ReferHer in 2022. Ashley loves mentoring job
            seekers and is a huge supporter of bringing more women into tech.
            She noticed her mentees felt anxious asking strangers for referrals.
            So she came up with the idea for a women's referral network.
          </Text>
          <View>
            <View>
              <Image
                source={require("../assets/tmuna4.webp")}
                style={{ width: 150, height: 150 }}
              />
            </View>
            <Text className="font-extrabold  text-2xl text-pink-500">
              Ashley Gerber
            </Text>
            <Text className="text-white">ReferHer Founder</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutUsPage;
