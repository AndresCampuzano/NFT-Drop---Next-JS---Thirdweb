import Image from "next/image";

export const Logo = () => {
    return (
        <div>
            <Image src="/logo.png" width={60} height={60} layout="fixed" priority/>
        </div>
    )

}