import React from 'react';
import Image from "next/image";

interface CloseIconProps {
    size?: number;
    onClick?: () => void;
    className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ size = 24, onClick, className }) => (
    <div onClick={onClick} className={className}>
        <Image src="/icons/close.svg" alt="Close" width={size} height={size} />
    </div>
);

export default CloseIcon;
