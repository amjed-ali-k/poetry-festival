import Image from 'next/image';

export default function IconLogo({ ...props }) {
  return <Image src={`/logo.png`} width={64} height={64} {...props} />;
}
