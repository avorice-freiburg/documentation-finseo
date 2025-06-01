import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('privacy-policy');

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
