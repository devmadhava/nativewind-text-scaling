import { Stack } from "expo-router";
import { VariableProvider } from "@/context/VariableProvider";
import scalingPoints from "@/constants/ScalingPoints";
import "../global.css";

export default function RootLayout() {
    return (
        <VariableProvider variables={scalingPoints}>
            <Stack screenOptions={{headerShown: false}} />
        </VariableProvider>
    );
}
