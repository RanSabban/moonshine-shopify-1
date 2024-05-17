'use client'

import { usePathname } from "next/navigation";
import { AppHeader } from "./AppHeader";

export function Header() {
    const pathname = usePathname();
    console.log(pathname);
    const shouldShowHeader = !pathname.startsWith('/app');

    return (
        <>
            {shouldShowHeader && <AppHeader />}
        </>
    )
}