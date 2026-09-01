import PackagesExperience from "../../components/PackagesExperience";
import { resolvePackageId } from "../../lib/site";

export default async function PackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const raw = typeof params.package === "string" ? params.package : undefined;
  const initialPackage = raw ? resolvePackageId(raw) : undefined;

  return (
    <main className="min-w-0 flex-1 overflow-x-clip">
      <PackagesExperience initialPackage={initialPackage} />
    </main>
  );
}
