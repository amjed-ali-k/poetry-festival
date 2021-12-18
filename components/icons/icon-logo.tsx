import Image from "next/image";


export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return (
    <Image src={`/logo.png`} width={64} height={64} {...props} />
  );
}
