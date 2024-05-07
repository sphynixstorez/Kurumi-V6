const fs = require('fs')

global.namabot = "KURUMI-BOT"
global.namaowner = "Lycoris-Recoil"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285817287205','6285778324998']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `[ PAYMENT SPHYNIXSTORE ]

Qris : Scan barcode di atas

Dana : 085817287205
A/n : Rahmad

Shopeepay : 089524882317
A/n : sphynixstore

[ Silahkan melakukan pembayaran ]
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» /owner
» /addsewa
» /delsewa
» /ceksewa
» /listsewa
» /pay
» /setpay
» /list
» /addlist
» /updatelist
» /renamelist
» /dellist
» /jeda
» /tambah
» /kurang
» /kali
» /bagi
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}
