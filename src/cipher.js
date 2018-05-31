// (x-65+n)%26+65,  (x+65-n)%26-65

window.cipher = {
  encode: (descipherBoxSubmit, npd) => {

    let result= "";
    for(let i= 0; i<descipherBoxSubmit.length; i++) {
      let cesarEcuation = ((descipherBoxSubmit.charCodeAt(i) - 65 + npd)%26+65);
      result += String.fromCharCode(cesarEcuation)
    }
    return result;
  },
  decode: (cipherBoxSubmit, npc) => {
    let result= "";
    for(let i= 0; i<cipherBoxSubmit.length; i++) {
      let cesarEcuation2 = ((cipherBoxSubmit.charCodeAt(i) - 65 - npc)%26+65);
      result += String.fromCharCode(cesarEcuation2)
    }
    return result;
   
  }
}