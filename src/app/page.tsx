import Input from "@/components/Input";
import Loading from "@/components/Loading";
import Quotes from "@/components/Quotes";
import { Suspense } from "react";

type Props = {
  searchParams: {
    total: string;
  };
};

async function HomePage({ searchParams }: Props) {
  console.log(searchParams.total);

  return (
    <main className="p-4 flex flex-col items-center w-full">
      <Input />

      <Suspense key={searchParams.total} fallback={<Loading />}>
        <Quotes total={searchParams.total} />
      </Suspense>
    </main>
  );
}

export default HomePage;
