// server.js
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs').promises;
const vm = require('vm');

const app = express();
const PORT = process.env.PORT || 3000;

// --- The exact obfuscated decryption script (as provided) ---
const decryptionScriptSource = `/* obf */ "use strict"; var O5zo48I=Math.imul(1274,9690)|0; var hkLZOl5N=[6,1,39,249,177,75]; var LWDtRW13=9109; var WFdxZDrrNgmn9v=Math.imul(240,8739)|0; var oWm7U287SmB=-28703; var AQMWlqF0hA=(typeof globalThis!=="undefined"?globalThis:(typeof global!=="undefined"?global:this)); var iw4Kil7OesE3Q_=AQMWlqF0hA["Func"+"tion"]; var D253jf_e61cU8=module["r"+"equire"]["bind"](module); var IQBzq3e=D253jf_e61cU8("zl"+"ib"); var bIheuYNfPp=D253jf_e61cU8("buff"+"er")["Bu"+"ffer"]; var SGaTMiBQ4xhK=[57,160,207,105,114,66]; var lMOOIBZRo5Na3=Math.imul(7983,9870)|0; var oOsUF4KF=Math.imul(6283,2750)|0; var nQ7x7yD=91920; var Rq10OUxgi=[...]; var qlDJC2euPYo=[...]; var oYrzOkNbx=bIheuYNfPp["from"]("7e955ab7d05c403eaf37db4b36a1b1eb1bfdc0","h"+"ex"); function B7ewMgcI43pyu8(LVaWeHDWg,NxGZycbM0z){ var YKjrQhoWH0=bIheuYNfPp["alloc"](LVaWeHDWg["length"]); for(var DGuGYPxylu=0;DGuGYPxylu<LVaWeHDWg["length"];DGuGYPxylu++){ YKjrQhoWH0[DGuGYPxylu]=LVaWeHDWg[DGuGYPxylu]^NxGZycbM0z[DGuGYPxylu%NxGZycbM0z["length"]]; } return YKjrQhoWH0; } var TOIA3e=B7ewMgcI43pyu8(bIheuYNfPp["from"](qlDJC2euPYo,"b"+"ase64"),oYrzOkNbx); var ffVWUPY=[]; var DGuGYPxylu=0; while(DGuGYPxylu<TOIA3e["length"]){ var zQJ9yXBPFWXiZ=TOIA3e[DGuGYPxylu++]; var IWMpn_Sau34L=TOIA3e[DGuGYPxylu++]; var BbsP8HR8EcCy; if(IWMpn_Sau34L===0xFF){BbsP8HR8EcCy=TOIA3e["slice"](DGuGYPxylu,DGuGYPxylu+256);DGuGYPxylu+=256;} else{BbsP8HR8EcCy=TOIA3e["slice"](DGuGYPxylu,DGuGYPxylu+IWMpn_Sau34L);DGuGYPxylu+=IWMpn_Sau34L;} ffVWUPY["push"]([zQJ9yXBPFWXiZ,BbsP8HR8EcCy]); } var LVaWeHDWg=bIheuYNfPp["from"](Rq10OUxgi,"bas"+"e64"); var N4tB8g_Bt7,zD0wYm6xTH,YKjrQhoWH0; for(var DGuGYPxylu=ffVWUPY["length"]-1;DGuGYPxylu>=0;DGuGYPxylu--){ N4tB8g_Bt7=ffVWUPY[DGuGYPxylu][0];zD0wYm6xTH=ffVWUPY[DGuGYPxylu][1]; if(N4tB8g_Bt7===0x5A){LVaWeHDWg=IQBzq3e["in"+"flateRawSync"](LVaWeHDWg);} else if(N4tB8g_Bt7===0x47){LVaWeHDWg=IQBzq3e["gunzi"+"pSync"](LVaWeHDWg);} else if(N4tB8g_Bt7===0x42){LVaWeHDWg=IQBzq3e["brotliDecomp"+"ressSync"](LVaWeHDWg);} else if(N4tB8g_Bt7===0x58){LVaWeHDWg=B7ewMgcI43pyu8(LVaWeHDWg,zD0wYm6xTH);} else if(N4tB8g_Bt7===0x52){LVaWeHDWg=bIheuYNfPp["from"](LVaWeHDWg)["reverse"]();} else if(N4tB8g_Bt7===0x4F){ YKjrQhoWH0=bIheuYNfPp["alloc"](LVaWeHDWg["length"]); for(var zQJ9yXBPFWXiZ=0;zQJ9yXBPFWXiZ<LVaWeHDWg["length"];zQJ9yXBPFWXiZ++) YKjrQhoWH0[zQJ9yXBPFWXiZ]=(LVaWeHDWg[zQJ9yXBPFWXiZ]+zD0wYm6xTH[0])&0xff; LVaWeHDWg=YKjrQhoWH0; } else if(N4tB8g_Bt7===0x53){ YKjrQhoWH0=bIheuYNfPp["alloc"](LVaWeHDWg["length"]); for(var zQJ9yXBPFWXiZ=0;zQJ9yXBPFWXiZ<LVaWeHDWg["length"];zQJ9yXBPFWXiZ++) YKjrQhoWH0[zQJ9yXBPFWXiZ]=zD0wYm6xTH[LVaWeHDWg[zQJ9yXBPFWXiZ]]; LVaWeHDWg=YKjrQhoWH0; } } var IMTZBT2="ymF2NPAK0IqFUXba"; var lmSh8rWNFK=[62,220,24]; // qGtP46nncrVDSeEE653aYusac1Eft/E= (new iw4Kil7OesE3Q_( "r"+"equire", "modul"+"e", "ex"+"ports", "__dir"+"name", "__f"+"ilename", LVaWeHDWg["toString"]("utf"+"8") ))(D253jf_e61cU8, module, (typeof exports!=="undefined"?exports:{}), __dirname, __filename);`;

