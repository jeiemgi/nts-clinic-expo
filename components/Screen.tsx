import { Layout, LayoutProps } from "@ui-kitten/components";
import { ScrollView } from "react-native";

const GRID_UNIT = 4;

type GridUnit = number;

interface Props {
  /**
   * Number that will be multiplied by the grid unit
   */
  py?: GridUnit;
  px?: GridUnit;
  safeAreaView?: boolean;
}

export const Screen = ({
  py = 0,
  px = 4,
  style,
  children,
  ...props
}: LayoutProps & Props) => {
  const computedStyles = [
    { paddingVertical: py * GRID_UNIT, paddingHorizontal: px * GRID_UNIT },
    style,
  ];

  return (
    <Layout {...props}>
      <ScrollView
        contentContainerStyle={computedStyles}
        contentInsetAdjustmentBehavior="automatic"
      >
        {children}
      </ScrollView>
    </Layout>
  );
};
