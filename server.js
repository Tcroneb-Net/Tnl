const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs').promises;
const zlib = require('zlib');
const Buffer = require('buffer').Buffer;

const app = express();
const PORT = process.env.PORT || 3000;

// --- Decryption Logic (Based on the obfuscated script) ---
// 1. Define constants and helper functions used in the decryption process
const XOR_KEY_HEX = "7e955ab7d05c403eaf37db4b36a1b1eb1bfdc0";
const XOR_KEY_BUFFER = Buffer.from(XOR_KEY_HEX, 'hex');

function B7ewMgcI43pyu8(LVaWeHDWg, NxGZycbM0z) { // XOR operation
  const YKjrQhoWH0 = Buffer.alloc(LVaWeHDWg.length);
  for (let DGuGYPxylu = 0; DGuGYPxylu < LVaWeHDWg.length; DGuGYPxylu++) {
    YKjrQhoWH0[DGuGYPxylu] = LVaWeHDWg[DGuGYPxylu] ^ NxGZycbM0z[DGuGYPxylu % NxGZycbM0z.length];
  }
  return YKjrQhoWH0;
}

// 2. Simulate the decryption steps from the obfuscated script
function decryptTnlBuffer(inputBuffer) {
  // --- Step 1: Decode and process the embedded instruction set (qlDJC2euPYo) ---
  const qlDJC2euPYoString = [
    "MZRd7/sWBMO5g+dN7b7/U2iELkpHTN6rb36",
    "nJQOxohP9j88GpETaydiMO/v8XpcJiLSeaJSZVkZR3umM3fI4v6b",
    "HUdj/ZIYUf9xXlyDsvvdQiJ2OvusUIr4UNNJvHlCtxHY6TvBuBKs/M6BgI3A",
    "1HbSaAw9s9qdxxIRiAPBBO2Ot5PVh2GW98Z",
    "Gc8p/48wS37X1AD6jQ81kNnEzXj9vJCz1BfEAiTdDVAt0YnswfXWIy98St8",
    "l0xkpHcibnAsMF8ohhL/X+IgDY0+NPpMNfm",
    "yRKM+rhJJtJkfJ5GABM2/HXTS2iUqUDFRxOSOIO/oa6y",
    "BBjUIxdqhjCKockQjNO1lB1Y4lVwov7vd4dpNkgqaBaZHapcZ1",
    "EX2vX2/VA3pFmpQmEHiiDQxtymUe49DDKulfFpALefXYBmsH",
    "CwXxsOITQuX/Km1KNWbNcrquVpMeqEIX4pjIxnmggIt4pcGC1wZCes",
    "NWnaNh7ziMqctM6k6qlK4DZgBDdT6dgynAFtyjc6bDPijSq1hmH",
    "ftkFK7HM8TzEB62dNW+mFV4vy3xtJHgI4ecAFVFIr",
    "O42vaL6JS2VeiswtwQArAG+rqGW7mSETri/OXACb9MrUoa",
    "+Hsp3q2PoKIMYDdK4KUULtqPYhmz5T3f537OyDH",
    "QSjN0YrDkSfvp+XWhPqkDPADYIyX0jNz7utP4rMzqu1eCcqPS453AmiVMGeJ",
    "GYKC9AXDzxNtId4nh8uF67+CTy1/kyG0CuDAYegY42F+4UjuTByH",
    "plLmGWwv9hCqrFhSW71yqyAVFxFyYqXErqCD",
    "0EwqDFjPGdv54vvnjbgGv0hvhYiqlW",
    "0gijjRhVabHd33t27mIME4PUZpqiwhMrzxjILAdk+AuRAPe4FS",
    "GafNpGAqWmI8KplHPDvzE99B3hqUJSJkDOAGLkFZJ9",
    "dYmyvbdsEN4r+6qmvwCaZUkftT0Eupto0Mx3I9utJ/ZhWfjbgsd",    "JhBgrXIlkYmNYd7iWsYTdOtrtL5KzK4xJMXY53sS2",
    "/tibOMQ=="
  ].join('');

  const decodedInstructionBuffer = B7ewMgcI43pyu8(Buffer.from(qlDJC2euPYoString, 'base64'), XOR_KEY_BUFFER);

  // --- Step 2: Parse the decoded instruction buffer (ffVWUPY simulation) ---
  const instructions = [];
  let idx = 0;
  while (idx < decodedInstructionBuffer.length) {
    const opCode = decodedInstructionBuffer[idx++];
    const lengthByte = decodedInstructionBuffer[idx++];
    let keySlice;
    if (lengthByte === 0xFF) { // Indicates a fixed 256-byte key slice follows
      keySlice = decodedInstructionBuffer.slice(idx, idx + 256);
      idx += 256;
    } else { // Length indicates the size of the following key slice
      keySlice = decodedInstructionBuffer.slice(idx, idx + lengthByte);
      idx += lengthByte;
    }
    instructions.push([opCode, keySlice]); // [Operation Code, Associated Data]
  }

  // --- Step 3: Prepare the main payload data (Rq10OUxgi) ---
  // The input buffer is treated as the main payload (could be base64 string or raw bytes)
  // If it's a string (e.g., from a text field), attempt to decode it as base64 first.
  let payloadBuffer;
  if (Buffer.isBuffer(inputBuffer)) {
    payloadBuffer = inputBuffer;
  } else if (typeof inputBuffer === 'string') {
     // Attempt base64 decoding
     try {
         payloadBuffer = Buffer.from(inputBuffer, 'base64');
         // Basic check: if the decoded buffer length is significantly different
         // or doesn't match expected patterns, it might not have been base64 originally.
         // A more robust check would involve trying to parse the result later.
         // For now, we proceed assuming it was base64.
     } catch (e) {
         // If base64 decoding fails, treat the string as raw UTF-8 bytes
         console.log("Input string is not valid Base64, treating as raw UTF-8.");
         payloadBuffer = Buffer.from(inputBuffer, 'utf8');
     }
  } else {
     throw new Error("Invalid input type for decryption. Expected Buffer or String.");
  }


  // --- Step 4: Apply decryption/inflation operations sequentially based on instructions ---
  for (let i = instructions.length - 1; i >= 0; i--) { // Process in reverse order as per script
    const [opCode, keySlice] = instructions[i];    switch (opCode) {
      case 0x5A: // Zlib inflateRaw
        payloadBuffer = zlib.inflateRawSync(payloadBuffer);
        break;
      case 0x47: // Zlib gunzip
        payloadBuffer = zlib.gunzipSync(payloadBuffer);
        break;
      case 0x42: // Zlib brotliDecompress
        // Note: Brotli might need specific options, but sync version often works without.
        payloadBuffer = zlib.brotliDecompressSync(payloadBuffer);
        break;
      case 0x58: // XOR with keySlice
        payloadBuffer = B7ewMgcI43pyu8(payloadBuffer, keySlice);
        break;
      case 0x52: // Reverse the buffer
        payloadBuffer = Buffer.from(payloadBuffer).reverse();
        break;
      case 0x4F: // Add value to each byte (mod 256)
        const addValue = keySlice[0]; // Take the first byte of the key slice
        const addedBuffer = Buffer.alloc(payloadBuffer.length);
        for (let j = 0; j < payloadBuffer.length; j++) {
          addedBuffer[j] = (payloadBuffer[j] + addValue) & 0xFF;
        }
        payloadBuffer = addedBuffer;
        break;
      case 0x53: // Substitution cipher using keySlice as map
        const substitutionMap = keySlice; // keySlice acts as a 256-byte lookup table
        const substitutedBuffer = Buffer.alloc(payloadBuffer.length);
        for (let j = 0; j < payloadBuffer.length; j++) {
          substitutedBuffer[j] = substitutionMap[payloadBuffer[j]]; // Map byte using keySlice
        }
        payloadBuffer = substitutedBuffer;
        break;
      default:
        console.warn(`Unknown opcode during decryption: ${opCode.toString(16)}`);
        // Depending on requirements, could throw an error or continue
        // For now, we continue processing.
    }
  }

  // --- Step 5: Return the final decrypted buffer (typically contains config text) ---
  return payloadBuffer;
}

