// // app.js
//* Does not have any point have radis api
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const fs = require("fs");
// const PORT = process.env.PORT || 4000;
// const data = require("./bhagavad_gita.json"); // Load the JSON data
// const versesData = require("./verses.json");

// const path = require("path");
// const filePath = path.join(__dirname, "verseDetails.json");
// const audioPath = path.join(__dirname, "audio.json");
// const questionsPath = path.join(__dirname, "questions.json");

// const verseNumberFilePath = path.join(__dirname, "verseNumber.json");

// const introFilePath = path.join(__dirname, "intro.json");




// // const verses = require('./verses.json');

// const rawData = fs.readFileSync("bhagavad_gita.json", "utf-8");
// const chaptersData = JSON.parse(rawData);

// const questionsRawData = fs.readFileSync(questionsPath, "utf-8");
// const questionsData = JSON.parse(questionsRawData);

// app.use(express.json());

// // Use cors middleware to allow requests from the origin where your Next.js app is hosted
// app.use(cors());

// app.get("/api/sections", (req, res) => {
//   fs.readFile(introFilePath, (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const sections = JSON.parse(data);
//     res.json(sections);
//   });
// });


// app.get("/api/section/:sectionName", (req, res) => {
//   const { sectionName } = req.params;

//   fs.readFile(introFilePath, (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const sections = JSON.parse(data);

//     if (sections[sectionName]) {
//       res.json({ paragraphs: sections[sectionName] });
//     } else {
//       res.status(404).json({ error: "Section not found" });
//     }
//   });
// });


// app.get("/api/verseNumbers", (req, res) => {
//   // Read the contents of the verseNumber JSON file
//   fs.readFile(verseNumberFilePath, (err, data) => {
//     if (err) {
//       console.error("Error reading verseNumber JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     // Parse the JSON data and send it as a response
//     const verseNumbers = JSON.parse(data);
//     res.json(verseNumbers);
//   });
// });
// // Define an API endpoint to retrieve chapter names and descriptions
// app.get("/api/chapters", (req, res) => {
//   const chapters = data.chapters.map((chapter) => ({
//     chapter_number: chapter.chapter_number,
//     name: chapter.name,
//     description: chapter.description,
//   }));
//   res.json({ chapters });
// });

// app.get("/api/verses/:chapterNumber", (req, res) => {
//   const { chapterNumber } = req.params;

//   // Check if verses data for the specified chapter exists
//   if (versesData[chapterNumber]) {
//     const verses = versesData[chapterNumber].map((verse) => ({
//       verse_number: verse.verse_number,
//       text: verse.text,
//     }));
//     res.json({ verses });
//   } else {
//     res.status(404).json({ error: "Chapter not found" });
//   }
// });

