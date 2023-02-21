import React, { useState } from "react";

export default function Dashboard() {

  const [joke, setJoke] = useState("");
  const [firstCharacter, setFirstCharacter] = useState("");
  const [secondCharacter, setSecondCharacter] = useState("");
  const [details, setDetails] = useState("");
  const [tone, setTone] = useState("");
  const [numWords, setNumWords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
    navigator.clipboard.writeText(joke); // copies the joke
    setIsCopied(true);
  };

	const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    const res = await fetch("/api/returnJoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstCharacter,
        secondCharacter,
        details,
        tone,
        numWords,
      }),
    });
    setIsGenerating(false);
    const data = await res.json();
    setJoke(data.joke.trim());
    setIsCopied(false);
  };

	return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12 ">
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="firstCharacter">
							First character
              </label>
              <input
                type="text"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="firstCharacter"
                placeholder="First character"
                id="firstCharacter"
                value={firstCharacter}
                onChange={(e) => setFirstCharacter(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="secondCharacter" className="sr-only">
                Second character
              </label>
              <input
                value={secondCharacter}
                onChange={(e) => setSecondCharacter(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Second character (Optional)"
                type="text"
                name="secondCharacter"
                id="secondCharacter"
              />
            </div>
						<div className="flex flex-col">
              <label htmlFor="details" className="sr-only">
                Additional details (Optional)
              </label>
              <textarea
                rows={7}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                name="details"
                id="details"
                placeholder="Additional details such as situation, location, topic etc. (Optional)"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="tone">
                Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="tone"
                id="tone"
              >
                <option value="default">Select Tone (Optional)</option>
                <option value="hilarious">Hilarious</option>
                <option value="dark humor">Dark humor</option>
								<option value="sarcastic">Sarcastic</option>
                <option value="boring">Boring</option>
              </select>
            </div>
						<div className="flex flex-col">
              <label htmlFor="words" className="sr-only">
                Words (Optional)
              </label>
              <input
                value={numWords}
                onChange={(e) => setNumWords(e.target.value)}
                type="number"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Number Of Words - Default 200 (Optional)"
                name="words"
                id="words"
              />
            </div>
            <button
              className={`bg-indigo-600 w-full hover:bg-indigo-700 text-white font-bold mt-7 py-2 px-4 rounded
                ${
                  isGenerating || firstCharacter === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              type="submit"
              disabled={isGenerating || firstCharacter === ""}
            >
              {isGenerating ? "Please wait. Generating a joke..." : "Generate a joke"}
            </button>
          </form>
        </div>
				<div className="">
          <div className="flex flex-col">
            <label htmlFor="output" className="sr-only">
              Output
            </label>
            <textarea
              rows={
                joke === ""
                  ? 7
                  : joke.split("\\n").length + 18
              }
              name="output"
              onChange={(e) => setJoke(e.target.value)}
              value={joke}
              disabled={joke === ""}
              id="output"
              placeholder="AI Generated Joke"
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
            />
            <button
              onClick={handleCopy}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-0.5 rounded"
              type="submit"
              disabled={joke === ""}
            >
              {isCopied ? "Copied" : "Copy to Clipboard"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}