"use client";

import { FC, ReactNode } from "react";
import { NextThemePovider } from "@/providers/next-themes-provider";
// import { ModalProvider } from "@/providers/modal-provider";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<NextThemePovider>
			{/* <ModalProvider /> */}
			{children}
		</NextThemePovider>
	);
};