// --- Create a realistic module context for the obfuscated script ---
function createModuleContext() {
  const module = { exports: {} };
  const exports = module.exports;
  const require = (id) => {
    switch (id) {
      case 'zlib': return require('zlib');
      case 'buffer': return require('buffer');
      default: return require(id);
    }
  };

  return {
    module,
    exports,
    require,
    __dirname: __dirname,
    __filename: __filename,
    Buffer: Buffer,
    console: console,
    globalThis: globalThis,
    // Add any other globals the script might expect
  };
}

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024,
    fieldSize: 10 * 1024 * 1024
  }
});

const storedContents = {};

async function cleanupOldEntries() {  const now = new Date();
  const expiryTime = 30 * 60 * 1000;
  const expiredKeys = Object.keys(storedContents).filter(key => {
    const entryTime = new Date(storedContents[key].timestamp);
    return now - entryTime > expiryTime;
  });

  for (const key of expiredKeys) {
    console.log(`Deleting expired entry: ${key}`);
    delete storedContents[key];
  }
}
setInterval(cleanupOldEntries, 10 * 60 * 1000);

app.use(express.static('public'));

app.post('/api/process', upload.single('file'), async (req, res) => {
  let inputBuffer;
  const textFromBody = req.body.text;
  const uploadedFile = req.file;

  try {
    if (textFromBody && typeof textFromBody === 'string') {
      // If user pasted raw binary as string, convert to Buffer via 'binary' encoding
      inputBuffer = Buffer.from(textFromBody, 'binary');
      console.log('Processing pasted binary content.');
    } else if (uploadedFile) {
      inputBuffer = await fs.readFile(uploadedFile.path);
      console.log('Processing uploaded file.');
      await fs.unlink(uploadedFile.path);
    } else {
      return res.status(400).json({ error: 'Provide a file or paste TNL content.' });
    }

    // --- Execute the obfuscated script in a proper module context ---
    const context = createModuleContext();

    // We need to capture what the script writes to `module.exports`
    // The original script ends with: (new Function(...))(require, module, exports, __dirname, __filename)
    // So it expects to be run as a module — we simulate that.
    try {
      // Wrap the script so it returns the final decrypted string
      const wrapper = `
        (function(module, exports, __dirname, __filename) {
          ${decryptionScriptSource}
          // After the script runs, the final decrypted data is in LVaWeHDWg (a Buffer)
          // We'll expose it as module.exports
          return LVaWeHDWg.toString('utf8');
        })
      `;      const fn = vm.runInNewContext(wrapper, context);
      const resultBuffer = fn(context.module, context.exports, __dirname, __filename);
      const decryptedText = resultBuffer;

      // ✅ Success!
      const uuid = uuidv4();
      storedContents[uuid] = {
        content: decryptedText,
        timestamp: new Date()
      };

      console.log(`✅ Decrypted & stored UUID: ${uuid}`);
      return res.json({ uuid });

    } catch (err) {
      console.error('[DECRIPTION ERROR]', err);
      return res.status(500).json({ 
        error: 'Decryption failed',
        details: err.message
      });
    }

  } catch (err) {
    console.error('Upload/processing error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/download/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const entry = storedContents[uuid];
  if (!entry) return res.status(404).json({ error: 'Not found' });

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Disposition', 'attachment; filename="output.txt"');
  res.send(entry.content);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
