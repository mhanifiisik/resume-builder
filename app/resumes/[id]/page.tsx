"use client"

import { cn } from "@/lib/utils"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import Experience from "@/components/sections/experience"
import PersonalInfo from "@/components/sections/personal-info"
import Summary from "@/components/sections/summary"

function TabsDemo() {
  return (
    <>
      <Experience />
    </>
  )
}
export default TabsDemo