// --- End of Decryption Logic ---

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB    fieldSize: 10 * 1024 * 1024 // 10MB
  }
});

const storedContents = {}; // In-memory storage

async function cleanupOldEntries() {
  const now = new Date();
  const expiryTime = 30 * 60 * 1000; // 30 minutes
  const expiredKeys = Object.keys(storedContents).filter(key => {
    const entryTime = new Date(storedContents[key].timestamp);
    return now - entryTime > expiryTime;
  });

  for (const key of expiredKeys) {
    console.log(`Deleting expired entry: ${key}`);
    delete storedContents[key];
  }
}

setInterval(cleanupOldEntries, 10 * 60 * 1000); // Cleanup every 10 minutes

app.use(express.static('public')); // Serve static files

app.post('/api/process', upload.single('file'), async (req, res) => {
  let contentBuffer = null; // Will hold the raw buffer for decryption
  const textFromBody = req.body.text;
  const uploadedFile = req.file;

  try {
    if (textFromBody && typeof textFromBody === 'string') {
      // Content comes from the text body (could be base64 or raw text)
      console.log('Processing text from body.');
      // Pass the string directly to the decryption function which will handle base64/raw
      contentBuffer = textFromBody;
    } else if (uploadedFile) {
      // Content comes from the uploaded file - read as buffer
      contentBuffer = await fs.readFile(uploadedFile.path);
      console.log('Processing content from uploaded file.');
      await fs.unlink(uploadedFile.path); // Delete temp file after reading
    } else {
      return res.status(400).json({ error: 'Either a text field named "text" or a file named "file" must be provided.' });
    }

    // --- Decrypt the content using the extracted logic ---
    let decryptedBuffer;
    try {
      // Pass the buffer (or string) to the decryption function
      decryptedBuffer = decryptTnlBuffer(contentBuffer);
      console.log('Decryption successful.');    } catch (decryptionError) {
      console.error('Decryption failed:', decryptionError.message);
      return res.status(400).json({ error: `Decryption failed: ${decryptionError.message}` });
    }

    // Convert the final decrypted buffer to a UTF-8 string for output
    let decryptedContentString;
    try {
       decryptedContentString = decryptedBuffer.toString('utf8');
    } catch (e) {
        console.error("Failed to convert decrypted buffer to UTF-8 string:", e);
        return res.status(500).json({ error: "Failed to process decrypted content." });
    }


    const uuid = uuidv4();

    // Store the DECRYPTED content string
    storedContents[uuid] = {
      content: decryptedContentString, // Store the final string result
      timestamp: new Date()
    };

    console.log(`Stored decrypted content with UUID: ${uuid}`);

    res.json({ uuid: uuid });

  } catch (error) {
    console.error('Error processing request:', error.message);
    if (req.file && req.file.path) {
      try {
        await fs.unlink(req.file.path);
      } catch (unlinkErr) {
        console.error('Error deleting temp file:', unlinkErr);
      }
    }
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large!' });
      }
      if (error.code === 'LIMIT_FIELD_SIZE') {
        return res.status(400).json({ error: 'Text input too large!' });
      }
    }
    res.status(500).json({ error: 'Internal Server Error during processing.' });
  }
});

app.get('/api/download/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const entry = storedContents[uuid];

    if (!entry) {
      console.log(`Request for non-existent UUID: ${uuid}`);
      return res.status(404).json({ error: 'File not found or link expired.' });
    }

    console.log(`Sending decrypted file for UUID: ${uuid}`);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="output.txt"`);

    res.send(entry.content); // Send the decrypted content string

  } catch (error) {
    console.error(`Error retrieving file for UUID ${uuid}:`, error.message);
    res.status(500).json({ error: 'Internal Server Error during download.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test the UI at http://localhost:${PORT}/index.html`);
});