// // Define an API endpoint to retrieve verse details by chapter-verse identifier
// app.get("/api/verse/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   // Read the JSON file and parse its contents
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.error("Error reading verse details JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const verseDetails = JSON.parse(data);

//     // Check if verse details for the specified chapter-verse identifier exist
//     if (verseDetails[chapterVerse]) {
//       res.json({ verseDetails: verseDetails[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "Verse not found" });
//     }
//   });
// });

// // Add this code to your app.js
// app.get("/api/audio/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   // Read the audio JSON file and parse its contents
//   fs.readFile(audioPath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading audio JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const audioData = JSON.parse(data);

//     // Check if audio data for the specified chapter-verse identifier exists
//     if (audioData[chapterVerse]) {
//       res.json({ audio: audioData[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "Audio not found" });
//     }
//   });
// });

// // Add this code to your app.js
// app.get("/api/links/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   // Read the audio JSON file and parse its contents
//   fs.readFile(linkPath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading links JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const linkData = JSON.parse(data);

//     // Check if audio data for the specified chapter-verse identifier exists
//     if (linkData[chapterVerse]) {
//       res.json({ links: linkData[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "link not found" });
//     }
//   });
// });

// app.get("/api/podbeans/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   // Read the audio JSON file and parse its contents
//   fs.readFile(linkPath2, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading links JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const podbeanData = JSON.parse(data);

//     // Check if audio data for the specified chapter-verse identifier exists
//     if (podbeanData[chapterVerse]) {
//       res.json({ podbeans: podbeanData[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "link not found" });
//     }
//   });
// });

// app.get("/api/timestamp/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   // Read the JSON file and parse its contents
//   fs.readFile(linkPath1, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const jsonData = JSON.parse(data);

//     // Check if the specified chapter-verse identifier exists in the JSON data
//     if (jsonData[chapterVerse]) {
//       const {
//         "start-time": startTime,
//         "end-time": endTime,
//         "video-id": videoId,
//       } = jsonData[chapterVerse];
//       res.json({
//         "start-time": startTime,
//         "end-time": endTime,
//         "video-id": videoId,
//       });
//     } else {
//       res.status(404).json({ error: "Chapter-verse not found" });
//     }
//   });
// });

// // app.get('/api/verses', (req, res) => {
// //   res.json({ verses });
// // });

// // Define and initialize currentVerseIndex here
// let currentVerseIndex = 0;

// app.get("/api/verse-of-the-day", (req, res) => {
//   if (currentVerseIndex >= Object.keys(versesData).length) {
//     // Reset the verse index if we've reached the end of the data
//     currentVerseIndex = 0;
//   }

//   const verseKey = Object.keys(versesData)[currentVerseIndex];
//   const verse = versesData[verseKey];
//   currentVerseIndex++;

//   if (verse) {
//     res.json({ verse }); // Include the entire 'verse' object in the response
//   } else {
//     res.status(404).json({ error: "Verse not found" });
//   }
// });

// app.get("/api/chapters/:bookId", (req, res) => {
//   const { bookId } = req.params;

//   // Filter chapters based on the selected book's ID
//   const bookChapters = chaptersData.chapters.filter(
//     (chapter) => chapter.bookId === Number(bookId)
//   );

//   if (bookChapters.length === 0) {
//     res
//       .status(404)
//       .json({ error: "Chapters not found for the specified book" });
//   } else {
//     res.json({ chapters: bookChapters });
//   }
// });

// app.get("/api/books", (req, res) => {
//   res.json({ books: booksData });
// });

// app.get("/api/questions/:verseId", (req, res) => {
//   const verseId = req.params.verseId;

//   // Check if the requested verseId exists in the questions data
//   if (questionsData.hasOwnProperty(verseId)) {
//     res.json({ questions: questionsData[verseId] });
//   } else {
//     res.status(404).json({ error: "Verse not found" });
//   }
// });

// app.get("api/calculate-data", (req, res) => {
//   try {
//     let calculatedData = 0;
//     for (let i = 0; i < 100000003; i++) {
//       calculatedData += i;
//     }
//     return res.json({ data: calculatedData });
//   } catch (error) {
//     console.error("Error calculating data:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });



// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//* Only one end point have radis api for testing purpose
// const redis = require("redis");
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");

// let redisClient;

// (async () => {
//   try {
//     redisClient = redis.createClient();
//     redisClient.on("error", (error) => {
//       console.error("Error connecting to Redis:", error);
//     });
//     await redisClient.connect();
//     console.log("Connected to Redis successfully.");
//   } catch (error) {
//     console.error("Failed to connect to Redis:", error);
//   }
// })();

// const PORT = process.env.PORT || 4000;

// const data = require("./bhagavad_gita.json"); // Load the JSON data
// const versesData = require("./verses.json");

// const filePath = path.join(__dirname, "verseDetails.json");
// const audioPath = path.join(__dirname, "audio.json");
// const questionsPath = path.join(__dirname, "questions.json");
// const verseNumberFilePath = path.join(__dirname, "verseNumber.json");
// const introFilePath = path.join(__dirname, "intro.json");

// const rawData = fs.readFileSync("bhagavad_gita.json", "utf-8");
// const chaptersData = JSON.parse(rawData);

// const questionsRawData = fs.readFileSync(questionsPath, "utf-8");
// const questionsData = JSON.parse(questionsRawData);

// app.use(express.json());

// // Use cors middleware to allow requests from the origin where your Next.js app is hosted
// app.use(cors());

// app.get("/api/sections", (req, res) => {
//   fs.readFile(introFilePath, (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const sections = JSON.parse(data);
//     res.json(sections);
//   });
// });

// app.get("/api/section/:sectionName", (req, res) => {
//   const { sectionName } = req.params;

//   fs.readFile(introFilePath, (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const sections = JSON.parse(data);

//     if (sections[sectionName]) {
//       res.json({ paragraphs: sections[sectionName] });
//     } else {
//       res.status(404).json({ error: "Section not found" });
//     }
//   });
// });

// app.get("/api/verseNumbers", (req, res) => {
//   fs.readFile(verseNumberFilePath, (err, data) => {
//     if (err) {
//       console.error("Error reading verseNumber JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     const verseNumbers = JSON.parse(data);
//     res.json(verseNumbers);
//   });
// });

// app.get("/api/chapters", (req, res) => {
//   const chapters = data.chapters.map((chapter) => ({
//     chapter_number: chapter.chapter_number,
//     name: chapter.name,
//     description: chapter.description,
//   }));
//   res.json({ chapters });
// });

// app.get("/api/verses/:chapterNumber", (req, res) => {
//   const { chapterNumber } = req.params;

//   if (versesData[chapterNumber]) {
//     const verses = versesData[chapterNumber].map((verse) => ({
//       verse_number: verse.verse_number,
//       text: verse.text,
//     }));
//     res.json({ verses });
//   } else {
//     res.status(404).json({ error: "Chapter not found" });
//   }
// });

// app.get("/api/verse/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.error("Error reading verse details JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const verseDetails = JSON.parse(data);

//     if (verseDetails[chapterVerse]) {
//       res.json({ verseDetails: verseDetails[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "Verse not found" });
//     }
//   });
// });

// app.get("/api/audio/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   fs.readFile(audioPath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading audio JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const audioData = JSON.parse(data);

//     if (audioData[chapterVerse]) {
//       res.json({ audio: audioData[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "Audio not found" });
//     }
//   });
// });

// app.get("/api/links/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   fs.readFile(linkPath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading links JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const linkData = JSON.parse(data);

//     if (linkData[chapterVerse]) {
//       res.json({ links: linkData[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "link not found" });
//     }
//   });
// });

// app.get("/api/podbeans/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   fs.readFile(linkPath2, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading links JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const podbeanData = JSON.parse(data);

//     if (podbeanData[chapterVerse]) {
//       res.json({ podbeans: podbeanData[chapterVerse] });
//     } else {
//       res.status(404).json({ error: "link not found" });
//     }
//   });
// });

// app.get("/api/timestamp/:chapterVerse", (req, res) => {
//   const { chapterVerse } = req.params;

//   fs.readFile(linkPath1, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }

//     const jsonData = JSON.parse(data);

//     if (jsonData[chapterVerse]) {
//       const { "start-time": startTime, "end-time": endTime, "video-id": videoId } = jsonData[chapterVerse];
//       res.json({ "start-time": startTime, "end-time": endTime, "video-id": videoId });
//     } else {
//       res.status(404).json({ error: "Chapter-verse not found" });
//     }
//   });
// });

// let currentVerseIndex = 0;

// app.get("/api/verse-of-the-day", (req, res) => {
//   if (currentVerseIndex >= Object.keys(versesData).length) {
//     currentVerseIndex = 0;
//   }

//   const verseKey = Object.keys(versesData)[currentVerseIndex];
//   const verse = versesData[verseKey];
//   currentVerseIndex++;

//   if (verse) {
//     res.json({ verse });
//   } else {
//     res.status(404).json({ error: "Verse not found" });
//   }
// });

// app.get("/api/chapters/:bookId", (req, res) => {
//   const { bookId } = req.params;

//   const bookChapters = chaptersData.chapters.filter(
//     (chapter) => chapter.bookId === Number(bookId)
//   );

//   if (bookChapters.length === 0) {
//     res.status(404).json({ error: "Chapters not found for the specified book" });
//   } else {
//     res.json({ chapters: bookChapters });
//   }
// });

// app.get("/api/books", (req, res) => {
//   res.json({ books: booksData });
// });

// app.get("/api/questions/:verseId", (req, res) => {
//   const verseId = req.params.verseId;

//   if (questionsData.hasOwnProperty(verseId)) {
//     res.json({ questions: questionsData[verseId] });
//   } else {
//     res.status(404).json({ error: "Verse not found" });
//   }
// });


// //*  for redis testing purpose only to check the performance of the server
// app.get("/calculate-data",async (req, res) => {
//   try {
//     let calculatedData = 0;
//     // cehck if the data is already present in the cache
//     const cachedData = await redisClient.get("calculatedData");
//     if (cachedData) {
//       console.log("Data fetched from cache");
//       return res.json({ data: cachedData });
//     }
//     for (let i = 0; i < 10000000334; i++) {
//       calculatedData += i;
//     }
//     // store the data in the cache
//     await redisClient.set("calculatedData", calculatedData);
//     return res.json({ data: calculatedData });
//   } catch (error) {
//     console.error("Error calculating data:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



















//* Implemented Radis for all the end points


const redis = require("redis");
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");

let redisClient;

(async () => {
  try {
    redisClient = redis.createClient();
    redisClient.on("error", (error) => {
      console.error("Error connecting to Redis:", error);
    });
    await redisClient.connect();
    console.log("Connected to Redis successfully.");
  } catch (error) {
    console.error("Failed to connect to Redis:", error);
  }
})();

const PORT = process.env.PORT || 4000;

const data = require("./bhagavad_gita.json");
const versesData = require("./verses.json");

const filePath = path.join(__dirname, "verseDetails.json");
const audioPath = path.join(__dirname, "audio.json");
const questionsPath = path.join(__dirname, "questions.json");
const verseNumberFilePath = path.join(__dirname, "verseNumber.json");
const introFilePath = path.join(__dirname, "intro.json");

const rawData = fs.readFileSync("bhagavad_gita.json", "utf-8");
const chaptersData = JSON.parse(rawData);

const questionsRawData = fs.readFileSync(questionsPath, "utf-8");
const questionsData = JSON.parse(questionsRawData);

app.use(express.json());
app.use(cors());

app.get("/api/sections", async (req, res) => {
  const cacheKey = "sections";

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    fs.readFile(introFilePath, (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const sections = JSON.parse(data);
      redisClient.set(cacheKey, JSON.stringify(sections));
      res.json(sections);
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/section/:sectionName", async (req, res) => {
  const { sectionName } = req.params;
  const cacheKey = `section:${sectionName}`;

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    fs.readFile(introFilePath, (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const sections = JSON.parse(data);

      if (sections[sectionName]) {
        redisClient.set(cacheKey, JSON.stringify({ paragraphs: sections[sectionName] }));
        res.json({ paragraphs: sections[sectionName] });
      } else {
        res.status(404).json({ error: "Section not found" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/verseNumbers", async (req, res) => {
  const cacheKey = "verseNumbers";

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    fs.readFile(verseNumberFilePath, (err, data) => {
      if (err) {
        console.error("Error reading verseNumber JSON file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const verseNumbers = JSON.parse(data);
      redisClient.set(cacheKey, JSON.stringify(verseNumbers));
      res.json(verseNumbers);
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/chapters", async (req, res) => {
  const cacheKey = "chapters";

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    const chapters = data.chapters.map((chapter) => ({
      chapter_number: chapter.chapter_number,
      name: chapter.name,
      description: chapter.description,
    }));

    redisClient.set(cacheKey, JSON.stringify({ chapters }));
    res.json({ chapters });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/verses/:chapterNumber", async (req, res) => {
  const { chapterNumber } = req.params;
  const cacheKey = `verses:${chapterNumber}`;

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    if (versesData[chapterNumber]) {
      const verses = versesData[chapterNumber].map((verse) => ({
        verse_number: verse.verse_number,
        text: verse.text,
      }));

      redisClient.set(cacheKey, JSON.stringify({ verses }));
      res.json({ verses });
    } else {
      res.status(404).json({ error: "Chapter not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/verse/:chapterVerse", async (req, res) => {
  const { chapterVerse } = req.params;
  const cacheKey = `verse:${chapterVerse}`;

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error("Error reading verse details JSON file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const verseDetails = JSON.parse(data);

      if (verseDetails[chapterVerse]) {
        redisClient.set(cacheKey, JSON.stringify({ verseDetails: verseDetails[chapterVerse] }));
        res.json({ verseDetails: verseDetails[chapterVerse] });
      } else {
        res.status(404).json({ error: "Verse not found" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/audio/:chapterVerse", async (req, res) => {
  const { chapterVerse } = req.params;
  const cacheKey = `audio:${chapterVerse}`;

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    fs.readFile(audioPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading audio JSON file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const audioData = JSON.parse(data);

      if (audioData[chapterVerse]) {
        redisClient.set(cacheKey, JSON.stringify({ audio: audioData[chapterVerse] }));
        res.json({ audio: audioData[chapterVerse] });
      } else {
        res.status(404).json({ error: "Audio not found" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/links/:chapterVerse", async (req, res) => {
  const { chapterVerse } = req.params;
  const cacheKey = `links:${chapterVerse}`;

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    fs.readFile(linkPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading links JSON file:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      const linkData = JSON.parse(data);

      if (linkData[chapterVerse]) {
        redisClient.set(cacheKey, JSON.stringify({ links: linkData[chapterVerse] }));
        res.json({ links: linkData[chapterVerse] });
      } else {
        res.status(404).json({ error: "Link not found" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/questions/:chapterVerse", async (req, res) => {
  const { chapterVerse } = req.params;
  const cacheKey = `questions:${chapterVerse}`;

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("Data fetched from cache");
      return res.json(JSON.parse(cachedData));
    }

    if (questionsData[chapterVerse]) {
      redisClient.set(cacheKey, JSON.stringify({ questions: questionsData[chapterVerse] }));
      res.json({ questions: questionsData[chapterVerse] });
    } else {
      res.status(404).json({ error: "Questions not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
