type QuoteObject = {
  _id: string;
  author: string;
  content: string;
  dateAdded: string;
};

async function Quotes({ total }: { total: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const quoteObjects: QuoteObject[] = await fetch(
    `https://api.quotable.io/quotes/random?limit=${total}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-7xl">
      {quoteObjects.map((q) => (
        <div key={q._id} className="bg-zinc-700 rounded-lg p-4 h-72 relative">
          <h1 className="mb-2 font-medium">{q.author}</h1>
          <h2 className="text-zinc-300">{q.content}</h2>

          <p className="absolute right-4 text-xs text-slate-500 bottom-4">
            Added: {q.dateAdded}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
