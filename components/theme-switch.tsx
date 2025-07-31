// import { FC, useState, useEffect } from "react";
// import { VisuallyHidden } from "@react-aria/visually-hidden";
// import { SwitchProps, useSwitch } from "@heroui/react";
// import { useTheme } from "@heroui/use-theme";
// import clsx from "clsx";
//
// import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
//
// export interface ThemeSwitchProps {
//   className?: string;
//   classNames?: SwitchProps["classNames"];
// }
//
// export const ThemeSwitch: FC<ThemeSwitchProps> = ({
//                                                     className,
//                                                     classNames,
//                                                   }) => {
//   const [isMounted, setIsMounted] = useState(false);
//
//   const { theme, setTheme } = useTheme();
//
//   const onChange = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };
//
//   const {
//     Component,
//     slots,
//     isSelected,
//     getBaseProps,
//     getInputProps,
//     getWrapperProps,
//   } = useSwitch({
//     isSelected: theme === "light",
//     onChange,
//   });
//
//   useEffect(() => {
//     setIsMounted(true);
//   }, [isMounted]);
//
//   // Prevent Hydration Mismatch
//   if (!isMounted) return <div className="w-6 h-6" />;
//
//   return (
//     <Component
//       aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
//       {...getBaseProps({
//         className: clsx(
//           "px-px transition-opacity hover:opacity-80 cursor-pointer",
//           className,
//           classNames?.base,
//         ),
//       })}
//     >
//       <VisuallyHidden>
//         <input {...getInputProps()} />
//       </VisuallyHidden>
//       <div
//         {...getWrapperProps()}
//         className={slots.wrapper({
//           class: clsx(
//             [
//               "w-auto h-auto",
//               "bg-transparent",
//               "rounded-lg",
//               "flex items-center justify-center",
//               "group-data-[selected=true]:bg-transparent",
//               "!text-default-500",
//               "pt-px",
//               "px-0",
//               "mx-0",
//             ],
//             classNames?.wrapper,
//           ),
//         })}
//       >
//         {isSelected ? (
//           <MoonFilledIcon size={22} />
//         ) : (
//           <SunFilledIcon size={22} />
//         )}
//       </div>
//     </Component>
//   );
// };
// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { Button } from "@heroui/button";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])


  if(!mounted) return null

  return (
    <div>
      <Button isIconOnly variant='light' disableAnimation radius="full" className="p-0 bg-transparent" onPress={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>{theme === 'light' ? (
          <MoonFilledIcon size={22} />
        ) : (
          <SunFilledIcon size={22} />
        )}</Button>
    </div>
  )
};