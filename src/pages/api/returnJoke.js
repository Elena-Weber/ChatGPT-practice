const generateJoke = async ({
  firstCharacter,
  secondCharacter,
  details,
  tone,
  numWords,
}) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: `Write a short joke about a ${firstCharacter} 
          ${secondCharacter ? `and a ${secondCharacter}` : ""} that is fewer than ${
            numWords || 200
          } words long in a ${tone || "funny"} tone. ${
            details ? `Incorporate the following details: ${details}.` : ""
          }.`,
          max_tokens: 1000,
          temperature: 0.5,
        }),
      }
    );
    const data = await response.json();
    return data.choices[0].text;
  } catch (err) {
    console.error(err);
  }
};

export default async function handler(req, res) {
  const { firstCharacter, secondCharacter, details, tone, numWords } = req.body;
  const joke = await generateJoke({
		firstCharacter,
      secondCharacter,
      details,
      tone,
      numWords,
  });
  res.status(200).json({
    joke,
  });
}