const fs = require('fs')

global.namabot = "Kurumi"
global.namaowner = "Lycoris-Recoil"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285817287205','6285778324998']
global.pairingNumber = ""
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `
╔┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
╠┈┈┈ *[ PEMBAYARAN ]* ┈┈┈✧
╠┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
╎╭───────────────✧
╎│» Qris : Scan barcode di atas
╎│
╎│» Dana : 085817287205
╎│» A/n : Rahmad
╎│
╎│» Shopeepay : 089524882317
╎│» A/n : sphynixstore
╎│
╎│» Silahkan melakukan
╎│pembayaran
╎╰───────────────✧
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
`
module.exports.helpMenu = (pushname) =>{
  return `
╔┈┈┈┈「 *INFO USER* 」┈┈┈┈✧
╎╭─────────────────✧
╎│Halo kak
╎│𖣘• 𝗡𝗮𝗺𝗲 : ${pushname}
╎│Silahkan gunakan bot ini
╎╰─────────────────✧
╠┈┈┈┈「 *BOT INFO* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : Sphynix
╎│𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ©Kurumi-Bot
╎╰─────────────────✧
╠┈┈┈┈「 *RULES BOT* 」┈┈┈┈✧
╎╭─────────────────✧
╎│𖣘• DILARANG TELP BOT
╎│ 
╎│𖣘• JIKA HANYA DIBACA 
╎│    OLEH BOT COBA
╎│    UNTUK KETIK
╎│    KEMBALI
╎│ 
╎│𖣘• JIKA BOT MATI
╎│   HUBUNGI NO WA
╎│   DIBAWAH INI
╎│   wa.me/6285817287205
╎│   "Min, botnya mati"
╎╰─────────────────✧
╠┈┈┈┈「 *FITUR BOT* 」┈┈┈┈✧
╎╭─────────────────✧
╎│\`\`\`
╎│•❐ owner
╎│•❐ addsewa
╎│•❐ delsewa
╎│•❐ ceksewa
╎│•❐ listsewa
╎│•❐ pay
╎│•❐ setpay
╎│•❐ list
╎│•❐ addlist
╎│•❐ updatelist
╎│•❐ renamelist
╎│•❐ dellist
╎│•❐ jeda
╎│•❐ tambah
╎│•❐ kurang
╎│•❐ kali
╎│•❐ bagi
╎│•❐ setproses
╎│•❐ changeproses
╎│•❐ delsetproses
╎│•❐ setdone
╎│•❐ changedone
╎│•❐ delsetdone
╎│•❐ proses
╎│•❐ done
╎│•❐ welcome
╎│•❐ goodbye
╎│•❐ setwelcome
╎│•❐ changewelcome
╎│•❐ delsetwelcome
╎│•❐ setleft
╎│•❐ changeleft
╎│•❐ delsetleft
╎│•❐ antiwame
╎│•❐ antiwame2
╎│•❐ antilink
╎│•❐ antilink2
╎│•❐ open
╎│•❐ close
╎│•❐ hidetag
╎│•❐ add
╎│•❐ kick
╎│•❐ stiker
╎│•❐ ffid
╎│•❐ mlid
╎│•❐ setppgc
╎│•❐ setnamegc
╎│•❐ setdesgc
╎│•❐ linkgc
╎│•❐ resetlinkgc
╎│•❐ promote
╎│•❐ demote
╎│•❐ setbot
╎│•❐ updatesetbot
╎│•❐ delsetbot
╎│•❐ bot
╎│\`\`\`
╎╰─────────────────✧
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan).
Sebagai contoh :
» ketik : .owner » dengan (.)
» ketik :  owner » tanpa  (.)
`
}
