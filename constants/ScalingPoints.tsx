import { Platform } from "react-native";
import { moderateScale } from "react-native-size-matters";

const isMobile  = (Platform.OS === 'android' || Platform.OS === 'ios');

const createScalingPoint = (x: number) => {
    return moderateScale(x, 0.3) + "px";
};

const scalingPoints = {
    "--fs-xs": isMobile ? createScalingPoint(12) : "0.75rem",
    "--lh-xs": isMobile ? createScalingPoint(16) : "1rem",

    "--fs-sm": isMobile ? createScalingPoint(14) : "0.875rem",
    "--lh-sm": isMobile ? createScalingPoint(20) : "1.25",

    "--fs-base": isMobile ? createScalingPoint(16) : "1rem",
    "--lh-base": isMobile ? createScalingPoint(24) : "1.5rem",

    "--fs-lg": isMobile ? createScalingPoint(18) : "1.125rem",
    "--lh-lg": isMobile ? createScalingPoint(28) : "1.75",

    "--fs-xl": isMobile ? createScalingPoint(20) : "1.25rem",
    "--lh-xl": isMobile ? createScalingPoint(28) : "1.75rem",

    "--fs-2xl": isMobile ? createScalingPoint(24) : "1.5rem",
    "--lh-2xl": isMobile ? createScalingPoint(32) : "2rem",

    "--fs-3xl": isMobile ? createScalingPoint(30) : "1.875rem",
    "--lh-3xl": isMobile ? createScalingPoint(36) : "2.25rem",

    "--fs-4xl": isMobile ? createScalingPoint(36) : "2.25rem",
    "--lh-4xl": isMobile ? createScalingPoint(40) : "2.5rem",

    "--fs-5xl": isMobile ? createScalingPoint(48) : "3rem",
    "--lh-5xl": isMobile ? createScalingPoint(48) : "3rem",

    "--fs-6xl": isMobile ? createScalingPoint(60) : "3.75rem",
    "--lh-6xl": isMobile ? createScalingPoint(60) : "3.75rem",
};

export default scalingPoints;
