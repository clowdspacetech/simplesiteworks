import PackagesExperience from "../../components/PackagesExperience";
import { isPackageId, type PackageId } from "../../lib/site";

export default async function PackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const raw = typeof params.package === "string" ? params.package : undefined;
  const initialPackage: PackageId | undefined = isPackageId(raw) ? raw : undefined;

  return (
    <main className="flex-1">
      <PackagesExperience initialPackage={initialPackage} />
    </main>
  );
}
