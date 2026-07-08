import type { ComponentType } from "react";
import {
  BatteryCharging,
  BatteryFull,
  BrickWallShield,
  Cctv,
  Cpu,
  Sun,
  Thermometer,
  type LucideProps,
} from "lucide-react";

export const solutionIconMap: Record<string, ComponentType<LucideProps>> = {
  "camera-ai": Cctv,
  "giam-sat-nhiet": Thermometer,
  "bao-ve-hang-rao": BrickWallShield,
  "nguon-dien-tu-dong-hoa": Cpu,
  "giam-sat-tu-dc": BatteryCharging,
  "giam-sat-ac-quy": BatteryFull,
  "dien-mat-troi": Sun,
};
