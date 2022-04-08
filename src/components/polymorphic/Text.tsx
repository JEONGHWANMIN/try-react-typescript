import React from "react";

type TextProps = {
	size?: "sm" | "sm" | "lg";
	color?: "primary" | "secondary";
	children: React.ReactNode;
};

function Text({ size, color, children }: TextProps) {
	return <div>Text</div>;
}

export default Text;
